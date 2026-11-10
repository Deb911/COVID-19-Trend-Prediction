import React, { useEffect, useState } from 'react';
import {
  Sparkles, TrendingUp, AlertTriangle, ShieldCheck,
  CheckCircle2, Info, Download, ArrowUpRight, ArrowDownRight, Lightbulb
} from 'lucide-react';
import { api } from '../services/api';
import { InsightItem } from '../types';
import { Link } from 'react-router-dom';

export const AIInsightsPage: React.FC = () => {
  const [insights, setInsights] = useState<InsightItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getInsights().then(setInsights).finally(() => setLoading(false));
  }, []);

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'border-rose-200 bg-rose-50/50 text-rose-800 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-300';
      case 'warning':
        return 'border-amber-200 bg-amber-50/50 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-300';
      case 'positive':
        return 'border-emerald-200 bg-emerald-50/50 text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300';
      default:
        return 'border-blue-200 bg-blue-50/50 text-blue-800 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300';
    }
  };

  const getBadgeVariant = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
      case 'warning': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      case 'positive': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI Insights & Recommendation Engine
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Automated Interpretation</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Algorithmic interpretation of statistical shifts, capacity bottlenecks, and epidemic deceleration signals.
          </p>
        </div>

        <Link
          to="/reports"
          className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 shadow-sm transition"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Export Analytical Brief</span>
        </Link>
      </div>

      {/* Primary Insights Feed */}
      <div className="space-y-4">
        {insights.map((item) => (
          <div
            key={item.id}
            className={`rounded-2xl border p-6 transition shadow-xs ${getSeverityStyle(item.severity)}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${getBadgeVariant(item.severity)}`}>
                  {item.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Ref: {item.id} &bull; Recorded {item.timestamp}
                </span>
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="rounded-xl bg-white/70 p-3 border border-slate-200/60 dark:bg-slate-900/60 dark:border-slate-800 text-xs">
              <span className="font-semibold text-slate-900 dark:text-white">Quantitative Mathematical Foundation: </span>
              <span className="text-slate-600 dark:text-slate-400 font-mono">{item.metric_basis}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Resource Allocation Recommendation Matrix */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-5 flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Operational Healthcare Resource Planning Guidelines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
            <strong className="text-slate-900 dark:text-white text-sm block mb-1">
              Tier-1 Urban Buffer Stocks
            </strong>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Kolkata and North 24 Parganas show 60%+ concentration of acute bed and ICU admissions. 
              Deploy mobile oxygen langars and oxygen concentrator banks within 3 km of super-specialty hospitals.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
            <strong className="text-slate-900 dark:text-white text-sm block mb-1">
              Pediatric Ward Preparedness
            </strong>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Only 38% of hospitals reported confirmed pediatric ICU or NICU availability. 
              Repurpose sub-divisional hospital wards for specialized pediatric respiratory beds during wave transitions.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
            <strong className="text-slate-900 dark:text-white text-sm block mb-1">
              Testing Positivity Decoupling
            </strong>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Standardize home RT-PCR collection turnaround time to under 24 hours to prevent hospital bed hoarding 
              by patients waiting for official laboratory admission reports.
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-3 text-[11px] text-slate-400 dark:border-slate-800">
          Generated in accordance with public health resource optimization standards.
        </div>
      </div>

    </div>
  );
};
