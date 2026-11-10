from typing import List, Optional, Dict, Any
from pydantic import BaseModel

class OverviewMetric(BaseModel):
    total_records: int
    unique_facilities: int
    active_districts: int
    critical_bed_facilities: int
    oxygen_supply_centers: int
    testing_diagnostic_labs: int
    ambulance_networks: int
    verified_percentage: float
    scarcity_rate: float
    data_freshness: str
    epidemic_wave_phase: str

class TimelinePoint(BaseModel):
    date: str
    total_requests: int
    bed_demands: int
    oxygen_demands: int
    medicine_demands: int
    testing_demands: int
    ambulance_demands: int
    scarcity_rate: float
    total_requests_7d_avg: float

class DistrictStat(BaseModel):
    district: str
    total_facilities: int
    bed_facilities: int
    oxygen_suppliers: int
    ambulance_providers: int
    testing_centers: int
    verified_count: int
    distress_level: str # High, Moderate, Low

class RiskAnalysisMetric(BaseModel):
    district: str
    activity_level: str # High, Moderate, Low, Increasing, Decreasing
    case_growth_velocity: float
    reproduction_proxy_r: float
    hospitalization_stress_index: float
    oxygen_scarcity_index: float
    risk_score: float # 0 - 100
    statistical_basis: str

class InsightItem(BaseModel):
    id: str
    category: str # Trend, Scarcity, Anomaly, Recommendation
    severity: str # critical, warning, info, positive
    title: str
    description: str
    metric_basis: str
    timestamp: str

class PatientRecordItem(BaseModel):
    id: int
    source_sheet: Optional[str]
    district: str
    facility_type: str
    organization_name: str
    location: Optional[str]
    contact_number: str
    verification_status: str
    availability_status: str
    pediatric_facility: Optional[str]
    timestamp: Optional[str]
    comments: Optional[str]
    is_duplicate: bool
