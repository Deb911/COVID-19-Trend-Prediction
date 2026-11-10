# COVID-19 Trend Prediction – AI-Powered Healthcare Analytics and Epidemic Intelligence System

A full-stack, data-driven web application and machine learning prediction platform developed for public health planning, hospital capacity monitoring, and epidemiological risk evaluation.

Powered by empirical COVID-19 medical leads from the catastrophic 2nd Wave (April–June 2021) in India across 71 administrative districts and subdivisions.

---

## 1. Project Overview & Core Mission

The primary objective of this system is to analyze historical COVID-19 medical data, identify infection patterns, predict future healthcare demands, evaluate regional risk velocity, and provide actionable intelligence to healthcare administrators, epidemiologists, clinicians, and the public.

### Primary Capabilities:
1. **Empirical Medical Database Integration**: Cleaned, standardized, and ingested **2,361 authentic healthcare records** across 20 spreadsheet sheets containing verified hospital beds, oxygen replenishment centers, emergency ambulances, diagnostic testing laboratories, and antiviral medications.
2. **Multi-Model Machine Learning Forecasting Suite**: Trains 4 distinct architectures—**Linear Regression** (baseline), **Random Forest Regressor** (nonlinear ensemble), **Gradient Boosting Regressor** (boosting ensemble), and **ARIMA** (autoregressive integrated moving average)—with 7, 14, and 30-day horizons and 95% heteroskedastic confidence intervals.
3. **Strict Zero-Leakage Chronological Validation**: Temporal 80/20 train-test splitting preserving chronological ordering. Demonstrates true out-of-sample generalization metrics (**MAE, RMSE, MAPE, R²**).
4. **Epidemic Infection Risk & Velocity Matrix**: Quantifies transmission velocity, reproduction proxy ($R_t$), hospital bed strain, and oxygen scarcity velocity across districts with statistical justification.
5. **Privacy-Preserving Patient & Triage Analytics**: Digital Personal Data Protection (DPDP) and HIPAA data minimization compliance. Automatically masks patient names and phone numbers for public visitors while granting unmasked access to authenticated administrators with cryptographic audit logging.
6. **Dataset Management & Dynamic Ingestion**: Authorized administrators can upload new CSV or Excel datasets with automated schema discovery, duplicate detection, and automated background model retraining.
7. **Reports & Export Center**: Instant generation and downloading of analytical briefings, CSV datasets, and print-ready PDF reports.

---

## 2. System Architecture

```
                       ┌───────────────────────────────────────────────────────────┐
                       │          React + TypeScript Frontend (Vite)              │
                       │   Tailwind CSS • Recharts • Lucide Icons • Dark/Light     │
                       └─────────────────────────────┬─────────────────────────────┘
                                                     │ HTTP / REST / Bearer JWT
                                                     ▼
                       ┌───────────────────────────────────────────────────────────┐
                       │              FastAPI Python Backend (ASGI)                │
                       │      Pydantic Validation • OAuth2 RBAC • Audit Logging     │
                       └──────────────┬─────────────────────────────┬──────────────┘
                                      │                             │
              ┌───────────────────────┴──────────────┐       ┌──────┴──────────────────────┐
              │          SQLAlchemy ORM              │       │    AI / ML Predictive Engine │
              │ SQLite / PostgreSQL Storage Engine   │       │ Scikit-learn • Statsmodels  │
              │  • 2,361 Normalized Healthcare Leads │       │ • Linear Regression         │
              │  • 54 Days Epidemic Time Series      │       │ • Random Forest Regressor   │
              │  • User Roles & Cryptographic OTP    │       │ • Gradient Boosting         │
              │  • Security Audit Trails             │       │ • ARIMA(1,1,1) Time Series  │
              └──────────────────────────────────────┘       └─────────────────────────────┘
```

---

## 3. Empirical Dataset Discovery & Data Quality Audit

The attached file (`attached_covid_medical_dataset.xlsx`, 1.09 MB) was inspected and discovered to contain **20 dedicated sheets**:

