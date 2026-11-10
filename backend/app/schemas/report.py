from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class GenerateReportRequest(BaseModel):
    report_type: str # daily_analytical, weekly_infection, prediction_summary, regional_risk, data_quality
    format: str # pdf, csv, excel
    district: Optional[str] = "All"
    notes: Optional[str] = None

class ReportResponse(BaseModel):
    report_id: str
    report_title: str
    generated_at: str
    format: str
    data_source: str
    summary_metrics: dict
    download_url: str
