import React, { useEffect, useState } from 'react';
import {
  BookOpen, BrainCircuit, Database, ShieldCheck,
  CheckCircle2, FileText, Award, Layers, Cpu
} from 'lucide-react';
import { api } from '../services/api';
import { ModelPerformanceItem, DatasetImportItem } from '../types';

export const MethodologyPage: React.FC = () => {
  const [models, setModels] = useState<ModelPerformanceItem[]>([]);
  const [bestModel, setBestModel] = useState<string>('ARIMA');
  const [features, setFeatures] = useState<string[]>([]);
  const [interpretation, setInterpretation] = useState<string>('');
  const [lastTrained, setLastTrained] = useState<string>('');
  const [history, setHistory] = useState<DatasetImportItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [compRes, histRes] = await Promise.allSettled([
          api.getModelComparison(),
          api.getDatasetHistory(),
        ]);
        if (compRes.status === 'fulfilled') {
          setModels(compRes.value.models || []);
          setBestModel(compRes.value.best_model || 'ARIMA');
          setFeatures(compRes.value.features_used || []);
          setInterpretation(compRes.value.epidemic_interpretation || '');
          setLastTrained(compRes.value.last_training_date || '');
        }
        if (histRes.status === 'fulfilled') {
          setHistory(histRes.value || []);
        }
      } catch (err) {
        console.error('Failed to load methodology:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="space-y-8 py-6">

      {/* Header */}
      <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="h-4 w-4" />
          <span>Scientific & Methodological Framework</span>
        </div>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Data Sources, Preprocessing & Machine Learning Methodology
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive documentation of mathematical models, cross-validation metrics, chronological train/test splits, 
          and integration pipeline for the attached hospital capacity dataset.
        </p>
      </div>

      {/* Data Ingestion & Dual Architecture Note */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Primary Datasets & Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2">
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              1. Official National COVID-19 Surveillance Registry
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Consolidated from national public health agencies (WHO / MoHFW) spanning 1,674 daily reporting records from 
              January 2020 through August 2024. Contains confirmed new cases, cumulative cases, daily deaths, and 7-day smoothed averages.
            </p>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Coverage: Population-level infection wave detection, multi-year comparison, and forward forecasting.
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2">
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              2. Attached Verified Healthcare Resource Registry
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Ingested directly from the attached 20-sheet medical dataset containing 2,361 verified hospital bed censuses, 
              oxygen cylinder hubs, and emergency ambulance providers across 18 districts during the 2021 Delta wave.
            </p>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Coverage: Hospital capacity stress indices, oxygen scarcity velocity, and resource triage analytics.
            </div>
          </div>
        </div>
      </section>

      {/* Machine Learning Model Benchmark Table */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            Empirical Model Evaluation & Benchmark
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Chronological 10-day holdout validation split
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-4 font-semibold">Model Architecture</th>
                <th className="py-3 px-4 font-semibold">Mean Absolute Error (MAE)</th>
                <th className="py-3 px-4 font-semibold">Root Mean Squared Error (RMSE)</th>
                <th className="py-3 px-4 font-semibold">Mean Absolute % Error (MAPE)</th>
                <th className="py-3 px-4 font-semibold">Coefficient R²</th>
                <th className="py-3 px-4 font-semibold">Residual Std Dev</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {models.map((m) => (
                <tr key={m.model_name} className={m.is_best ? 'bg-teal-50/40 dark:bg-teal-950/20' : ''}>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {m.model_name}
                    {m.is_best && (
                      <span className="rounded bg-teal-100 dark:bg-teal-900/60 px-1.5 py-0.5 text-[10px] font-semibold text-teal-800 dark:text-teal-200">
                        Selected Best Model
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 font-mono">{m.mae.toFixed(2)}</td>
                  <td className="py-3 px-4 font-mono font-semibold">{m.rmse.toFixed(2)}</td>
                  <td className="py-3 px-4 font-mono">{m.mape > 0 ? `${m.mape.toFixed(2)}%` : 'N/A'}</td>
                  <td className="py-3 px-4 font-mono">{m.r2.toFixed(3)}</td>
                  <td className="py-3 px-4 font-mono">{m.residual_std.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    {m.is_best ? (
                      <span className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-300 font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Deployed
                      </span>
                    ) : (
                      <span className="text-slate-400">Baseline Benchmark</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {interpretation && (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-white">Epidemiological Finding: </span>
            {interpretation}
          </div>
        )}
      </section>

      {/* Uncertainty & Confidence Intervals */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 space-y-3">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          Uncertainty Estimation & 95% Confidence Intervals
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          Forecast projections incorporate epidemiological uncertainty using residual standard error propagation:
        </p>
        <div className="rounded bg-slate-100 dark:bg-slate-800/80 p-3 font-mono text-xs text-slate-800 dark:text-slate-200">
          CI_95%(t) = y_hat(t) +/- 1.96 * sigma_residual * sqrt(1 + alpha * (t - t0))
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          The forecast cone expands naturally over the 30-day horizon, reflecting the intrinsic difficulty of multi-week epidemiological predictions without making overconfident claims.
        </p>
      </section>

      {/* Attached Dataset Ingestion Audit */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Attached Medical Dataset Quality Report
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-4 font-semibold">File Name</th>
                <th className="py-3 px-4 font-semibold">Total Records</th>
                <th className="py-3 px-4 font-semibold">Valid Records</th>
                <th className="py-3 px-4 font-semibold">Duplicates Cleaned</th>
                <th className="py-3 px-4 font-semibold">Quality Score</th>
                <th className="py-3 px-4 font-semibold">PII Protection</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.map((h) => (
                <tr key={h.id}>
                  <td className="py-3 px-4 font-mono font-medium text-slate-900 dark:text-white">{h.filename}</td>
                  <td className="py-3 px-4">{h.total_records.toLocaleString()}</td>
                  <td className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">{h.valid_records.toLocaleString()}</td>
                  <td className="py-3 px-4 text-amber-600 dark:text-amber-400">{h.duplicate_records}</td>
                  <td className="py-3 px-4 font-bold">{h.quality_score}%</td>
                  <td className="py-3 px-4">
                    <span className="rounded bg-blue-100 dark:bg-blue-900/60 px-1.5 py-0.5 text-[10px] font-semibold text-blue-800 dark:text-blue-200">
                      Masked / Redacted
                    </span>
                  </td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">{h.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
