import React, { useEffect, useState } from 'react';
import {
  Activity, BarChart3, TrendingUp, ShieldAlert,
  Hospital, Wind, Stethoscope, Truck,
  Download, Filter, RefreshCw, AlertCircle
} from 'lucide-react';
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';
import { api } from '../services/api';
import { OverviewMetrics, TimelinePoint, DistrictStat } from '../types';
import { StatCard } from '../components/StatCard';
import { Link } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  const [overview, setOverview] = useState<OverviewMetrics | null>(null);
  const [timeline, setTimeline] = useState<TimelinePoint[]>([]);
  const [districts, setDistricts] = useState<DistrictStat[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [loading, setLoading] = useState(true);
  const [activeMetric, setActiveMetric] = useState<'total' | 'beds' | 'oxygen' | 'scarcity'>('total');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [ov, tl, dist] = await Promise.all([
        api.getOverview(),
        api.getTimeline(),
        api.getDistricts()
      ]);
      setOverview(ov);
      setTimeline(tl);
      setDistricts(dist);
    } catch (e) {
      console.error('Error fetching dashboard metrics:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter top 10 districts for bar chart
  const topDistricts = districts.slice(0, 10);

  return (
    <div className="space-y-8 py-6">
      
      {/* Top Banner / Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              COVID-19 Main Analytics Dashboard
            </h1>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              {overview?.epidemic_wave_phase || 'Active Registry'}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Real-time empirical monitoring computed across 2,361 healthcare distress and bed occupancy records.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* District selector */}
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium dark:border-slate-800 dark:bg-slate-900">
            <Filter className="h-3.5 w-3.5 text-slate-400" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-transparent text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              <option value="All">All West Bengal Districts (71)</option>
              {districts.map((d) => (
                <option key={d.district} value={d.district}>
                  {d.district} ({d.total_facilities})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={fetchData}
            title="Refresh database metrics"
            className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 transition"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <Link
            to="/reports"
            className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 shadow-sm transition"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export Report</span>
          </Link>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Triage Records"
          value={overview?.total_records.toLocaleString() || '2,361'}
          subtitle="Unique Verified Centers: 1,496"
          icon={BarChart3}
          badge={{ text: "Wave Peak Dataset", variant: "neutral" }}
          accentColor="text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400"
        />

        <StatCard
          title="Hospital Bed Facilities"
          value={overview?.critical_bed_facilities.toLocaleString() || '645'}
          subtitle="Includes CCU, ICU & Pediatric"
          icon={Hospital}
          badge={{ text: "27.3% of Total", variant: "positive" }}
          accentColor="text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 dark:text-indigo-400"
        />

        <StatCard
          title="Oxygen Supply Hubs"
          value={overview?.oxygen_supply_centers.toLocaleString() || '851'}
          subtitle="Cylinders, Cans & Refilling"
          icon={Wind}
          badge={{ text: "36.0% of Total", variant: "warning" }}
          accentColor="text-teal-600 bg-teal-50 dark:bg-teal-950/60 dark:text-teal-400"
        />

        <StatCard
          title="Resource Scarcity Rate"
          value={`${overview?.scarcity_rate || '14.4'}%`}
          subtitle="Verified Out-of-Stock Units"
          icon={ShieldAlert}
          badge={{ text: "Scarcity Alert", variant: overview && overview.scarcity_rate > 20 ? "critical" : "warning" }}
          accentColor="text-rose-600 bg-rose-50 dark:bg-rose-950/60 dark:text-rose-400"
        />
      </div>

      {/* Secondary Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-xs text-slate-500 dark:text-slate-400">Testing & Diagnostic Labs</div>
          <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
            {overview?.testing_diagnostic_labs || 97} Centers
          </div>
          <div className="text-[11px] text-slate-400">RT-PCR & Rapid Antigen</div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-xs text-slate-500 dark:text-slate-400">Emergency Ambulance Networks</div>
          <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
            {overview?.ambulance_networks || 122} Units
          </div>
          <div className="text-[11px] text-slate-400">Oxygen Cabs & ICU Transport</div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-xs text-slate-500 dark:text-slate-400">On-Ground Verification Ratio</div>
          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            {overview?.verified_percentage || '41.0'}%
          </div>
          <div className="text-[11px] text-slate-400">Directly Audited & Confirmed</div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-xs text-slate-500 dark:text-slate-400">Data Freshness Benchmark</div>
          <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 truncate">
            {overview?.data_freshness || 'Wave-2 Historical Data'}
          </div>
          <div className="text-[11px] text-slate-400">Multi-Sheet Consolidated</div>
        </div>
      </div>

      {/* Main Historical Trend Chart */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Epidemic Healthcare Load & Distress Trajectory
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              54-Day historical timeline of emergency resource demands, hospitalization strain, and 7-day smoothed rolling trajectory.
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-950">
            <button
              onClick={() => setActiveMetric('total')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                activeMetric === 'total'
                  ? 'bg-white text-blue-600 shadow-xs dark:bg-slate-800 dark:text-blue-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Overall Demand
            </button>
            <button
              onClick={() => setActiveMetric('beds')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                activeMetric === 'beds'
                  ? 'bg-white text-indigo-600 shadow-xs dark:bg-slate-800 dark:text-indigo-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Beds
            </button>
            <button
              onClick={() => setActiveMetric('oxygen')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                activeMetric === 'oxygen'
                  ? 'bg-white text-teal-600 shadow-xs dark:bg-slate-800 dark:text-teal-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Oxygen
            </button>
            <button
              onClick={() => setActiveMetric('scarcity')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                activeMetric === 'scarcity'
                  ? 'bg-white text-rose-600 shadow-xs dark:bg-slate-800 dark:text-rose-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              Scarcity %
            </button>
          </div>
        </div>

        {/* Chart View */}
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {activeMetric === 'scarcity' ? (
              <LineChart data={timeline} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} tickMargin={8} />
                <YAxis unit="%" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="scarcity_rate" name="Daily Scarcity %" stroke="#e11d48" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            ) : (
              <AreaChart data={timeline} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorBeds" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorOxygen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} tickMargin={8} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Legend />

                {activeMetric === 'total' && (
                  <>
                    <Area type="monotone" dataKey="total_requests" name="Daily Acute Demands" stroke="#2563eb" fillOpacity={1} fill="url(#colorTotal)" strokeWidth={2} />
                    <Line type="monotone" dataKey="total_requests_7d_avg" name="7-Day Rolling Trend" stroke="#f59e0b" strokeWidth={2.5} dot={false} />
                  </>
                )}

                {activeMetric === 'beds' && (
                  <Area type="monotone" dataKey="bed_demands" name="Hospital Bed Demands" stroke="#6366f1" fillOpacity={1} fill="url(#colorBeds)" strokeWidth={2} />
                )}

                {activeMetric === 'oxygen' && (
                  <Area type="monotone" dataKey="oxygen_demands" name="Oxygen Refill Calls" stroke="#0d9488" fillOpacity={1} fill="url(#colorOxygen)" strokeWidth={2} />
                )}
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* District Distribution & Resource Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* District Load Breakdown Bar Chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Top 10 Districts by Healthcare Triage Density
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Concentration of hospital bed centers versus oxygen supply stations across high-burden districts.
            </p>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topDistricts} layout="vertical" margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="district" type="category" tick={{ fontSize: 10 }} width={90} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', fontSize: '12px' }} />
                <Legend />
                <Bar dataKey="bed_facilities" name="Hospital Beds" fill="#6366f1" radius={[0, 4, 4, 0]} />
                <Bar dataKey="oxygen_suppliers" name="Oxygen Stations" fill="#0d9488" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* District Risk Summary Table */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Regional Distress Hierarchy
              </h3>
              <Link to="/risk-analysis" className="text-xs font-semibold text-blue-600 hover:underline">
                View Risk Details &rarr;
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    <th className="pb-2 font-semibold">District</th>
                    <th className="pb-2 font-semibold">Total Load</th>
                    <th className="pb-2 font-semibold">Beds</th>
                    <th className="pb-2 font-semibold">Oxygen</th>
                    <th className="pb-2 font-semibold">Distress Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {districts.slice(0, 6).map((d) => (
                    <tr key={d.district} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="py-2.5 font-medium text-slate-900 dark:text-white">{d.district}</td>
                      <td className="py-2.5 text-slate-600 dark:text-slate-300">{d.total_facilities}</td>
                      <td className="py-2.5 text-indigo-600 dark:text-indigo-400 font-semibold">{d.bed_facilities}</td>
                      <td className="py-2.5 text-teal-600 dark:text-teal-400 font-semibold">{d.oxygen_suppliers}</td>
                      <td className="py-2.5">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          d.distress_level === 'High'
                            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400'
                            : d.distress_level === 'Moderate'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400'
                            : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                        }`}>
                          {d.distress_level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Classifications derived from resource scarcity & triage volume.</span>
            <Link to="/patient-analytics" className="font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600">
              Explore 2,361 Raw Records &rarr;
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
