import React, { useEffect, useState } from 'react';
import {
  ShieldAlert, Activity, TrendingUp, AlertTriangle,
  CheckCircle2, Gauge, Info, Filter, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { api } from '../services/api';
import { RiskAnalysisMetric } from '../types';

export const RiskAnalysisPage: React.FC = () => {
  const [riskData, setRiskData] = useState<RiskAnalysisMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterLevel, setFilterLevel] = useState<string>('All');

  useEffect(() => {
    api.getRiskAnalysis().then(setRiskData).finally(() => setLoading(false));
  }, []);

  const filtered = filterLevel === 'All'
    ? riskData
    : riskData.filter(d => d.activity_level.toLowerCase().includes(filterLevel.toLowerCase()));

  const getActivityBadge = (level: string) => {
    if (level.includes('High')) {
      return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-400 dark:border-rose-900';
    } else if (level.includes('Moderate')) {
      return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-900';
    } else if (level.includes('Increasing')) {
      return 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/60 dark:text-orange-400 dark:border-orange-900';
    } else if (level.includes('Decreasing')) {
      return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-400 dark:border-blue-900';
    } else {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-900';
    }
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Infection Risk & Healthcare Strain Assessment
            </h1>
            <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
              Statistical Classifications
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Objective mathematical risk stratification based on transmission velocity, reproduction proxy ($R_t$), and resource exhaustion rates.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-400" />
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 focus:outline-none"
          >
            <option value="All">All Classifications</option>
            <option value="High">High Trend Activity</option>
            <option value="Moderate">Moderate Trend Activity</option>
            <option value="Increasing">Increasing Trend</option>
            <option value="Decreasing">Decreasing Trend</option>
            <option value="Low">Low Trend Activity</option>
          </select>
        </div>
      </div>

      {/* Methodology Explainer Banner */}
      <div className="rounded-xl border border-slate-200 bg-blue-50/40 p-5 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-white">Mathematical Modeling Foundation:</strong>
            <p className="mt-1">
              Risk scores (0–100) are synthesized from 3 key quantitative variables:
              <strong> 1) Hospital Bed & Oxygen Strain Index</strong> (ratio of acute triage admissions to local facilities),
              <strong> 2) Transmission Reproduction Proxy $R_t$</strong> (computed via 7-day velocity of verified distress calls), and
              <strong> 3) Critical Resource Scarcity</strong> (percentage of local providers with exhausted inventory upon on-ground verification).
            </p>
          </div>
        </div>
      </div>

      {/* Risk Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.district}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                  {item.district}
                </h3>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold border ${getActivityBadge(item.activity_level)} whitespace-nowrap`}>
                  {item.activity_level}
                </span>
              </div>

              {/* Score Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Composite Risk Score</span>
                  <span className="font-bold text-slate-900 dark:text-white">{item.risk_score} / 100</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.risk_score >= 65 ? 'bg-rose-500' : item.risk_score >= 40 ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${Math.min(100, item.risk_score)}%` }}
                  />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                  <span className="text-[11px] text-slate-400 block">Reproduction Proxy ($R_t$)</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 block">
                    {item.reproduction_proxy_r}
                  </span>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                  <span className="text-[11px] text-slate-400 block">Oxygen Scarcity Rate</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400 text-sm mt-0.5 block">
                    {item.oxygen_scarcity_index}%
                  </span>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                  <span className="text-[11px] text-slate-400 block">Hospital Stress Score</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm mt-0.5 block">
                    {item.hospitalization_stress_index} / 100
                  </span>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                  <span className="text-[11px] text-slate-400 block">Weekly Growth Velocity</span>
                  <span className={`font-bold text-sm mt-0.5 flex items-center gap-0.5 ${
                    item.case_growth_velocity > 0 ? 'text-amber-600' : 'text-emerald-600'
                  }`}>
                    {item.case_growth_velocity > 0 ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                    {item.case_growth_velocity}%
                  </span>
                </div>
              </div>
            </div>

            {/* Statistical Explanation */}
            <div className="border-t border-slate-100 pt-3 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
              <strong>Statistical Basis:</strong> {item.statistical_basis}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
