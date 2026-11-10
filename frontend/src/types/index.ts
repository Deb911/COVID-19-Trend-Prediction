export interface User {
  id: number;
  email: string;
  full_name: string;
  role: 'admin' | 'researcher' | 'healthcare_worker' | 'public';
  is_verified: boolean;
  is_active: boolean;
  created_at?: string;
  last_login?: string;
}

export interface OverviewMetrics {
  total_records: number;
  unique_facilities: number;
  active_districts: number;
  critical_bed_facilities: number;
  oxygen_supply_centers: number;
  testing_diagnostic_labs: number;
  ambulance_networks: number;
  verified_percentage: number;
  scarcity_rate: number;
  data_freshness: string;
  epidemic_wave_phase: string;
}

export interface TimelinePoint {
  date: string;
  total_requests: number;
  bed_demands: number;
  oxygen_demands: number;
  medicine_demands: number;
  testing_demands: number;
  ambulance_demands: number;
  scarcity_rate: number;
  total_requests_7d_avg: number;
}

export interface DistrictStat {
  district: string;
  total_facilities: number;
  bed_facilities: number;
  oxygen_suppliers: number;
  ambulance_providers: number;
  testing_centers: number;
  verified_count: number;
  distress_level: 'High' | 'Moderate' | 'Low';
}

export interface RiskAnalysisMetric {
  district: string;
  activity_level: string;
  case_growth_velocity: number;
  reproduction_proxy_r: number;
  hospitalization_stress_index: number;
  oxygen_scarcity_index: number;
  risk_score: number;
  statistical_basis: string;
}

export interface InsightItem {
  id: string;
  category: string;
  severity: 'critical' | 'warning' | 'info' | 'positive';
  title: string;
  description: string;
  metric_basis: string;
  timestamp: string;
}

export interface PatientRecord {
  id: number;
  source_sheet?: string;
  district: string;
  facility_type: string;
  organization_name: string;
  location?: string;
  contact_number: string;
  verification_status: string;
  availability_status: string;
  pediatric_facility?: string;
  timestamp?: string;
  comments?: string;
  is_duplicate: boolean;
}

export interface ModelPerformanceItem {
  model_name: string;
  mae: number;
  rmse: number;
  mape: number;
  r2: number;
  residual_std: number;
  train_samples: number;
  test_samples: number;
  last_trained: string;
  is_best: boolean;
}

export interface ForecastPoint {
  date: string;
  step: number;
  forecast: number;
  lower_bound: number;
  upper_bound: number;
}

export interface ForecastResponse {
  horizon_days: number;
  model_used: string;
  forecast_points: ForecastPoint[];
  lower_bound_series: number[];
  upper_bound_series: number[];
  confidence_level: string;
  model_rmse: number;
  disclaimer: string;
}

export interface DatasetImportItem {
  id: number;
  filename: string;
  file_size: number;
  total_records: number;
  valid_records: number;
  duplicate_records: number;
  rejected_records: number;
  quality_score: number;
  status: string;
  uploaded_by: string;
  created_at: string;
}

export interface AuditLogItem {
  id: number;
  user_email: string;
  action: string;
  details: string;
  ip_address: string;
  created_at: string;
}

// ─── New types for redesigned COVID-19 dashboard ───────────────────────────

export interface LatestSituation {
  latest_date: string;
  latest_date_raw: string;
  latest_cases: number;
  latest_deaths: number;
  total_confirmed_cases: number;
  total_reported_deaths: number;
  cases_7d_avg: number;
  deaths_7d_avg: number;
  daily_case_change: number;
  percentage_change_7d: number;
  trend_direction: string;
  data_source: string;
  is_historical_archive: boolean;
  archive_notice: string;
}

export interface WaveSummary {
  wave_name: string;
  peak_date: string;
  peak_daily_cases: number;
  peak_7d_avg: number;
  period: string;
  characteristics: string;
}

export interface PandemicPeaks {
  highest_daily_cases: number;
  highest_cases_date: string;
  highest_cases_date_raw: string;
  highest_daily_deaths: number;
  highest_deaths_date: string;
  waves: WaveSummary[];
}

export interface YearlyComparison {
  year: number;
  total_cases: number;
  total_deaths: number;
  average_daily_cases: number;
  peak_daily_cases: number;
  peak_date: string;
  peak_daily_deaths: number;
  yoy_change_pct: number | null;
  is_partial: boolean;
  notes: string;
}

export interface UnifiedChartPoint {
  date: string;
  historical_cases: number | null;
  expected_trend: number | null;
  forecasted_cases: number | null;
  lower_bound: number | null;
  upper_bound: number | null;
  is_forecast: boolean;
  is_peak: boolean;
}

export interface UnifiedChartResponse {
  points: UnifiedChartPoint[];
  peak_marker: { date: string; value: number; label: string };
  transition_date: string;
}

export interface DynamicInsight {
  id: string;
  category: string;
  title: string;
  statement: string;
  type: string;
  badge: string;
}

// ─── System Health ──────────────────────────────────────────────────────────

export interface SystemHealth {
  status: string;
  timestamp: string;
  database: {
    type: string;
    size_bytes: number;
    size_formatted: string;
    total_records: number;
  };
  models_status: {
    trained_models_count: number;
    pipeline_status: string;
    latest_run: string;
  };
  system_resources: {
    memory_usage_mb: number;
    cpu_percent: number;
  };
}
