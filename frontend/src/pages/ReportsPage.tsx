import React, { useState } from 'react';
import {
  FileText, Download, Printer, CheckCircle2,
  Clock, ShieldCheck, FileSpreadsheet, ArrowRight
} from 'lucide-react';
import { api } from '../services/api';

export const ReportsPage: React.FC = () => {
  const [reportType, setReportType] = useState('daily_analytical');
  const [format, setFormat] = useState('csv');
  const [district, setDistrict] = useState('All');
  const [generating, setGenerating] = useState(false);
  const [generatedReport, setGeneratedReport] = useState<any | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    try {
      const res = await api.generateReport({
        report_type: reportType,
        format,
        district
      });
      setGeneratedReport(res);
    } catch (e) {
      console.error('Report generation error:', e);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Reports & Analytical Export Center
          </h1>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
            PDF & CSV Engine
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Export standardized healthcare analytics, machine learning forecasts, and regional quality audits with full methodological attribution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Report Generation Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">
            Generate Analytical Document
          </h2>

          <form onSubmit={handleGenerate} className="space-y-4">
            {/* Report Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Report Objective
              </label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <option value="daily_analytical">Daily Acute Healthcare Analytical Report</option>
                <option value="weekly_infection">Weekly Epidemic Velocity & Scarcity Assessment</option>
                <option value="prediction_summary">AI Predictive Intelligence & Capacity Demand Forecast</option>
                <option value="regional_risk">West Bengal District Epidemiological Risk Matrix</option>
                <option value="data_quality">Attached Medical Registry Data Integrity & Quality Audit</option>
              </select>
            </div>

            {/* Format */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Export Format
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormat('html')}
                  className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-semibold transition ${
                    format === 'html'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  <Printer className="h-4 w-4" />
                  <span>PDF / Print</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('csv')}
                  className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-semibold transition ${
                    format === 'csv'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span>CSV Dataset</span>
                </button>
              </div>
            </div>

            {/* District Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                District Partition
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <option value="All">All Districts (Consolidated)</option>
                <option value="Kolkata">Kolkata</option>
                <option value="North 24 Parganas">North 24 Parganas</option>
                <option value="South 24 Parganas">South 24 Parganas</option>
                <option value="Howrah">Howrah</option>
                <option value="Hooghly">Hooghly</option>
                <option value="Darjeeling">Darjeeling</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={generating}
              className="w-full rounded-xl bg-blue-600 py-3 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition disabled:opacity-50"
            >
              {generating ? 'Compiling Report...' : 'Generate Official Report'}
            </button>
          </form>
        </div>

        {/* Generated Report Card / Preview */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
          {generatedReport ? (
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-4 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Report Generated Successfully ({generatedReport.report_id})</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {generatedReport.report_title}
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Generated at {generatedReport.generated_at} &bull; Format: {generatedReport.format.toUpperCase()}
                </div>
              </div>

              {/* Summary Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                  <span className="text-slate-400 block">Total Records</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white mt-1 block">
                    {generatedReport.summary_metrics.total_records}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                  <span className="text-slate-400 block">Hospital Beds</span>
                  <span className="text-base font-bold text-indigo-600 dark:text-indigo-400 mt-1 block">
                    {generatedReport.summary_metrics.hospital_beds}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                  <span className="text-slate-400 block">Resource Scarcity</span>
                  <span className="text-base font-bold text-rose-600 dark:text-rose-400 mt-1 block">
                    {generatedReport.summary_metrics.resource_scarcity_rate}
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60 text-xs space-y-2">
                <div>
                  <strong className="text-slate-900 dark:text-white">Data Methodology:</strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    {generatedReport.summary_metrics.data_methodology}
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white">Forecasting Limitations:</strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                    {generatedReport.summary_metrics.prediction_limitations}
                  </p>
                </div>
              </div>

              {/* Download / Print CTA */}
              <div className="pt-2">
                <a
                  href={generatedReport.download_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition"
                >
                  <Download className="h-4 w-4" />
                  <span>Download / Open {generatedReport.format.toUpperCase()} Document</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-xs text-slate-400">
              <FileText className="h-10 w-10 mx-auto text-slate-300 dark:text-slate-700 mb-2" />
              <span>Select your parameters on the left to generate and download an analytical briefing.</span>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 dark:border-slate-800">
            Exported documents include digital integrity checksums and public health governance metadata.
          </div>
        </div>

      </div>

    </div>
  );
};
