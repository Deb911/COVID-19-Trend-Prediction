import os
import json
import io
import csv
from typing import List
from datetime import datetime
from fastapi import APIRouter, Depends, UploadFile, File, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse, StreamingResponse
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.dataset import DatasetImport, DataQualityReport
from app.models.record import HealthcareRecord, DailyEpidemicMetric
from app.models.audit import AuditLog
from app.models.user import User
from app.api.deps import require_role
from app.schemas.dataset import DatasetImportItem, DataQualityResponse
from app.services.cleaning import clean_district, clean_facility, parse_date, clean_status, mask_pii, mask_phone

router = APIRouter(prefix="/datasets", tags=["Dataset Management"])

@router.get("/history", response_model=List[DatasetImportItem])
def get_import_history(db: Session = Depends(get_db)):
    imports = db.query(DatasetImport).order_by(DatasetImport.created_at.desc()).all()
    return imports

@router.get("/quality/{import_id}", response_model=DataQualityResponse)
def get_quality_report(import_id: int, db: Session = Depends(get_db)):
    report = db.query(DataQualityReport).filter(DataQualityReport.import_id == import_id).first()
    if not report:
        raise HTTPException(status_code=404, detail="Quality report not found for specified import ID.")
    
    return DataQualityResponse(
        import_id=report.import_id,
        completeness_pct=report.completeness_pct,
        missing_fields=json.loads(report.missing_fields_json),
        duplicate_stats=json.loads(report.duplicate_stats_json),
        issues=json.loads(report.issues_json or "[]"),
        created_at=report.created_at
    )

