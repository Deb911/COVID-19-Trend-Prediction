import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity, TrendingUp, AlertCircle, ArrowRight,
  ShieldCheck, Calendar, Info, Clock, CheckCircle2,
  FileText, Database, Sparkles, ChevronRight, BarChart3
} from 'lucide-react';
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { api } from '../services/api';
import {
  LatestSituation, PandemicPeaks, YearlyComparison,
  UnifiedChartResponse, DynamicInsight
} from '../types';

export const LandingPage: React.FC = () => {
  const [latest, setLatest] = useState<LatestSituation | null>(null);
  const [peaks, setPeaks] = useState<PandemicPeaks | null>(null);
  const [yearly, setYearly] = useState<YearlyComparison[]>([]);
  const [chartData, setChartData] = useState<UnifiedChartResponse | null>(null);
  const [insights, setInsights] = useState<DynamicInsight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLandingData() {
      try {
        const [latRes, pkRes, yrRes, chRes, inRes] = await Promise.allSettled([
          api.getLatestSituation(),
          api.getPeaks(),
          api.getYearlyComparison(),
          api.getUnifiedChart('90d'),
          api.getDynamicInsights(),
        ]);

        if (latRes.status === 'fulfilled') setLatest(latRes.value);
        if (pkRes.status === 'fulfilled') setPeaks(pkRes.value);
        if (yrRes.status === 'fulfilled') setYearly(yrRes.value);
        if (chRes.status === 'fulfilled') setChartData(chRes.value);
        if (inRes.status === 'fulfilled') setInsights(inRes.value);
      } catch (err) {
        console.error('Error fetching landing data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadLandingData();
  }, []);

  return (
    <div className="space-y-12 py-6">

      {/* Official Health Portal Top Notice */}
      <div className="rounded-lg border border-blue-200 bg-blue-50/80 px-4 py-2.5 text-xs text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">Official Surveillance Registry</span>
          <span className="text-blue-400 dark:text-blue-600">|</span>
          <span>Integrated Public Health & Epidemiological Analytics</span>
        </div>
        <div className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
          <Clock className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>{latest?.archive_notice || 'Surveillance Archive: Validated Multi-Year Registry'}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Activity className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            Epidemic Intelligence & Empirical Forecasting
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            COVID-19 Trends: <br />
            <span className="text-blue-600 dark:text-blue-400">Understanding the Past, </span>
            Monitoring Today, <br />
            Predicting Tomorrow.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Explore historical COVID-19 patterns, understand current infection trends, and discover data-driven forecasts through an intelligent healthcare analytics platform.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/historical"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              <span>Explore COVID-19 Trends</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/prediction"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition"
            >
              <TrendingUp className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              <span>View Predictions</span>
            </Link>
            <Link
              to="/methodology"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition"
            >
              <span>Data & Methodology</span>
              <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section C: Current COVID-19 Overview (Prominent) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 pb-3 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Current COVID-19 Situation Overview
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Verified surveillance observations from the national health registry.
            </p>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {latest?.archive_notice ? (
              <span className="inline-flex items-center gap-1.5 font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-md">
                <Info className="h-3.5 w-3.5" />
                {latest.archive_notice}
              </span>
            ) : (
              <span>Last updated: Active Registry</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Latest Daily Cases
            </span>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {latest ? latest.latest_cases.toLocaleString() : '—'}
            </div>
            <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              {latest?.latest_date || 'Observation Date'}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              7-Day Case Average
            </span>
            <div className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {latest ? latest.cases_7d_avg.toLocaleString() : '—'}
            </div>
            <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Smooth incidence rate
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Current Trend
            </span>
            <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white truncate">
              {latest ? latest.trend_direction : 'Stable Baseline'}
            </div>
            <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              {latest ? `${latest.percentage_change_7d > 0 ? '+' : ''}${latest.percentage_change_7d}% vs prev week` : '—'}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Latest Daily Deaths
            </span>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {latest ? latest.latest_deaths.toLocaleString() : '—'}
            </div>
            <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Reported mortality
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total Confirmed Cases
            </span>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {latest ? latest.total_confirmed_cases.toLocaleString() : '45M+'}
            </div>
            <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Cumulative infections
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total Reported Deaths
            </span>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {latest ? latest.total_reported_deaths.toLocaleString() : '533K+'}
            </div>
            <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Cumulative mortality
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>Data Source: {latest?.data_source || 'Consolidated Official Epidemiological Registry (WHO / MoHFW)'}</span>
          <span>Verified without synthetic numbers</span>
        </div>
      </section>

      {/* Section D: Historical COVID-19 Peaks */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 dark:border-slate-800">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Historical COVID-19 Peaks & Major Waves
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Peak transmission points calculated from real historical daily surveillance records.
          </p>
        </div>

        {/* Global Peak Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-red-200 bg-red-50/50 p-5 dark:border-red-950 dark:bg-red-950/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
                All-Time Highest Daily Cases Peak
              </span>
              <span className="rounded-md bg-red-100 dark:bg-red-900/60 px-2 py-0.5 text-[11px] font-semibold text-red-800 dark:text-red-200">
                Delta Variant Surge
              </span>
            </div>
            <div className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
              {peaks ? peaks.highest_daily_cases.toLocaleString() : '414,188'} <span className="text-base font-semibold text-slate-500">cases</span>
            </div>
            <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              Recorded on <span className="font-semibold text-slate-900 dark:text-white">{peaks?.highest_cases_date || 'May 07, 2021'}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              The highest single-day infection load recorded in the historical database, marking the peak of the Second Wave in India.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Highest Reported Daily Deaths
              </span>
              <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                Peak Mortality
              </span>
            </div>
            <div className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
              {peaks ? peaks.highest_daily_deaths.toLocaleString() : '4,529'} <span className="text-base font-semibold text-slate-500">deaths</span>
            </div>
            <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              Recorded on <span className="font-semibold text-slate-900 dark:text-white">{peaks?.highest_deaths_date || 'May 18, 2021'}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Followed the case crest with an approximately 11-day clinical lag, placing unprecedented stress on critical hospital infrastructure.
            </p>
          </div>
        </div>

        {/* 4 Waves Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {peaks?.waves?.map((wave, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 space-y-2">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                {wave.wave_name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {wave.period}
              </div>
              <div className="pt-1">
                <div className="text-xl font-bold text-slate-900 dark:text-white">
                  {wave.peak_daily_cases.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Peak date: {wave.peak_date}
                </div>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-2">
                {wave.characteristics}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section E: Historical vs Current Multi-Year Comparison */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 dark:border-slate-800">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Historical vs Current Pandemic Evolution (2020 – 2026)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Year-by-year comparison demonstrating the trajectory from initial emergency to routine endemic baseline.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-4 font-semibold">Year</th>
                <th className="py-3 px-4 font-semibold">Total Cases</th>
                <th className="py-3 px-4 font-semibold">Total Deaths</th>
                <th className="py-3 px-4 font-semibold">Daily Avg Cases</th>
                <th className="py-3 px-4 font-semibold">Peak Daily Cases</th>
                <th className="py-3 px-4 font-semibold">Peak Date</th>
                <th className="py-3 px-4 font-semibold">YoY Trend</th>
                <th className="py-3 px-4 font-semibold">Status / Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {yearly.map((row) => (
                <tr key={row.year} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    {row.year}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">
                    {row.total_cases > 0 ? row.total_cases.toLocaleString() : 'Baseline'}
                  </td>
                  <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">
                    {row.total_deaths > 0 ? row.total_deaths.toLocaleString() : 'Baseline'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                    {row.average_daily_cases > 0 ? row.average_daily_cases.toLocaleString() : '—'}
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                    {row.peak_daily_cases > 0 ? row.peak_daily_cases.toLocaleString() : '—'}
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                    {row.peak_date}
                  </td>
                  <td className="py-3 px-4 font-medium">
                    {row.yoy_change_pct !== null ? (
                      <span className={row.yoy_change_pct > 0 ? 'text-red-600 dark:text-red-400' : 'text-emerald-600 dark:text-emerald-400'}>
                        {row.yoy_change_pct > 0 ? '+' : ''}{row.yoy_change_pct}%
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-slate-500 dark:text-slate-400 max-w-xs truncate" title={row.notes}>
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section F: Prediction Preview Chart */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI Forecast Preview
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Historical surveillance trend transitioning into 14 to 30-day forecast projection.
            </p>
          </div>
          <Link
            to="/prediction"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Open Complete Prediction Center</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4">
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
                <span className="text-slate-700 dark:text-slate-300 font-medium">95% Confidence Range</span>
              </span>
            </div>
            <div className="text-slate-500 dark:text-slate-400">
              Forecast Horizon: Next 30 Days &bull; Autoregressive Time-Series Engine
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData?.points || []} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0.02} />
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
                        <div className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-md dark:border-slate-700 dark:bg-slate-800 text-xs">
                          <p className="font-semibold text-slate-900 dark:text-white">{label}</p>
                          {data.historical_cases !== null && (
                            <p className="text-blue-600 dark:text-blue-400">
                              Historical: {data.historical_cases.toLocaleString()} cases
                            </p>
                          )}
                          {data.forecasted_cases !== null && (
                            <p className="text-teal-600 dark:text-teal-400 font-medium">
                              Forecast: {data.forecasted_cases.toLocaleString()} cases
                            </p>
                          )}
                          {data.lower_bound !== null && data.upper_bound !== null && (
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">
                              Confidence: {data.lower_bound} – {data.upper_bound}
                            </p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area type="monotone" dataKey="upper_bound" stroke="none" fill="url(#forecastFill)" />
                <Line type="monotone" dataKey="historical_cases" stroke="#2563eb" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="forecasted_cases" stroke="#0d9488" strokeWidth={2.5} strokeDasharray="4 4" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Section: Automated Dynamic AI Insights */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 dark:border-slate-800">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Automated Epidemiological Insights
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Dynamically computed observations and patterns derived from verified historical records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {insights.map((ins) => (
            <div key={ins.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {ins.category}
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                    {ins.badge}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {ins.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ins.statement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Core Modules Overview Grid */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 dark:border-slate-800">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Platform Capabilities & Modules
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Five core components dedicated exclusively to COVID-19 trend analysis and forecasting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/historical" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 transition">
            <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition" />
            <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">Historical Analysis</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Explore multi-year pandemic waves, annual case totals, and peak transmission dates across 2020 through 2026.
            </p>
          </Link>

          <Link to="/prediction" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-teal-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 transition">
            <TrendingUp className="h-6 w-6 text-teal-600 dark:text-teal-400 group-hover:scale-105 transition" />
            <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">AI Prediction Center</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Interactive forecasting with 7, 14, and 30-day projection horizons, uncertainty bounds, and date filters.
            </p>
          </Link>

          <Link to="/methodology" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-indigo-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 transition">
            <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition" />
            <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">Data & Methodology</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Review model evaluation metrics (MAE, RMSE, R²), dataset integration logs, and clinical audit trail.
            </p>
          </Link>
        </div>
      </section>

    </div>
  );
};
