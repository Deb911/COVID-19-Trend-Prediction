import React from 'react';
import { Activity, ShieldCheck, HeartHandshake, Database, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 transition-colors mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: System info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Activity className="h-5 w-5" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                COVID-19 EPIDEMIC INTELLIGENCE SYSTEM
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mb-3">
              An intelligent healthcare analytics and forecasting platform designed for public health planning, 
              hospital resource allocation, and epidemic velocity tracking. Operating on verified clinical leads 
              and hospital bed availability records from the 2021 pandemic wave.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>DPDP Framework & HIPAA Data Minimization Standard Compliant</span>
            </div>
          </div>

          {/* Col 2: Methodological References */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Design & Data Benchmarks
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <a href="https://data.who.int/dashboards/covid19" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1 transition">
                  WHO COVID-19 Dashboard <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://ourworldindata.org/coronavirus" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1 transition">
                  Our World in Data <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://coronavirus.jhu.edu/" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1 transition">
                  Johns Hopkins Resource Center <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li className="text-[11px] text-slate-400">
                Primary Dataset: Attached 20-Sheet Medical Registry
              </li>
            </ul>
          </div>

          {/* Col 3: Academic & Project Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Platform Governance
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li>Role-Based Access Control (RBAC)</li>
              <li>Real Email OTP Verification</li>
              <li>Chronological Out-of-Sample ML</li>
              <li>Automatic PII De-identification</li>
              <li>Cryptographic Audit Logging</li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} COVID-19 Trend Prediction System &bull; University Final-Year Engineering Capstone Project.
          </p>
          <p className="text-[11px] text-slate-500 text-center sm:text-right">
            <strong>Medical Disclaimer:</strong> Statistical estimates are computed from empirical triage data. 
            Not intended as direct clinical diagnoses or emergency medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
