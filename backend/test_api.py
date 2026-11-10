import sys
from starlette.testclient import TestClient
from app.main import app

def run_tests():
    with TestClient(app) as client:
        print("1. Testing GET /api/health...", flush=True)
        r = client.get("/api/health")
        print("Health:", r.status_code, r.json(), flush=True)
        assert r.status_code == 200

        print("2. Testing GET /api/analytics/overview...", flush=True)
        r = client.get("/api/analytics/overview")
        data = r.json()
        print(f"Overview: Total records: {data['total_records']}, Beds: {data['critical_bed_facilities']}, Oxygen: {data['oxygen_supply_centers']}, Scarcity: {data['scarcity_rate']}%", flush=True)
        assert r.status_code == 200
        assert data['total_records'] == 2361

        print("3. Testing GET /api/analytics/timeline...", flush=True)
        r = client.get("/api/analytics/timeline")
        print(f"Timeline days count: {len(r.json())}", flush=True)
        assert r.status_code == 200
        assert len(r.json()) > 0

        print("4. Testing GET /api/predictions/models...", flush=True)
        r = client.get("/api/predictions/models")
        m_data = r.json()
        print(f"Models: Best = {m_data['best_model']}, Count = {len(m_data['models'])}", flush=True)
        assert r.status_code == 200

        print("5. Testing GET /api/predictions/forecast?horizon=14...", flush=True)
        r = client.get("/api/predictions/forecast?horizon=14")
        f_data = r.json()
        print(f"Forecast 14-days: Points = {len(f_data['forecast_points'])}, Model = {f_data['model_used']}", flush=True)
        assert r.status_code == 200
        assert len(f_data['forecast_points']) == 14

        print("6. Testing POST /api/auth/register...", flush=True)
        test_email = "physician.test@med.org"
        reg_payload = {
            "email": test_email,
            "password": "Password123!",
            "full_name": "Dr. Sarah Lin",
            "role": "healthcare_worker"
        }
        r = client.post("/api/auth/register", json=reg_payload)
        print("Register Status:", r.status_code, flush=True)
        assert r.status_code in [200, 400] # 400 if rerun

        print("7. Testing admin login...", flush=True)
        r = client.post("/api/auth/login", json={"email": "admin@covid-analytics.org", "password": "Admin@Covid2026!"})
        print("Admin Login Status:", r.status_code, flush=True)
        assert r.status_code == 200
        token = r.json()["access_token"]

        print("8. Testing GET /api/analytics/patient-records (Admin vs Public)...", flush=True)
        r_admin = client.get("/api/analytics/patient-records?page=1&limit=3", headers={"Authorization": f"Bearer {token}"})
        r_public = client.get("/api/analytics/patient-records?page=1&limit=3")
        print("Admin records PII protected:", r_admin.json()["pii_protected"], flush=True)
        print("Public records PII protected:", r_public.json()["pii_protected"], flush=True)
        assert r_admin.json()["pii_protected"] == False
        assert r_public.json()["pii_protected"] == True

        print("9. Testing POST /api/reports/generate...", flush=True)
        r = client.post("/api/reports/generate", json={"report_type": "prediction_summary", "format": "csv"})
        print("Report Generated:", r.status_code, r.json()["report_id"], flush=True)
        assert r.status_code == 200

        print("\n>>> ALL 9 CORE BACKEND & ML INTEGRATION TESTS PASSED WITH 100% SUCCESS! <<<", flush=True)

if __name__ == "__main__":
    run_tests()
