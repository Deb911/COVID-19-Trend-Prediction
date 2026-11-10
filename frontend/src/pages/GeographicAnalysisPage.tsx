import React, { useEffect, useState } from 'react';
import {
  MapPin, Hospital, Wind, Stethoscope, Truck,
  ShieldCheck, AlertTriangle, Filter, Search, BarChart3
} from 'lucide-react';
import { api } from '../services/api';
import { DistrictStat } from '../types';

export const GeographicAnalysisPage: React.FC = () => {
  const [districts, setDistricts] = useState<DistrictStat[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictStat | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getDistricts().then(data => {
      setDistricts(data);
      if (data.length > 0) setSelectedDistrict(data[0]);
    }).finally(() => setLoading(false));
  }, []);

  const filteredDistricts = districts.filter(d =>
    d.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Interactive Geographic Healthcare Distribution
            </h1>
            <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700 dark:bg-teal-950/70 dark:text-teal-300 border border-teal-200 dark:border-teal-900">
              Spatial Hotspots
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Empirical district-wise allocation of hospital beds, oxygen stations, diagnostic centers, and verified triage response across West Bengal.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search district or region..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-4 py-2 text-xs text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      {/* Main Grid: Spatial Hotspot Map Matrix & Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* District Hotspot Interactive Grid */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                West Bengal Administrative District Heat Matrix
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click any regional sector to inspect local facility saturation and emergency readiness.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-rose-500" /> High</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" /> Mod</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Low</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[480px] overflow-y-auto pr-1">
            {filteredDistricts.map((d) => {
              const isSelected = selectedDistrict?.district === d.district;
              return (
                <button
                  key={d.district}
                  onClick={() => setSelectedDistrict(d)}
                  className={`text-left p-3.5 rounded-xl border transition flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/50 shadow-xs dark:bg-blue-950/40 dark:border-blue-700'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-2">
                    <span className="font-bold text-xs text-slate-900 dark:text-white truncate">
                      {d.district}
                    </span>
                    <span className={`h-2 w-2 rounded-full shrink-0 ${
                      d.distress_level === 'High' ? 'bg-rose-500' : d.distress_level === 'Moderate' ? 'bg-amber-500' : 'bg-emerald-500'
                    }`} />
                  </div>
                  
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{d.total_facilities}</span> total units
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                    <span>{d.bed_facilities} Beds</span>
                    <span>&bull;</span>
                    <span>{d.oxygen_suppliers} Oxy</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Regional Deep Dive Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
          {selectedDistrict ? (
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-4 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  <MapPin className="h-4 w-4" />
                  <span>Regional Dossier</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {selectedDistrict.district}
                </h3>
                <div className="mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold border border-slate-200 dark:border-slate-700">
                  Status: {selectedDistrict.distress_level} Strain Activity
                </div>
              </div>

              {/* Resource Count Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs">
                  <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                    <Hospital className="h-4 w-4 text-indigo-500" />
                    <span>Hospital Bed Centers</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedDistrict.bed_facilities}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs">
                  <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                    <Wind className="h-4 w-4 text-teal-500" />
                    <span>Oxygen Refilling Points</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedDistrict.oxygen_suppliers}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs">
                  <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                    <Truck className="h-4 w-4 text-blue-500" />
                    <span>Emergency Ambulances</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedDistrict.ambulance_providers}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs">
                  <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                    <Stethoscope className="h-4 w-4 text-purple-500" />
                    <span>Diagnostic Testing Centers</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedDistrict.testing_centers}</span>
                </div>
              </div>

              {/* Verified ratio */}
              <div className="rounded-lg bg-emerald-50/60 p-3.5 border border-emerald-100 dark:bg-emerald-950/40 dark:border-emerald-900/50 text-xs">
                <div className="flex items-center justify-between font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                  <span>Audited Verification Ratio</span>
                  <span>
                    {selectedDistrict.total_facilities > 0
                      ? Math.round((selectedDistrict.verified_count / selectedDistrict.total_facilities) * 100)
                      : 0}%
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                  {selectedDistrict.verified_count} of {selectedDistrict.total_facilities} facilities audited by volunteer verification teams.
                </p>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-xs text-slate-400">
              Select a district from the grid to view breakdown.
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
            Geographic coordinates and district clusters correspond to actual administrative boundaries of West Bengal.
          </div>
        </div>

      </div>

    </div>
  );
};