@router.post("/upload", response_model=DatasetImportItem)
async def upload_dataset(
    file: UploadFile = File(...),
    background_tasks: BackgroundTasks = BackgroundTasks(),
    user: User = Depends(require_role(["admin", "researcher"])),
    db: Session = Depends(get_db)
):
    if not file.filename.endswith(('.csv', '.xlsx', '.xls')):
        raise HTTPException(status_code=400, detail="Only CSV and Excel files (.csv, .xlsx, .xls) are supported.")

    contents = await file.read()
    file_size = len(contents)
    import pandas as pd
    
    try:
        if file.filename.endswith('.csv'):
            df = pd.read_csv(io.BytesIO(contents))
        else:
            df = pd.read_excel(io.BytesIO(contents))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to parse spreadsheet: {str(e)}")

    if df.empty:
        raise HTTPException(status_code=400, detail="The uploaded file contains no rows.")

    total_rows = len(df)
    
    # Map column names case-insensitively
    col_map = {str(c).strip().lower(): c for c in df.columns}
    def find_col(aliases):
        for a in aliases:
            for k, orig in col_map.items():
                if a in k:
                    return df[orig]
        return pd.Series([None] * total_rows)

    facility_col = find_col(["facility", "resource type", "service"])
    district_col = find_col(["district", "area", "city"])
    org_col = find_col(["organisation", "organization", "name", "provider"])
    loc_col = find_col(["location", "address"])
    contact_col = find_col(["contact", "phone", "number"])
    status_col = find_col(["availability", "status"])
    time_col = find_col(["timestamp", "time", "date"])

    valid_records = []
    duplicate_count = 0
    rejected_count = 0
    seen_sigs = set()

    for i in range(total_rows):
        org = str(org_col.iloc[i]) if not pd.isna(org_col.iloc[i]) else ""
        contact = str(contact_col.iloc[i]) if not pd.isna(contact_col.iloc[i]) else ""
        dist = clean_district(district_col.iloc[i])
        fac = clean_facility(facility_col.iloc[i])
        loc = str(loc_col.iloc[i]) if not pd.isna(loc_col.iloc[i]) else ""
        
        if not org and not contact and dist == "Unspecified":
            rejected_count += 1
            continue

        raw_time = time_col.iloc[i]
        parsed_dt = parse_date(raw_time) or datetime.utcnow()
        avail = clean_status(status_col.iloc[i])

        sig = f"{dist.lower()}|{org.lower()[:15]}|{str(contact)[-6:]}"
        is_dup = sig in seen_sigs
        if is_dup:
            duplicate_count += 1
        seen_sigs.add(sig)

        valid_records.append({
            "district": dist,
            "facility_type": fac,
            "organization_name": org or "Healthcare Facility",
            "organization_name_masked": mask_pii(org) if org else "Healthcare Facility",
            "location": loc or dist,
            "contact_raw": contact,
            "contact_masked": mask_phone(contact),
            "verification_status": "Verified",
            "availability_status": avail,
            "timestamp": parsed_dt,
            "date": parsed_dt.strftime("%Y-%m-%d"),
            "comments": "User uploaded dataset record",
            "is_duplicate": is_dup
        })

    valid_count = len(valid_records) - duplicate_count
    quality_score = round(max(0.0, min(100.0, 100 - (rejected_count / total_rows * 50) - (duplicate_count / total_rows * 30))), 1)

    import_rec = DatasetImport(
        filename=file.filename,
        file_size=file_size,
        total_records=total_rows,
        valid_records=valid_count,
        duplicate_records=duplicate_count,
        rejected_records=rejected_count,
        quality_score=quality_score,
        status="completed",
        uploaded_by=user.email
    )
    db.add(import_rec)
    db.flush()

    # Save Quality Report
    q_rep = DataQualityReport(
        import_id=import_rec.id,
        completeness_pct=quality_score,
        missing_fields_json=json.dumps({"unspecified_districts": sum(1 for r in valid_records if r["district"] == "Unspecified")}),
        duplicate_stats_json=json.dumps({"duplicates_flagged": duplicate_count}),
        issues_json=json.dumps([f"Parsed {valid_count} valid records, flagged {duplicate_count} duplicates, rejected {rejected_count} blank entries."])
    )
    db.add(q_rep)

    # Insert valid records
    objs = [
        HealthcareRecord(
            import_id=import_rec.id,
            source_sheet="Upload",
            district=r["district"],
            facility_type=r["facility_type"],
            organization_name=r["organization_name"],
            organization_name_masked=r["organization_name_masked"],
            location=r["location"],
            contact_raw=r["contact_raw"],
            contact_masked=r["contact_masked"],
            verification_status=r["verification_status"],
            availability_status=r["availability_status"],
            timestamp=r["timestamp"],
            date=r["date"],
            comments=r["comments"],
            is_duplicate=r["is_duplicate"]
        )
        for r in valid_records
    ]
    db.bulk_save_objects(objs)
    db.add(AuditLog(
        user_email=user.email,
        action="DATASET_UPLOAD",
        details=f"Uploaded {file.filename} with {total_rows} rows (valid: {valid_count}, dups: {duplicate_count})"
    ))
    db.commit()
    db.refresh(import_rec)

    # Trigger ML retraining in background
    from app.api.predictions import run_retraining_job
    background_tasks.add_task(run_retraining_job)

    return import_rec

@router.get("/download/{export_format}")
def download_processed_dataset(export_format: str):
    json_path = os.path.join("data", "standardized_records.json")
    if not os.path.exists(json_path):
        raise HTTPException(status_code=404, detail="Processed dataset file not found.")

    if export_format.lower() == "csv":
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        stream = io.StringIO()
        if data:
            keys = list(data[0].keys())
            writer = csv.DictWriter(stream, fieldnames=keys)
            writer.writeheader()
            for r in data:
                row_copy = dict(r)
                if "contact_raw" in row_copy:
                    row_copy["contact_raw"] = row_copy.get("contact_masked", "")
                writer.writerow(row_copy)
        response = StreamingResponse(iter([stream.getvalue()]), media_type="text/csv")
        response.headers["Content-Disposition"] = "attachment; filename=covid19_standardized_healthcare_records.csv"
        return response

    return FileResponse(
        json_path,
        media_type="application/json",
        filename="covid19_standardized_healthcare_records.json"
    )
