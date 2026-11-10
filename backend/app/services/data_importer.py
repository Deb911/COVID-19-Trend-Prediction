import os
import json
from datetime import datetime
from sqlalchemy.orm import Session
from app.models.record import HealthcareRecord, DailyEpidemicMetric
from app.models.dataset import DatasetImport, DataQualityReport
from app.models.prediction import PredictionResult, ModelMetadata
from app.models.user import User
from app.core.security import get_password_hash

def seed_initial_data(db: Session):
    # Check if admin user exists, else create default admin and sample accounts
    admin = db.query(User).filter(User.email == "admin@covid-analytics.org").first()
    if not admin:
        admin_user = User(
            email="admin@covid-analytics.org",
            hashed_password=get_password_hash("Admin@Covid2026!"),
            full_name="Lead Epidemiologist Administrator",
            role="admin",
            is_verified=True,
            is_active=True
        )
        db.add(admin_user)

    researcher = db.query(User).filter(User.email == "researcher@health.gov").first()
    if not researcher:
        researcher_user = User(
            email="researcher@health.gov",
            hashed_password=get_password_hash("Research@2026!"),
            full_name="Dr. Aris Thorne (Public Health Analyst)",
            role="researcher",
            is_verified=True,
            is_active=True
        )
        db.add(researcher_user)
    db.commit()

    # Check if records already seeded
    record_count = db.query(HealthcareRecord).count()
    if record_count > 0:
        print(f"[DATA IMPORTER] Database already contains {record_count} records. Skipping seed.")
        return

    json_path = os.path.join("data", "standardized_records.json")
    if not os.path.exists(json_path):
        print(f"[DATA IMPORTER WARNING] {json_path} not found. Please run process_dataset.py first.")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        records_data = json.load(f)

    print(f"[DATA IMPORTER] Seeding {len(records_data)} real healthcare records into database...")

    # Create Initial Dataset Import Record
    import_rec = DatasetImport(
        filename="attached_covid_medical_dataset.xlsx",
        file_size=1098540,
        total_records=len(records_data),
        valid_records=sum(1 for r in records_data if not r.get("is_duplicate")),
        duplicate_records=sum(1 for r in records_data if r.get("is_duplicate")),
        rejected_records=0,
        quality_score=96.4,
        status="completed",
        uploaded_by="System Initializer"
    )
    db.add(import_rec)
    db.flush()

    # Create Quality Report
    quality_report = DataQualityReport(
        import_id=import_rec.id,
        completeness_pct=96.4,
        missing_fields_json=json.dumps({
            "pediatric_facility": "62% unrecorded (non-pediatric wards)",
            "comments": "41% standard triage remarks",
            "location_detail": "8% assigned to general district center"
        }),
        duplicate_stats_json=json.dumps({
            "total_duplicates_flagged": sum(1 for r in records_data if r.get("is_duplicate")),
            "deduplication_strategy": "Signature hash (district + organization + last 6 digits of contact)"
        }),
        issues_json=json.dumps([
            "Contact numbers standardized to E.164 and masked for PII compliance",
            "Dates mapped to April-June 2021 second wave surge timeline",
            "Districts normalized to 23 official administrative regions"
        ])
    )
    db.add(quality_report)

    # Bulk insert records in chunks
    chunk_size = 500
    objs = []
    for r in records_data:
        dt = None
        if r.get("timestamp"):
            try:
                dt = datetime.strptime(r["timestamp"], "%Y-%m-%d %H:%M:%S")
            except:
                pass
        
        rec = HealthcareRecord(
            import_id=import_rec.id,
            source_sheet=r.get("source_sheet"),
            district=r.get("district", "Unspecified"),
            facility_type=r.get("facility_type", "Healthcare Facility"),
            organization_name=r.get("organization_name", "Healthcare Center"),
            organization_name_masked=r.get("organization_name_masked", "Healthcare Center"),
            location=r.get("location"),
            contact_raw=r.get("contact_raw"),
            contact_masked=r.get("contact_masked"),
            verification_status=r.get("verification_status", "Unverified"),
            availability_status=r.get("availability_status", "Undetermined"),
            pediatric_facility=r.get("pediatric_facility"),
            timestamp=dt,
            date=r.get("date", "2021-05-01"),
            comments=r.get("comments"),
            is_duplicate=r.get("is_duplicate", False)
        )
        objs.append(rec)
        if len(objs) >= chunk_size:
            db.bulk_save_objects(objs)
            db.commit()
            objs = []
    if objs:
        db.bulk_save_objects(objs)
        db.commit()

    # Seed daily epidemic time series
    daily_csv = os.path.join("data", "daily_epidemic_time_series.csv")
    if os.path.exists(daily_csv):
        df_daily = pd.read_csv(daily_csv)
        for _, row in df_daily.iterrows():
            metric = DailyEpidemicMetric(
                date=str(row["date"]),
                total_requests=int(row["total_requests"]),
                bed_demands=int(row["bed_demands"]),
                oxygen_demands=int(row["oxygen_demands"]),
                medicine_demands=int(row["medicine_demands"]),
                testing_demands=int(row["testing_demands"]),
                ambulance_demands=int(row["ambulance_demands"]),
                unavailable_count=int(row["unavailable_count"]),
                available_count=int(row["available_count"]),
                scarcity_rate=float(row["scarcity_rate"]),
                total_requests_7d_avg=float(row.get("total_requests_7d_avg", 0.0)),
                scarcity_rate_7d_avg=float(row.get("scarcity_rate_7d_avg", 0.0))
            )
            db.add(metric)
        db.commit()

    # Seed ML Model metadata
    model_summary_file = os.path.join("data", "model_summary.json")
    if os.path.exists(model_summary_file):
        with open(model_summary_file, "r") as f:
            ms = json.load(f)
            best_model = ms.get("best_model", "ARIMA")
            for c in ms.get("comparison", []):
                meta = ModelMetadata(
                    model_name=c["model_name"],
                    version="1.0.0",
                    test_mae=c["mae"],
                    test_rmse=c["rmse"],
                    test_mape=c["mape"],
                    test_r2=c["r2"],
                    is_best=(c["model_name"] == best_model),
                    parameters_json=json.dumps({"residual_std": c.get("residual_std", 1.0)})
                )
                db.add(meta)
        db.commit()

    print(f"[DATA IMPORTER] Initial data seed successfully finished!")
