from datetime import datetime
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Text, Index
from app.db.session import Base

class HealthcareRecord(Base):
    __tablename__ = "healthcare_records"

    id = Column(Integer, primary_key=True, index=True)
    import_id = Column(Integer, index=True, nullable=True)
    source_sheet = Column(String(100), nullable=True)
    district = Column(String(100), index=True, nullable=False)
    facility_type = Column(String(100), index=True, nullable=False)
    organization_name = Column(String(255), nullable=False)
    organization_name_masked = Column(String(255), nullable=False)
    location = Column(String(255), nullable=True)
    contact_raw = Column(String(255), nullable=True)
    contact_masked = Column(String(255), nullable=True)
    verification_status = Column(String(50), default="Unverified", nullable=False)
    availability_status = Column(String(50), default="Undetermined", nullable=False)
    pediatric_facility = Column(String(255), nullable=True)
    timestamp = Column(DateTime, index=True, nullable=True)
    date = Column(String(20), index=True, nullable=False)
    comments = Column(Text, nullable=True)
    is_duplicate = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    __table_args__ = (
        Index('idx_district_facility', 'district', 'facility_type'),
        Index('idx_date_facility', 'date', 'facility_type'),
    )

class DailyEpidemicMetric(Base):
    __tablename__ = "daily_epidemic_metrics"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String(20), unique=True, index=True, nullable=False)
    total_requests = Column(Integer, default=0, nullable=False)
    bed_demands = Column(Integer, default=0, nullable=False)
    oxygen_demands = Column(Integer, default=0, nullable=False)
    medicine_demands = Column(Integer, default=0, nullable=False)
    testing_demands = Column(Integer, default=0, nullable=False)
    ambulance_demands = Column(Integer, default=0, nullable=False)
    unavailable_count = Column(Integer, default=0, nullable=False)
    available_count = Column(Integer, default=0, nullable=False)
    scarcity_rate = Column(Float, default=0.0, nullable=False)
    total_requests_7d_avg = Column(Float, default=0.0, nullable=False)
    scarcity_rate_7d_avg = Column(Float, default=0.0, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
