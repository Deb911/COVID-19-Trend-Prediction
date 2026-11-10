import {
  OverviewMetrics, TimelinePoint, DistrictStat, RiskAnalysisMetric,
  InsightItem, PatientRecord, ModelPerformanceItem, ForecastResponse,
  DatasetImportItem, AuditLogItem, SystemHealth,
  LatestSituation, PandemicPeaks, YearlyComparison, UnifiedChartResponse, DynamicInsight
} from '../types';

// suppress unused import warning
type _User = import('../types').User;

const API_BASE = '/api';

function getAuthHeaders(): HeadersInit {
  const token = localStorage.getItem('covid_auth_token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

export const api = {
  // Analytics
  getOverview: async (): Promise<OverviewMetrics> => {
    const res = await fetch(`${API_BASE}/analytics/overview`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load platform overview metrics');
    return res.json();
  },

  getTimeline: async (): Promise<TimelinePoint[]> => {
    const res = await fetch(`${API_BASE}/analytics/timeline`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load epidemic timeline');
    return res.json();
  },

  getDistricts: async (): Promise<DistrictStat[]> => {
    const res = await fetch(`${API_BASE}/analytics/districts`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load district metrics');
    return res.json();
  },

  getRiskAnalysis: async (): Promise<RiskAnalysisMetric[]> => {
    const res = await fetch(`${API_BASE}/analytics/risk-analysis`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load epidemic risk matrix');
    return res.json();
  },

  getInsights: async (): Promise<InsightItem[]> => {
    const res = await fetch(`${API_BASE}/analytics/insights`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load automated insights');
    return res.json();
  },

  getPatientRecords: async (params: {
    page?: number;
    limit?: number;
    district?: string;
    facility_type?: string;
    availability?: string;
    search?: string;
  }): Promise<{
    total: number;
    page: number;
    limit: number;
    total_pages: number;
    pii_protected: boolean;
    records: PatientRecord[];
  }> => {
    const query = new URLSearchParams();
    if (params.page) query.append('page', params.page.toString());
    if (params.limit) query.append('limit', params.limit.toString());
    if (params.district && params.district !== 'All') query.append('district', params.district);
    if (params.facility_type && params.facility_type !== 'All') query.append('facility_type', params.facility_type);
    if (params.availability && params.availability !== 'All') query.append('availability', params.availability);
    if (params.search) query.append('search', params.search);

    const res = await fetch(`${API_BASE}/analytics/patient-records?${query.toString()}`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to load healthcare records');
    return res.json();
  },

  // Predictions
  getModelComparison: async (): Promise<{
    models: ModelPerformanceItem[];
    best_model: string;
    features_used: string[];
    last_training_date: string;
    epidemic_interpretation: string;
  }> => {
    const res = await fetch(`${API_BASE}/predictions/models`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load model evaluation metrics');
    return res.json();
  },

  getForecast: async (horizon = 7, model = 'ARIMA'): Promise<ForecastResponse> => {
    const res = await fetch(`${API_BASE}/predictions/forecast?horizon=${horizon}&model=${encodeURIComponent(model)}`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to load trend prediction forecast');
    return res.json();
  },

  getValidation: async (model = 'ARIMA') => {
    const res = await fetch(`${API_BASE}/predictions/validation?model=${encodeURIComponent(model)}`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to load model validation comparison');
    return res.json();
  },

  retrainModels: async () => {
    const res = await fetch(`${API_BASE}/predictions/retrain`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || 'Retraining failed. Admin privileges required.');
    }
    return res.json();
  },

  // Datasets
  getDatasetHistory: async (): Promise<DatasetImportItem[]> => {
    const res = await fetch(`${API_BASE}/datasets/history`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load dataset import history');
    return res.json();
  },

  getQualityReport: async (importId: number) => {
    const res = await fetch(`${API_BASE}/datasets/quality/${importId}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load quality report');
    return res.json();
  },

  uploadDataset: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const token = localStorage.getItem('covid_auth_token');
    const headers: HeadersInit = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(`${API_BASE}/datasets/upload`, {
      method: 'POST',
      headers,
      body: formData
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || 'Dataset upload failed');
    }
    return res.json();
  },

  // Reports
  generateReport: async (params: { report_type: string; format: string; district?: string }) => {
    const res = await fetch(`${API_BASE}/reports/generate`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(params)
    });
    if (!res.ok) throw new Error('Failed to generate report');
    return res.json();
  },

  // Admin
  getUsers: async (page = 1, limit = 20) => {
    const res = await fetch(`${API_BASE}/admin/users?page=${page}&limit=${limit}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load user registry');
    return res.json();
  },

  updateUserRole: async (userId: number, role: string) => {
    const res = await fetch(`${API_BASE}/admin/users/${userId}/role`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ role })
    });
    if (!res.ok) throw new Error('Failed to update role');
    return res.json();
  },

  getAuditLogs: async (limit = 50): Promise<AuditLogItem[]> => {
    const res = await fetch(`${API_BASE}/admin/audit-logs?limit=${limit}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load audit logs');
    return res.json();
  },

  getSystemHealth: async (): Promise<SystemHealth> => {
    const res = await fetch(`${API_BASE}/admin/system-health`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('Failed to load system health');
    return res.json();
  },

  // ── New COVID-19 public endpoints ──────────────────────────────────────────
  getLatestSituation: async (): Promise<LatestSituation> => {
    const res = await fetch(`${API_BASE}/analytics/latest-situation`);
    if (!res.ok) throw new Error('Failed to load latest situation');
    return res.json();
  },

  getPeaks: async (): Promise<PandemicPeaks> => {
    const res = await fetch(`${API_BASE}/analytics/peaks`);
    if (!res.ok) throw new Error('Failed to load pandemic peaks');
    return res.json();
  },

  getYearlyComparison: async (): Promise<YearlyComparison[]> => {
    const res = await fetch(`${API_BASE}/analytics/multi-year-comparison`);
    if (!res.ok) throw new Error('Failed to load yearly comparison');
    return res.json();
  },

  getUnifiedChart: async (range = 'all'): Promise<UnifiedChartResponse> => {
    const res = await fetch(`${API_BASE}/analytics/unified-chart?range=${range}`);
    if (!res.ok) throw new Error('Failed to load unified chart data');
    return res.json();
  },

  getDynamicInsights: async (): Promise<DynamicInsight[]> => {
    const res = await fetch(`${API_BASE}/analytics/dynamic-insights`);
    if (!res.ok) throw new Error('Failed to load dynamic insights');
    return res.json();
  },

  getSMTPStatus: async (token: string) => {
    const res = await fetch(`${API_BASE}/auth/smtp-status`, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    });
    if (!res.ok) throw new Error('Failed to fetch SMTP status');
    return res.json();
  },

  testSMTP: async (testEmail: string, token: string) => {
    const res = await fetch(`${API_BASE}/auth/test-smtp`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ test_email: testEmail })
    });
    if (!res.ok) throw new Error('SMTP test failed');
    return res.json();
  }
};
