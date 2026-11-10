import React, { useEffect, useState, useRef } from 'react';
import {
  UploadCloud, FileSpreadsheet, CheckCircle2, AlertTriangle,
  History, Download, RefreshCw, Database, ShieldCheck, FileText, ArrowRight
} from 'lucide-react';
import { api } from '../services/api';
import { DatasetImportItem } from '../types';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const DataManagementPage: React.FC = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState<DatasetImportItem[]>([]);
  const [selectedImport, setSelectedImport] = useState<DatasetImportItem | null>(null);
  const [qualityReport, setQualityReport] = useState<any | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadHistory = async () => {
    try {
      const data = await api.getDatasetHistory();
      setHistory(data);
      if (data.length > 0 && !selectedImport) {
        setSelectedImport(data[0]);
        loadQuality(data[0].id);
      }
    } catch (e) {
      console.error('Failed to load dataset history:', e);
    }
  };

  const loadQuality = async (id: number) => {
    try {
      const q = await api.getQualityReport(id);
      setQualityReport(q);
    } catch (e) {
      console.error('Failed to load quality report:', e);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const res = await api.uploadDataset(file);
      setUploadSuccess(`Successfully processed ${res.filename}: ${res.valid_records} valid records imported, ${res.duplicate_records} duplicates flagged.`);
      await loadHistory();
      setSelectedImport(res);
      await loadQuality(res.id);
    } catch (err: any) {
      setUploadError(err.message || 'File upload failed.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Data Management & Upload Center
            </h1>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              CSV & Excel Pipeline
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Automated schema discovery, deduplication engine, validation auditing, and background model retraining.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/api/datasets/download/csv"
            target="_blank"
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 shadow-xs transition"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Clean CSV</span>
          </Link>
          <Link
            to="/api/datasets/download/json"
            target="_blank"
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 shadow-xs transition"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download JSON</span>
          </Link>
        </div>
      </div>

      {/* Upload Box (Enabled for Admin / Researcher) */}
      <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900 shadow-xs">
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          className="hidden"
          id="dataset-upload-input"
          disabled={uploading}
        />

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-400 mb-4">
          <UploadCloud className={`h-8 w-8 ${uploading ? 'animate-bounce' : ''}`} />
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Upload New COVID-19 Clinical or Facility Dataset
        </h3>
        <p className="mx-auto max-w-md text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
          Supports CSV and Excel spreadsheets (.xlsx, .xls, .csv). Automated column mapping, missing value imputation, and signature-based deduplication will execute immediately upon upload.
        </p>

        {uploadError && (
          <div className="mx-auto max-w-md mb-4 rounded-lg bg-rose-50 p-3 text-xs font-medium text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
            {uploadError}
          </div>
        )}

        {uploadSuccess && (
          <div className="mx-auto max-w-md mb-4 rounded-lg bg-emerald-50 p-3 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
            {uploadSuccess}
          </div>
        )}

        {user ? (
          <label
            htmlFor="dataset-upload-input"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition"
          >
            {uploading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Processing Spreadsheet...</span>
              </>
            ) : (
              <>
                <FileSpreadsheet className="h-4 w-4" />
                <span>Select Spreadsheet File</span>
              </>
            )}
          </label>
        ) : (
          <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">
            Authorized administrator or researcher sign-in required to ingest additional datasets.
          </div>
        )}
      </div>

      {/* Import History & Data Quality Report Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Import History Table */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 mb-4">
            <History className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Dataset Ingestion History
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <th className="pb-2 font-semibold">Filename</th>
                  <th className="pb-2 font-semibold">Size</th>
                  <th className="pb-2 font-semibold">Total Rows</th>
                  <th className="pb-2 font-semibold">Valid</th>
                  <th className="pb-2 font-semibold">Duplicates</th>
                  <th className="pb-2 font-semibold">Quality Score</th>
                  <th className="pb-2 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
                      <span>{item.filename}</span>
                    </td>
                    <td className="py-3 text-slate-500 font-mono">{(item.file_size / 1024).toFixed(1)} KB</td>
                    <td className="py-3 font-bold text-slate-900 dark:text-white">{item.total_records}</td>
                    <td className="py-3 text-emerald-600 font-semibold">{item.valid_records}</td>
                    <td className="py-3 text-amber-600">{item.duplicate_records}</td>
                    <td className="py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {item.quality_score}%
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => { setSelectedImport(item); loadQuality(item.id); }}
                        className="text-xs font-semibold text-blue-600 hover:underline"
                      >
                        Inspect Audit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality Audit Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Data Quality Audit Report</span>
            </div>

            {selectedImport ? (
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {selectedImport.filename}
                  </h4>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Uploaded by {selectedImport.uploaded_by} &bull; {new Date(selectedImport.created_at).toLocaleString()}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white mb-2">
                    <span>Overall Completeness Score</span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm">{selectedImport.quality_score}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${selectedImport.quality_score}%` }}
                    />
                  </div>
                </div>

                {qualityReport && (
                  <div className="space-y-3 text-xs">
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200 block mb-1">
                        Deduplication Strategy:
                      </strong>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                        {qualityReport.duplicate_stats?.deduplication_strategy || 'Normalized hash matching across district, facility and phone number.'}
                      </p>
                    </div>

                    <div>
                      <strong className="text-slate-800 dark:text-slate-200 block mb-1">
                        Sanitization Actions Taken:
                      </strong>
                      <ul className="list-disc pl-4 space-y-1 text-slate-500 dark:text-slate-400 text-[11px]">
                        {qualityReport.issues?.map((issue: string, idx: number) => (
                          <li key={idx}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="py-12 text-center text-xs text-slate-400">
                Select an import record to inspect audit report.
              </p>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 dark:border-slate-800">
            Source data is strictly preserved. Ingestions update time series tables without overwriting origin files.
          </div>
        </div>

      </div>

    </div>
  );
};
