# COVID-19 Trend Prediction – AI-Powered Healthcare Analytics & Epidemic Intelligence System

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python)](https://python.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

An enterprise-grade, data-driven web application and machine learning prediction platform developed for public health surveillance, epidemiological trend forecasting, and hospital resource capacity monitoring.

Designed following WHO and Ministry of Health & Family Welfare (MoHFW) digital public-health design standards.

---

## 📌 Repository Information

- **GitHub Repository**: [https://github.com/Deb911/COVID-19-Trend-Prediction-Analysis](https://github.com/Deb911/COVID-19-Trend-Prediction-Analysis)
- **Production Frontend**: Deployable to [Vercel](https://vercel.com)
- **Production Backend**: Deployable to [Render](https://render.com) / [Railway](https://railway.app) / Docker
- **Default Branch**: `main`

---

## 🏛️ Dual-Dataset Architecture (100% Real Empirical Data)

This platform strictly rejects synthetic, randomized, or mock data. All indicators, historical curves, and machine learning models are anchored in two verified empirical data sources:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 DUAL-DATASET ARCHITECTURE                                   │
├──────────────────────────────────────────────┬──────────────────────────────────────────────┤
│ 1. OFFICIAL EPIDEMIOLOGICAL TIME-SERIES       │ 2. HEALTHCARE INFRASTRUCTURE LEADS DATABASE  │
│    (data/official_india_covid_history.csv)   │    (data/attached_covid_medical_dataset.xlsx)│
├──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ • 1,674 daily time-series records            │ • 2,361 verified medical facility records    │
│ • Jan 30, 2020 – Aug 04, 2024 continuous     │ • 20 specialized sheets & service categories │
│ • 45,041,748 total confirmed COVID-19 cases  │ • Hospital beds, oxygen plants, ICU, remdesivir│
│ • 533,623 total verified fatalities          │ • 71 administrative districts & subdivisions │
│ • Captures all 4 major epidemic waves        │ • April–June 2021 Catastrophic 2nd Wave leads │
└──────────────────────────────────────────────┴──────────────────────────────────────────────┘
```

### Pandemic Waves Identified in the Historical Data:
1. **Wave 1 (Ancestral Wuhan strain)**: Peak on **Sep 13, 2020** — 651,195 weekly cases
2. **Wave 2 (Delta variant - B.1.617.2)**: Peak on **May 09, 2021** — **2,738,957 weekly cases** (all-time pandemic peak)
3. **Wave 3 (Omicron variant - BA.1/BA.2)**: Peak on **Jan 23, 2022** — 2,176,339 weekly cases
4. **Wave 4 (Omicron subvariants)**: Peak on **Jun 26, 2022** — 115,212 weekly cases
5. **Latest Recorded Situation (Aug 04, 2024)**: 313 weekly cases, 7-day moving average of 45 cases/day, stable endemic baseline.

---

## 🚀 Key Features & System Modules

### 1. Public Health Surveillance Portal (WHO / MoHFW Inspired)
- **Active Surveillance Banner**: Real-time epidemiological status notice citing official disease reporting protocols.
- **6 Critical Surveillance KPIs**:
  - Latest Reported Weekly Cases (313)
  - 7-Day Daily Average (45 cases/day)
  - Current Epidemic Direction (Stable / Low Transmission)
  - Total Cumulative Confirmed Cases (45,041,748)
  - Total Cumulative Fatalities (533,623)
  - National Case Fatality Ratio (1.18%)
- **Pandemic Peaks Breakdown**: Visual summary cards detailing peak dates, case volumes, and epidemiological drivers for all 4 waves.
- **Multi-Year Comparative Table**: Direct annual breakdown comparing 2020, 2021, 2022, 2023, and 2024 across total cases, deaths, CFR, and peak daily incidence.

### 2. Historical Analysis Center (`/historical`)
- **Interactive Multi-Year Area Charts**: Dynamic time-series visualization tracking case trajectories from January 2020 to August 2024.
- **Interactive Range Selectors**: Switch between `All History`, `2020`, `2021 (Delta)`, `2022 (Omicron)`, `2023`, and `2024`.
- **Wave Transition Analysis**: Clear visual demarcations of epidemic waves with clinical strain indicators.

### 3. AI Epidemic Trend Prediction Center (`/prediction`)
- **Multi-Model Forecasting Engine**:
  - **ARIMA(1,1,1)**: Time-series autoregressive model for trend continuity (**Selected Best Performer**).
  - **Random Forest Regressor**: Non-linear ensemble capturing complex lag dependencies.
  - **Gradient Boosting Regressor**: Sequential boosting ensemble for residual minimization.
  - **Linear Baseline**: Benchmark reference for sanity checking.
- **Prediction Horizons**: 7-day, 14-day, and 30-day forward projections.
- **Confidence Intervals**: 95% heteroskedastic confidence intervals plotted alongside predicted trajectories.
- **Historical + Forecast Unified Timeline**: Continuous transition from actual historical observations to machine learning forecasts.

### 4. Data Transparency & Methodology (`/methodology`)
- **Model Evaluation Benchmark**: Transparent out-of-sample metrics (RMSE, MAE, MAPE, $R^2$) evaluated with strict zero-leakage chronological validation (80/20 temporal split).
- **Mathematical Formulations**: Mathematical definitions for 95% Confidence Intervals, Root Mean Squared Error, and Mean Absolute Percentage Error.
- **Data Quality Audit**: Complete sheet-by-sheet audit of the 20 raw Excel sheets, record counts, and deduplication hashes.

### 5. Healthcare Operations Dashboard (`/dashboard`)
- **District Risk Matrix**: Quantifies infection velocity, reproduction proxy ($R_t$), hospital bed strain index, and oxygen scarcity velocity across 71 districts.
- **Resource Allocation Insights**: Identifies facilities with critical bed occupancy or oxygen replenishment deficits.
- **Automated AI Briefings**: High-level clinical summaries generated from recent epidemiological indicators.

### 6. HIPAA & DPDP Privacy-Preserving Patient Directory (`/patients`)
- **Data Minimization**: Public users see masked contact numbers (`+91 98******99`) and masked facility names to comply with Digital Personal Data Protection (DPDP) and HIPAA guidelines.
- **Authenticated Access**: Authenticated administrators and healthcare workers can toggle unmasked views for emergency coordination.
- **Cryptographic Audit Trail**: Every access to unmasked medical leads is logged with timestamp, user ID, and IP address.

### 7. Secure Authentication with Gmail SMTP OTP
- **Two-Factor OTP Verification**: 6-digit cryptographic OTPs generated via `secrets.randbelow()`, hashed with SHA-256 in the database.
- **Gmail SMTP Integration**: Direct email dispatch using `smtp.gmail.com:587` with STARTTLS and Gmail App Passwords.
- **Strict Verification Gate**: Accounts are never activated or created until the OTP is successfully validated against the SHA-256 hash.
- **Diagnostic Admin Endpoints**: `/api/auth/smtp-status` and `/api/auth/test-smtp` for instant connectivity testing.

---

## 🛠️ Technology Stack

```
┌───────────────────────────────┬───────────────────────────────────────────────────────────┐
│ Layer                         │ Technologies                                              │
├───────────────────────────────┼───────────────────────────────────────────────────────────┤
│ Frontend Framework            │ React 18, TypeScript, Vite 5, Tailwind CSS 3.4            │
│ Data Visualization            │ Recharts, Lucide React Icons                             │
│ State & Navigation            │ React Router v6, LocalStorage Token Management            │
│ Backend Web API               │ FastAPI 0.110, Uvicorn (ASGI), Pydantic v2                │
│ Database & ORM                │ SQLite 3 / PostgreSQL, SQLAlchemy 2.0                     │
│ Security & Authentication     │ Python-Jose (JWT), Passlib (Bcrypt), Python-Secrets OTP   │
│ Machine Learning Suite        │ Scikit-learn, Statsmodels (ARIMA), Pure-Python Engine     │
│ Email & Notifications         │ SMTPLib (Gmail STARTTLS, Port 587, App Password)          │
│ Deployment Targets            │ Vercel (Frontend), Render / Railway / Docker (Backend)    │
└───────────────────────────────┴───────────────────────────────────────────────────────────┘
```

---

## 📐 Machine Learning Model Benchmarks

Models evaluated using strict **chronological hold-out validation** (80% training / 20% test partition, preserving temporal sequence):

| Model Architecture | Test RMSE | Test MAE | Test MAPE | Test $R^2$ | Model Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **ARIMA(1,1,1)** | **34.07** | **31.29** | **1986.2%** | **-5.11** | 🏆 **Selected Primary Model** |
| **Random Forest Regressor** | **113.46** | **101.43** | **4205.7%** | **-66.78** | Non-Linear Benchmark |
| **Linear Regression** | 203.62 | 149.36 | 8098.7% | -217.33 | Linear Baseline |
| **Gradient Boosting Regressor** | 205.91 | 186.57 | 7616.1% | -222.29 | Alternative Ensemble |

### Feature Engineering Pipeline:
- **Autoregressive Lags**: $y_{t-1}, y_{t-2}, y_{t-3}, y_{t-7}$ (capturing 1-day, 2-day, 3-day, and 7-day weekly periodicity)
- **Rolling Aggregations**: 3-day moving average, 7-day moving average, 7-day standard deviation
- **Epidemic Acceleration**: $(y_{t-1} - y_{t-2}) / (y_{t-2} + 1)$
- **Temporal Encodings**: Day-of-week, day-of-month, chronological step index

---

## 🚀 Deployment Guide: Vercel & Cloud

### Architecture in Production

Because SQLite requires a persistent disk (which serverless runtimes like Vercel ephemeralize between cold starts), the recommended production deployment pairs:
1. **Frontend on Vercel** (Global Edge CDN, instantaneous React SPA delivery)
2. **Backend on Render or Railway** (Persistent Python ASGI container running FastAPI + SQLite/PostgreSQL)

```
[ User Browser ]
       │
       ├───► [ Vercel Edge CDN ] ────► Serves React + TypeScript SPA Bundle
       │
       └───► [ Render / Railway ] ───► Serves FastAPI REST API (https://covid19-backend.onrender.com)
                                         │
                                         └───► SQLite / PostgreSQL Database
```

---

### Step 1: Push Code to GitHub

Open Windows PowerShell on your machine:

```powershell
cd "c:\Users\HP\Downloads\COVID-19 Trend Prediction Analysis"

# Set remote with your GitHub Personal Access Token (PAT)
.\git_runtime\cmd\git.exe remote set-url origin https://<YOUR_GITHUB_TOKEN>@github.com/Deb911/COVID-19-Trend-Prediction-Analysis.git

# Push main branch
.\git_runtime\cmd\git.exe push -u origin main
```

---

### Step 2: Deploy Backend to Render (Free)

1. Sign up at [Render.com](https://render.com) using your GitHub account.
2. Click **New +** → **Web Service**.
3. Select your repository: `Deb911/COVID-19-Trend-Prediction-Analysis`.
4. Configure service parameters:
   - **Name**: `covid19-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r ../requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. Add **Environment Variables**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_gmail@gmail.com
   SMTP_PASSWORD=your_16_char_gmail_app_password
   EMAILS_FROM_EMAIL=your_gmail@gmail.com
   EMAILS_FROM_NAME=COVID-19 Epidemic Intelligence Portal
   SECRET_KEY=generate_a_random_32_byte_secret_string
   ```
6. Click **Create Web Service**. Once deployed, copy your backend URL (e.g., `https://covid19-backend.onrender.com`).

---

### Step 3: Deploy Frontend to Vercel

1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New...** → **Project**.
3. Import `Deb911/COVID-19-Trend-Prediction-Analysis`.
4. In Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Under **Environment Variables**, add:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://covid19-backend.onrender.com` (your Render backend URL)
6. Click **Deploy**. Your application will be live at `https://covid19-trend-prediction-analysis.vercel.app`!

---

## 📧 Gmail SMTP OTP Configuration Guide

To enable real-time OTP emails for user registrations and password resets:

1. Go to your **Google Account**: [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Ensure **2-Step Verification** is turned **ON**.
3. Navigate to **App Passwords**: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Under App name, type `COVID-19 Healthcare Analytics`, and click **Create**.
5. Copy the generated **16-character passcode** (e.g., `abcd efgh ijkl mnop`).
6. Place it in your backend `.env` file or cloud environment settings:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=abcdefghijklmnop
   EMAILS_FROM_EMAIL=your_email@gmail.com
   EMAILS_FROM_NAME="COVID-19 Epidemic Intelligence Portal"
   ```

---

## 💻 Local Development Setup

### Quickstart (Single-Command Launch)

On Windows, double-click:
```bat
run_app.bat
```
This launches the integrated production-mode application at **http://127.0.0.1:8000** (serving both backend APIs and compiled frontend).

### Manual Concurrent Development

#### 1. Backend Service
```powershell
# In project root
$env:PYTHONPATH="backend"
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload --app-dir backend
```
- API Documentation (Swagger UI): **http://127.0.0.1:8000/api/docs**
- Health Probe: **http://127.0.0.1:8000/api/health**

#### 2. Frontend Development Server
```powershell
cd frontend
npm install
npm run dev
```
- Frontend UI: **http://localhost:5173** (automatically proxies `/api` calls to port 8000)

---

## 👥 Default Demo Credentials

| Role | Email | Password | Access Rights |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@covid-analytics.org` | `Admin@Covid2026!` | Full System Governance, Unmasked PII, Audit Logs, Dataset Ingestion |
| **Lead Epidemiologist** | `researcher@health.gov` | `Research@2026!` | Model Retraining, Analytics Exports, Model Diagnostics |
| **Public Visitor** | *(No login required)* | — | Public Dashboards, Historical Surveillance, AI Predictions, Masked PII |

---

## 📂 Project Directory Structure

```
COVID-19 Trend Prediction Analysis/
├── api/
│   └── index.py                    # Vercel Serverless Function entrypoint
├── backend/
│   ├── app/
│   │   ├── api/                    # REST endpoints (auth, analytics, predictions, datasets, etc.)
│   │   ├── core/                   # App configuration & security settings
│   │   ├── models/                 # SQLAlchemy ORM models (patients, users, audit, datasets)
│   │   └── services/               # Pandemic history, ML engine, cleaning, email service
│   └── main.py                     # FastAPI application factory
├── frontend/
│   ├── src/
│   │   ├── components/             # Reusable UI widgets (Navbar, Footer, MetricCard, etc.)
│   │   ├── pages/                  # LandingPage, HistoricalAnalysisPage, PredictionCenterPage, etc.
│   │   ├── services/api.ts         # Centralized API client with VITE_API_URL support
│   │   └── types/                  # TypeScript interface contracts
│   ├── dist/                       # Production pre-compiled frontend assets
│   ├── package.json
│   └── vite.config.ts
├── data/
│   ├── official_india_covid_history.csv  # 1,674 rows official epidemiological records
│   └── attached_covid_medical_dataset.xlsx # 2,361 verified medical facility leads
├── ml/
│   └── engine.py                   # Multi-model ML training, validation, and inference
├── requirements.txt                # Production Python dependencies
├── vercel.json                     # Vercel deployment configuration
├── run_app.bat                     # Windows one-click local production launcher
├── run_dev.bat                     # Windows concurrent development launcher
└── README.md                       # Master project documentation
```

---

## 📄 License & Attribution

This project is released under the **MIT License**.
Epidemiological surveillance metrics aligned with the World Health Organization (WHO) and Ministry of Health and Family Welfare (MoHFW) open data standards.
