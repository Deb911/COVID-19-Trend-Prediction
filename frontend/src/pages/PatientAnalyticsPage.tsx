import React, { useEffect, useState } from 'react';
import {
  Users, Search, Filter, ShieldCheck, ShieldAlert,
  ChevronLeft, ChevronRight, Lock, Eye, Download, Info
} from 'lucide-react';
import { api } from '../services/api';
import { PatientRecord } from '../types';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const PatientAnalyticsPage: React.FC = () => {
  const { user } = useAuth();
  const [records, setRecords] = useState<PatientRecord[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [piiProtected, setPiiProtected] = useState(true);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedFacility, setSelectedFacility] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const data = await api.getPatientRecords({
        page,
        limit: 15,
        search: search.trim() || undefined,
        district: selectedDistrict,
        facility_type: selectedFacility,
        availability: selectedAvailability
      });
      setRecords(data.records);
      setTotal(data.total);
      setTotalPages(data.total_pages);
      setPiiProtected(data.pii_protected);
    } catch (e) {
      console.error('Failed to load patient records:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [page, selectedDistrict, selectedFacility, selectedAvailability]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchRecords();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400';
      case 'Unavailable':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-400';
      case 'Will be available soon':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-400';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400';
    }
  };

  return (
    <div className="space-y-6 py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Patient Triage & Healthcare Admission Registry
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>{piiProtected ? 'DPDP De-Identified Mode' : 'Privileged Access (Unmasked)'}</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            2,361 authenticated medical triage leads, bed reservations, and emergency oxygen requests from the attached medical dataset.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/api/datasets/download/csv"
            target="_blank"
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 shadow-xs transition"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Clean CSV</span>
          </Link>
        </div>
      </div>

      {/* Dataset Adaptation Notice Card */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-900/60 text-xs text-slate-600 dark:text-slate-300">
        <div className="flex items-start gap-2.5">
          <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-900 dark:text-white">Dataset Discovery & Adaptation:</strong>
            {" "}The attached medical dataset is a live emergency triage and resource registry from the West Bengal pandemic surge. 
            Individual clinical variables (such as patient age or symptom history) were not part of this emergency intake file. 
            The platform adapts by providing verified hospital bed demand, ICU/ventilator capacity, pediatric ward readiness, and contact tracking with strict privacy protection.
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          
          {/* Search Box */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search facility, location, remarks..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* District Filter */}
          <div>
            <select
              value={selectedDistrict}
              onChange={(e) => { setSelectedDistrict(e.target.value); setPage(1); }}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <option value="All">All Districts</option>
              <option value="Kolkata">Kolkata</option>
              <option value="North 24 Parganas">North 24 Parganas</option>
              <option value="South 24 Parganas">South 24 Parganas</option>
              <option value="Howrah">Howrah</option>
              <option value="Hooghly">Hooghly</option>
              <option value="Darjeeling">Darjeeling</option>
              <option value="Paschim Bardhaman">Paschim Bardhaman</option>
              <option value="Purba Bardhaman">Purba Bardhaman</option>
              <option value="Birbhum">Birbhum</option>
              <option value="Bankura">Bankura</option>
              <option value="Purulia">Purulia</option>
              <option value="Malda">Malda</option>
              <option value="Murshidabad">Murshidabad</option>
            </select>
          </div>

          {/* Facility Type Filter */}
          <div>
            <select
              value={selectedFacility}
              onChange={(e) => { setSelectedFacility(e.target.value); setPage(1); }}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <option value="All">All Facility Types</option>
              <option value="Hospital Bed">Hospital Beds</option>
              <option value="Oxygen Supply">Oxygen Supply</option>
              <option value="Essential Medicines">Medicines & Antivirals</option>
              <option value="Emergency Ambulance">Ambulances</option>
              <option value="COVID Testing">COVID Testing Labs</option>
              <option value="Plasma & Blood">Plasma & Blood</option>
              <option value="Quarantine & Safe Home">Quarantine Homes</option>
            </select>
          </div>

          {/* Availability Filter */}
          <div>
            <select
              value={selectedAvailability}
              onChange={(e) => { setSelectedAvailability(e.target.value); setPage(1); }}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <option value="All">All Availability</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable / Full</option>
              <option value="Will be available soon">Restocking Soon</option>
            </select>
          </div>

        </form>
      </div>

      {/* Records Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Facility / Organization</th>
                <th className="py-3 px-4 font-semibold">District & Location</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Contact Triage</th>
                <th className="py-3 px-4 font-semibold">Availability Status</th>
                <th className="py-3 px-4 font-semibold">Verification Time</th>
                <th className="py-3 px-4 font-semibold">Pediatric / Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                      <span>Loading verified medical records...</span>
                    </div>
                  </td>
                </tr>
              ) : records.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500">
                    No matching healthcare records found for the applied filter criteria.
                  </td>
                </tr>
              ) : (
                records.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-mono text-[11px] text-slate-400">#{r.id}</td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900 dark:text-white">{r.organization_name}</div>
                      <div className="text-[10px] text-slate-400">{r.source_sheet}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-slate-800 dark:text-slate-200">{r.district}</div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[140px]">{r.location || 'Central'}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {r.facility_type}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                      {r.contact_number}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(r.availability_status)}`}>
                        {r.availability_status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px] whitespace-nowrap">
                      {r.timestamp}
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-[11px] max-w-[200px] truncate">
                      {r.pediatric_facility ? (
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Pediatric: {r.pediatric_facility}</span>
                      ) : (
                        r.comments || '—'
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200 bg-slate-50/50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900 text-xs text-slate-500">
          <div>
            Showing <strong>{records.length}</strong> of <strong>{total.toLocaleString()}</strong> records &bull; Page <strong>{page}</strong> of <strong>{totalPages}</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 disabled:opacity-40"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
