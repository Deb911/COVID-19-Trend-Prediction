from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, Text
from app.db.session import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String(255), index=True, nullable=True)
    action = Column(String(100), nullable=False) # LOGIN, REGISTER, UPLOAD_DATASET, RETRAIN_MODEL, EXPORT_REPORT
    details = Column(Text, nullable=True)
    ip_address = Column(String(50), default="127.0.0.1", nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
