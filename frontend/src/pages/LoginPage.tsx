import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Lock, Mail, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, openOTPModal } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), password })
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.detail && data.detail.includes('not verified')) {
          openOTPModal(email, 'registration');
          throw new Error('Your email is not verified yet. We have opened the OTP verification dialog.');
        }
        throw new Error(data.detail || 'Login failed. Please check your credentials.');
      }

      login(data.access_token, data.user);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Authentication error.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoFill = (role: 'admin' | 'researcher') => {
    if (role === 'admin') {
      setEmail('admin@covid-analytics.org');
      setPassword('Admin@Covid2026!');
    } else {
      setEmail('researcher@health.gov');
      setPassword('Research@2026!');
    }
  };

  return (
    <div className="flex min-h-[75vh] items-center justify-center py-10 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 mb-3">
            <Activity className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            Healthcare Portal Sign-In
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Access COVID-19 Trend Forecasting & Patient Triage Operations
          </p>
        </div>

        {error && (
          <div className="mb-5 flex items-center gap-2 rounded-xl bg-rose-50 p-3.5 text-xs font-medium text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="physician@health.gov"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Password
              </label>
              <button
                type="button"
                onClick={() => {
                  if (!email) {
                    setError('Please enter your email address first to receive a password reset code.');
                    return;
                  }
                  openOTPModal(email, 'forgot_password');
                }}
                className="text-[11px] font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 focus:outline-none transition disabled:opacity-50 mt-2"
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        {/* Demo Credentials Helper */}
        <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-2">
            One-Click Demo Credentials
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handleDemoFill('admin')}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 transition"
            >
              Fill Admin (Full Access)
            </button>
            <button
              type="button"
              onClick={() => handleDemoFill('researcher')}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 transition"
            >
              Fill Researcher (Analyst)
            </button>
          </div>
        </div>

        {/* Register CTA */}
        <div className="mt-6 text-center text-xs text-slate-500">
          <span>New healthcare researcher? </span>
          <Link to="/register" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
            Create an account
          </Link>
        </div>

      </div>
    </div>
  );
};
