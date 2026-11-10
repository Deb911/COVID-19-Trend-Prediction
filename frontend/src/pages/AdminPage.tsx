import React, { useEffect, useState } from 'react';
import {
  ShieldCheck, Users, Activity, RefreshCw,
  Server, Database, Cpu, CheckCircle2, AlertCircle, Clock
} from 'lucide-react';
import { api } from '../services/api';
import { AuditLogItem, SystemHealth } from '../types';

export const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>([]);
  const [health, setHealth] = useState<SystemHealth | null>(null);
  const [loading, setLoading] = useState(true);
  const [retraining, setRetraining] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const loadAdminData = async () => {
    setLoading(true);
    try {
      const [u, logs, h] = await Promise.all([
        api.getUsers(),
        api.getAuditLogs(30),
        api.getSystemHealth()
      ]);
      setUsers(u.users || []);
      setAuditLogs(logs);
      setHealth(h);
    } catch (e) {
      console.error('Failed to load admin telemetry:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const handleRoleChange = async (userId: number, newRole: string) => {
    try {
      await api.updateUserRole(userId, newRole);
      setStatusMsg(`User role successfully changed to ${newRole}`);
      await loadAdminData();
      setTimeout(() => setStatusMsg(null), 3500);
    } catch (err: any) {
      setStatusMsg(err.message || 'Failed to update user role');
    }
  };

  const handleRetrainTrigger = async () => {
    setRetraining(true);
    try {
      const res = await api.retrainModels();
      setStatusMsg(res.message);
      setTimeout(() => {
        loadAdminData();
        setRetraining(false);
      }, 3000);
    } catch (err: any) {
      setStatusMsg(err.message || 'Retraining failed');
      setRetraining(false);
    }
  };

  return (
    <div className="space-y-8 py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Administrator Governance & Health Portal
            </h1>
            <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
              Privileged Access
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            System resource health, cryptographic audit logging, user role management, and model pipeline retraining.
          </p>
        </div>

        <button
          onClick={handleRetrainTrigger}
          disabled={retraining}
          className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 shadow-sm transition disabled:opacity-50"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${retraining ? 'animate-spin' : ''}`} />
          <span>{retraining ? 'Retraining Models...' : 'Retrain All ML Models'}</span>
        </button>
      </div>

      {statusMsg && (
        <div className="rounded-xl bg-blue-50 p-3.5 border border-blue-200 text-xs font-medium text-blue-800 dark:bg-blue-950/50 dark:border-blue-900 dark:text-blue-300">
          {statusMsg}
        </div>
      )}

      {/* System Health Telemetry Bar */}
      {health && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase">
              <Server className="h-4 w-4 text-emerald-500" />
              <span>Service Health</span>
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">
              {health.status}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Uvicorn ASGI Engine</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase">
              <Database className="h-4 w-4 text-blue-500" />
              <span>Database Size</span>
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">
              {health.database.size_formatted}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">{health.database.total_records} Active Records</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase">
              <Cpu className="h-4 w-4 text-purple-500" />
              <span>Process Memory</span>
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">
              {health.system_resources.memory_usage_mb} MB
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Resident Set Size</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase">
              <Activity className="h-4 w-4 text-amber-500" />
              <span>Trained ML Models</span>
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white mt-2">
              {health.models_status.trained_models_count} Models
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">ARIMA, RF, GB, Linear</div>
          </div>
        </div>
      )}

      {/* User Management Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">
          User Account Directory & Role-Based Access Control
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <th className="pb-3 font-semibold">User</th>
                <th className="pb-3 font-semibold">Email</th>
                <th className="pb-3 font-semibold">Email Verification</th>
                <th className="pb-3 font-semibold">Assigned Role</th>
                <th className="pb-3 font-semibold">Change Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3 font-semibold text-slate-900 dark:text-white">{u.full_name}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-300 font-mono">{u.email}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
                      u.is_verified ? 'text-emerald-600' : 'text-amber-500'
                    }`}>
                      {u.is_verified ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                      <span>{u.is_verified ? 'Verified' : 'Pending OTP'}</span>
                    </span>
                  </td>
                  <td className="py-3 font-semibold uppercase text-[11px] text-blue-600 dark:text-blue-400">
                    {u.role}
                  </td>
                  <td className="py-3">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 focus:outline-none"
                    >
                      <option value="public">Public</option>
                      <option value="healthcare_worker">Healthcare Worker</option>
                      <option value="researcher">Researcher</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Audit Logs */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4">
          Cryptographic Security Audit Trails
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <th className="pb-2 font-semibold">Timestamp</th>
                <th className="pb-2 font-semibold">Action</th>
                <th className="pb-2 font-semibold">User / Operator</th>
                <th className="pb-2 font-semibold">Action Details</th>
                <th className="pb-2 font-semibold">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-2.5 text-slate-400">{log.created_at}</td>
                  <td className="py-2.5 font-bold text-blue-600 dark:text-blue-400">{log.action}</td>
                  <td className="py-2.5 text-slate-600 dark:text-slate-300">{log.user_email}</td>
                  <td className="py-2.5 text-slate-500 max-w-sm truncate">{log.details}</td>
                  <td className="py-2.5 text-slate-400">{log.ip_address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
