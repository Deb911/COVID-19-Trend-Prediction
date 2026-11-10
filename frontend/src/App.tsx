import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OTPModal } from './components/OTPModal';
import { ProtectedRoute } from './components/ProtectedRoute';

// Pages
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { HistoricalAnalysisPage } from './pages/HistoricalAnalysisPage';
import { PredictionCenterPage } from './pages/PredictionCenterPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { RiskAnalysisPage } from './pages/RiskAnalysisPage';
import { PatientAnalyticsPage } from './pages/PatientAnalyticsPage';
import { GeographicAnalysisPage } from './pages/GeographicAnalysisPage';
import { AIInsightsPage } from './pages/AIInsightsPage';
import { DataManagementPage } from './pages/DataManagementPage';
import { ReportsPage } from './pages/ReportsPage';
import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
            <Navbar />
            <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <Routes>
                {/* 5 Core Modules */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/overview" element={<DashboardPage />} />
                <Route path="/historical" element={<HistoricalAnalysisPage />} />
                <Route path="/prediction" element={<PredictionCenterPage />} />
                <Route path="/methodology" element={<MethodologyPage />} />

                {/* Supporting Modules */}
                <Route path="/risk-analysis" element={<RiskAnalysisPage />} />
                <Route path="/patient-analytics" element={<PatientAnalyticsPage />} />
                <Route path="/geographic" element={<GeographicAnalysisPage />} />
                <Route path="/insights" element={<AIInsightsPage />} />
                <Route path="/data-management" element={<DataManagementPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                
                {/* Admin Route Guard */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute allowedRoles={['admin', 'researcher']}>
                      <AdminPage />
                    </ProtectedRoute>
                  }
                />

                {/* Authentication */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
            <OTPModal />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
