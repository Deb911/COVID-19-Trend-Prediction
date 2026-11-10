import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Calendar, AlertCircle, Info,
  CheckCircle2, ArrowRight, BookOpen, Clock, Activity, Sparkles
} from 'lucide-react';
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';
import { api } from '../services/api';
import {
  UnifiedChartResponse, LatestSituation, PandemicPeaks, DynamicInsight
} from '../types';

export const PredictionCenterPage: React.FC = () => {
  const [chartData, setChartData] = useState<UnifiedChartResponse | null>(null);
  const [latest, setLatest] = useState<LatestSituation | null>(null);
  const [peaks, setPeaks] = useState<PandemicPeaks | null>(null);
  const [insights, setInsights] = useState<DynamicInsight[]>([]);
  const [selectedRange, setSelectedRange] = useState<string>('90d');
  const [horizon, setHorizon] = useState<number>(14);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadPredictionData() {
      setLoading(true);
      try {
        const [chRes, latRes, pkRes, inRes] = await Promise.allSettled([
          api.getUnifiedChart(selectedRange),
          api.getLatestSituation(),
          api.getPeaks(),
          api.getDynamicInsights(),
        ]);
        if (chRes.status === 'fulfilled') setChartData(chRes.value);
        if (latRes.status === 'fulfilled') setLatest(latRes.value);
        if (pkRes.status === 'fulfilled') setPeaks(pkRes.value);
        if (inRes.status === 'fulfilled') setInsights(inRes.value);
      } catch (err) {
        console.error('Failed to load predictions:', err);
      } finally {
        setLoading(false);
      }
    }
    loadPredictionData();
  }, [selectedRange]);

  const rangeButtons = [
    { label: 'Past 30 Days', value: '30d' },
    { label: 'Past 90 Days', value: '90d' },
    { label: 'Past 6 Months', value: '6m' },
    { label: '2024 Baseline', value: '2024' },
    { label: '2023 Wave', value: '2023' },
    { label: '2022 Omicron', value: '2022' },
    { label: '2021 Delta Peak', value: '2021' },
    { label: 'All History', value: 'all' },
  ];

  return (
    <div className="space-y-8 py-6">

      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              <TrendingUp className="h-4 w-4" />
              <span>Intelligent Healthcare Forecasting</span>
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              COVID-19 Interactive Trend Prediction Dashboard
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Continuous time-series analysis connecting validated historical observations directly with 
              forward-looking empirical projections and 95% uncertainty confidence intervals.
            </p>
          </div>
          <Link
            to="/methodology"
            className="self-start sm:self-center inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition"
          >
            <BookOpen className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>Model Details & Validation</span>
          </Link>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Latest Observed Data
          </span>
          <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            {latest ? latest.latest_cases.toLocaleString() : '—'}
          </div>
          <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            {latest?.latest_date || 'Surveillance Date'}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            7-Day Smoothed Trend
          </span>
          <div className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
            {latest ? latest.cases_7d_avg.toLocaleString() : '—'}
          </div>
          <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Baseline incidence
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Trend Direction
          </span>
          <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white truncate">
            {latest ? latest.trend_direction : 'Stable Baseline'}
          </div>
          <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            {latest ? `${latest.percentage_change_7d > 0 ? '+' : ''}${latest.percentage_change_7d}% 7-day velocity` : '—'}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Forecast Horizon
          </span>
          <div className="mt-1 text-2xl font-bold text-teal-600 dark:text-teal-400">
            Next 30 Days
          </div>
          <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Autoregressive continuation
          </div>
        </div>
      </div>

      {/* Main Prediction Graph Section */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-3 dark:border-slate-800">
          <div>
            <h2 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              Historical Observation & Predictive Forecast
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Interactive timeline with transition boundary and uncertainty confidence intervals.
            </p>
          </div>

          {/* Range Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {rangeButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setSelectedRange(btn.value)}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition ${
                  selectedRange === btn.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Historical Cases</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Forecasted Cases</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-4 rounded bg-teal-200/50 dark:bg-teal-900/40" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">95% Prediction Range</span>
            </span>
            {chartData?.transition_date && (
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="h-3 w-0.5 bg-amber-500" />
                <span>Transition Date: {chartData.transition_date}</span>
              </span>
            )}
          </div>
          {peaks && (
            <span className="text-[11px] text-slate-500 hidden lg:inline">
              Historical Delta Peak: {peaks.highest_cases_date} ({peaks.highest_daily_cases.toLocaleString()} cases)
            </span>
          )}
        </div>

        {/* Time-Series Chart */}
        <div className="h-96 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData?.points || []} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="predInterval" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0d9488" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} tickMargin={5} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 11 }} stroke="#94a3b8" tickFormatter={(v) => v.toLocaleString()} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md dark:border-slate-700 dark:bg-slate-800 text-xs">
                        <p className="font-semibold text-slate-900 dark:text-white mb-1.5">{label}</p>
                        {data.historical_cases !== null && (
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            Historical Cases: {data.historical_cases.toLocaleString()}
                          </p>
                        )}
                        {data.forecasted_cases !== null && (
                          <p className="text-teal-600 dark:text-teal-400 font-semibold">
                            Forecasted Cases: {data.forecasted_cases.toLocaleString()}
                          </p>
                        )}
                        {data.lower_bound !== null && data.upper_bound !== null && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                            95% Range: {data.lower_bound.toLocaleString()} &ndash; {data.upper_bound.toLocaleString()}
                          </p>
                        )}
                        {data.is_forecast && (
                          <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                            Forward Projection
                          </span>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              {chartData?.transition_date && (
                <ReferenceLine x={chartData.transition_date} stroke="#f59e0b" strokeDasharray="3 3" label={{ value: 'Forecast Start', position: 'top', fill: '#f59e0b', fontSize: 10 }} />
              )}
              <Area type="monotone" dataKey="upper_bound" stroke="none" fill="url(#predInterval)" />
              <Line type="monotone" dataKey="historical_cases" stroke="#2563eb" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="forecasted_cases" stroke="#0d9488" strokeWidth={2.5} strokeDasharray="4 4" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Methodological Transparency Note */}
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 flex items-start gap-2">
          <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900 dark:text-white">Forecasting Principle: </span>
            Projections are calculated through chronological autoregression calibrated against multi-year historical dynamics. 
            Forecasts represent statistical trend expectations and should be used alongside clinical observations and local public health guidance.
          </div>
        </div>
      </section>

      {/* Dynamic Epidemiological Insights */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Automated Trend Intelligence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {insights.map((ins) => (
            <div key={ins.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {ins.category}
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                  {ins.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{ins.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{ins.statement}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