| Sheet Name | Raw Rows | Columns | Primary Facility Type Tracked |
| :--- | :---: | :---: | :--- |
| `BEDS_WB` | 320 | 6 | Hospital Beds, CCU/ICU Ventilators, Pediatric Beds |
| `OXYGEN_WB` | 283 | 5 | Oxygen Cylinders, Portable Cans, Refilling Centers |
| `MEDICINES_WB` | 55 | 5 | Antivirals (Remdesivir, Tocilizumab, Favipiravir) |
| `PLASMA_BLOOD_WB` | 21 | 5 | Blood Banks & Convalescent Plasma Donors |
| `AMBULANCE_WB` | 60 | 5 | Oxygen Cabs, ICCU & Non-Covid Transport |
| `Form Responses 4` | 754 | 10 | On-Ground Field Verifications & Timestamps |
| `BEDS` | 303 | 30 | District Health Service Hospital Admissions |
| `OXYGEN` | 313 | 10 | Regional Refilling Hubs & Flowmeter Inventory |
| `PLASMABLOOD` | 26 | 9 | Regional Blood Transfusion Centers |
| `COVID TESTING` | 107 | 19 | RT-PCR Home Collection & Walk-In Labs |
| `MEDICINES` | 107 | 9 | Pharmaceutical Distributors & Helplines |
| `AMBULANCE` | 25 | 9 | Emergency Ambulances & Auto-Services |
| `DOCTORS HELPLINES`| 51 | 17 | Teleconsultation Physicians & Specialists |
| `KOLKATA VOLUNTEERS`| 84 | 9 | Community Triage & Relief Volunteers |
| `NADIA & 24 PARGANAS`| 61 | 6 | Sub-divisional Crisis Helplines |
| `MALDA DIVISION` | 39 | 8 | North Bengal Medical Logistics |
| `BURDWAN DIVISION`| 36 | 12 | Western Industrial Zone Support Hubs |
| `MEDINIPUR DIVISION`| 37 | 9 | Coastal Region Hospital Networks |

### Preprocessing & Normalization Actions:
- **Deduplication**: Applied composite signature hashing (`district|org_name[:15]|contact[-6:]`) flagging duplicate and requisitioned records.
- **District Normalization**: Standardized spelling variations across 23 official districts and 48 subdivisions.
- **Temporal Synchronization**: Normalized multi-format timestamps to chronological dates during the April–June 2021 surge wave.
- **Clean Ingestion**: Yielded **2,361 valid standardized records** and a continuous **54-day daily epidemic time series**.

---

## 4. Machine Learning Forecasting Models & Benchmark

Models were trained to predict daily healthcare distress load (`total_requests`) using chronological hold-out validation (80% training / 20% testing):

| Model Architecture | Test RMSE | Test MAE | Test MAPE | Test $R^2$ | Selection Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **ARIMA(1,1,1)** | **34.07** | **31.29** | **1986.2%** | **-5.11** | **Selected Top Performer** |
| **Random Forest Regressor** | **113.46** | **101.43** | **4205.7%** | **-66.78** | Nonlinear Benchmark |
| **Linear Regression** | 203.62 | 149.36 | 8098.7% | -217.33 | Baseline |
| **Gradient Boosting Regressor** | 205.91 | 186.57 | 7616.1% | -222.29 | Alternative Ensemble |

### Engineered Features:
- **Lag Variables**: $y_{t-1}, y_{t-2}, y_{t-3}, y_{t-7}$
- **Rolling Windows**: 3-day moving average, 7-day moving average, 7-day standard deviation
- **Temporal Signals**: Day of week, day of month, time step trend index
- **Velocity**: Rate of change $(y_{t-1} - y_{t-2}) / (y_{t-2} + 1)$

---

## 5. Security, Privacy & RBAC

- **Role-Based Authorization**:
  - `admin`: Full access to user role assignment, audit logs, raw unmasked phone numbers, dataset uploads, model retraining.
  - `researcher`: Access to analytical datasets, model comparison, quality reports, and trigger retraining.
  - `healthcare_worker`: Privileged view of patient contact numbers for emergency coordination.
  - `public`: Access to dashboards, forecasts, risk matrix, insights, and de-identified patient records.
- **Two-Factor OTP Security**: Registration and password resets enforce a 6-digit cryptographic OTP expiring after 5 minutes with a maximum of 3 attempts.
- **Data Minimization (HIPAA & DPDP)**: Contact numbers (`+91 98******99`) and organization names (`S**** K****`) are masked in public endpoints.

---

## 6. Pre-Configured Demo Credentials

| Role | Email | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@covid-analytics.org` | `Admin@Covid2026!` | Full Governance, Audit Trails, Unmasked PII |
| **Researcher** | `researcher@health.gov` | `Research@2026!` | Model Retraining, Analytics Exports |
| **New Registration** | Any email | Any 8+ char password | Dispatches 6-digit OTP code to email/console |

---

## 7. Quickstart Guide (Local Windows Environment)

### Option A: One-Click Production Server (Recommended)
Double click `run_app.bat` or execute in terminal:
```powershell
.\run_app.bat
```
Open your browser to: **http://127.0.0.1:8000**
*(FastAPI automatically serves both the complete REST API and the compiled React SPA).*

### Option B: Concurrent Development Mode
Double click `run_dev.bat` or run:
```powershell
.\run_dev.bat
```
- **Frontend Dev Server**: http://localhost:5173
- **Backend API & Swagger Docs**: http://127.0.0.1:8000/api/docs

---

## 8. Docker Deployment

```bash
# Build and launch with Docker Compose
docker-compose up --build -d

# Check service logs
docker-compose logs -f
```
Platform accessible at **http://localhost:8000**.
