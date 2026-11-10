from typing import List, Dict, Any, Optional
from pydantic import BaseModel
from datetime import datetime

class DatasetImportItem(BaseModel):
    id: int
    filename: str
    file_size: int
    total_records: int
    valid_records: int
    duplicate_records: int
    rejected_records: int
    quality_score: float
    status: str
    uploaded_by: str
    created_at: datetime

    class Config:
        from_attributes = True

class DataQualityResponse(BaseModel):
    import_id: int
    completeness_pct: float
    missing_fields: Dict[str, Any]
    duplicate_stats: Dict[str, Any]
    issues: List[str]
    created_at: datetime
