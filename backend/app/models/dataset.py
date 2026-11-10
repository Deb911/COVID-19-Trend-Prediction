from datetime import datetime
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Text
from app.db.session import Base

class DatasetImport(Base):
    __tablename__ = "dataset_imports"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String(255), nullable=False)
    file_size = Column(Integer, nullable=False)
    total_records = Column(Integer, default=0, nullable=False)
    valid_records = Column(Integer, default=0, nullable=False)
    duplicate_records = Column(Integer, default=0, nullable=False)
    rejected_records = Column(Integer, default=0, nullable=False)
    quality_score = Column(Float, default=100.0, nullable=False)
    status = Column(String(50), default="completed", nullable=False) # processing, completed, failed
    uploaded_by = Column(String(255), default="system", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

class DataQualityReport(Base):
    __tablename__ = "data_quality_reports"

    id = Column(Integer, primary_key=True, index=True)
    import_id = Column(Integer, index=True, nullable=False)
    completeness_pct = Column(Float, default=100.0, nullable=False)
    missing_fields_json = Column(Text, nullable=False)
    duplicate_stats_json = Column(Text, nullable=False)
    issues_json = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
