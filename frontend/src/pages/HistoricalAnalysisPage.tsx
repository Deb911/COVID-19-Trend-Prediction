import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity, TrendingUp, Calendar, AlertTriangle,
  Info, ArrowUpRight, ArrowDownRight, BarChart3, Filter
} from 'lucide-react';
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { api } from '../services/api';
import {
  PandemicPeaks, YearlyComparison, UnifiedChartResponse
} from '../types';

export const HistoricalAnalysisPage: React.FC = () => {
  const [peaks, setPeaks] = useState<PandemicPeaks | null>(null);
  const [yearly, setYearly] = useState<YearlyComparison[]>([]);
  const [chartData, setChartData] = useState<UnifiedChartResponse | null>(null);
  const [selectedRange, setSelectedRange] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [pkRes, yrRes, chRes] = await Promise.allSettled([
          api.getPeaks(),
          api.getYearlyComparison(),
          api.getUnifiedChart(selectedRange),
        ]);
        if (pkRes.status === 'fulfilled') setPeaks(pkRes.value);
        if (yrRes.status === 'fulfilled') setYearly(yrRes.value);
        if (chRes.status === 'fulfilled') setChartData(chRes.value);
      } catch (err) {
        console.error('Failed to load historical analysis data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [selectedRange]);

  const rangeButtons = [
    { label: 'All Pandemic Years', value: 'all' },
    { label: '2020 (Wave 1)', value: '2020' },
    { label: '2021 (Delta Surge)', value: '2021' },
    { label: '2022 (Omicron Wave)', value: '2022' },
    { label: '2023 (Endemic XBB)', value: '2023' },
    { label: '2024 (Routine Baseline)', value: '2024' },
  ];

  return (
    <div className="space-y-8 py-6">

      {/* Header */}
      <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Activity className="h-4 w-4" />
          <span>Epidemiological Retrospective</span>
        </div>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Historical COVID-19 Trend Analysis & Multi-Year Comparison
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Detailed multi-year infection curves, peak wave detections, and annual comparative metrics derived from 
          verified national epidemiological surveillance data (2020 through 2026).
        </p>
      </div>

      {/* Peak Waves Summary */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Identified Pandemic Infection Waves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {peaks?.waves?.map((w, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {w.wave_name}
                </span>
                <div className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                  {w.peak_daily_cases.toLocaleString()}
                  <span className="text-xs font-normal text-slate-500"> cases/day</span>
                </div>
                <div className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                  Peak: {w.peak_date}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Period: {w.period}
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2 leading-relaxed">
                {w.characteristics}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Historical Time-Series Graph */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Epidemiological Infection Curve
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Daily reported cases with 7-day smoothed epidemiological moving average.
            </p>
          </div>
          {/* Range Buttons */}
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

        <div className="flex items-center gap-4 text-xs pt-1">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Historical Cases</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">7-Day Smoothed Trend</span>
          </span>
          {peaks && (
            <span className="text-slate-500 text-[11px] ml-auto hidden md:inline">
              All-Time Peak: {peaks.highest_cases_date} ({peaks.highest_daily_cases.toLocaleString()} cases)
            </span>
          )}
        </div>

        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData?.points || []} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="histFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.01} />
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
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">{label}</p>
                        {data.historical_cases !== null && (
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            Daily Cases: {data.historical_cases.toLocaleString()}
                          </p>
                        )}
                        {data.expected_trend !== null && (
                          <p className="text-amber-600 dark:text-amber-400 font-medium">
                            7-Day Average: {data.expected_trend.toLocaleString()}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area type="monotone" dataKey="historical_cases" stroke="#2563eb" strokeWidth={1.5} fill="url(#histFill)" dot={false} />
              <Line type="monotone" dataKey="expected_trend" stroke="#f59e0b" strokeWidth={2} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Year-by-Year Comparison Table */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Annual Comparative Performance (2020 – 2026)
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Year</th>
                <th className="py-3.5 px-4 font-semibold">Annual Confirmed Cases</th>
                <th className="py-3.5 px-4 font-semibold">Annual Confirmed Deaths</th>
                <th className="py-3.5 px-4 font-semibold">Daily Mean Cases</th>
                <th className="py-3.5 px-4 font-semibold">Peak Case Crest</th>
                <th className="py-3.5 px-4 font-semibold">Peak Date</th>
                <th className="py-3.5 px-4 font-semibold">YoY Variation</th>
                <th className="py-3.5 px-4 font-semibold">Surveillance Phase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {yearly.map((row) => (
                <tr key={row.year} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{row.year}</td>
                  <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">
                    {row.total_cases > 0 ? row.total_cases.toLocaleString() : 'Routine Baseline'}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">
                    {row.total_deaths > 0 ? row.total_deaths.toLocaleString() : 'Routine Baseline'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                    {row.average_daily_cases > 0 ? row.average_daily_cases.toLocaleString() : '—'}
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                    {row.peak_daily_cases > 0 ? row.peak_daily_cases.toLocaleString() : '—'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{row.peak_date}</td>
                  <td className="py-3 px-4 font-semibold">
                    {row.yoy_change_pct !== null ? (
                      <span className={row.yoy_change_pct > 0 ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}>
                        {row.yoy_change_pct > 0 ? '+' : ''}{row.yoy_change_pct}%
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400 max-w-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Ready for forward projections?</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">View predictive forecasts using the AI time-series engine.</p>
        </div>
        <Link
          to="/prediction"
          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition"
        >
          <span>Open AI Prediction Center</span>
          <TrendingUp className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
};
