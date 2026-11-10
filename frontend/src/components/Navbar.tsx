import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Activity, BarChart3, TrendingUp,
  Moon, Sun, LogIn, LogOut, Menu, X, BookOpen, ChevronDown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const primaryLinks = [
    { path: '/', label: 'Home', icon: Activity },
    { path: '/dashboard', label: 'COVID-19 Overview', icon: BarChart3 },
    { path: '/historical', label: 'Historical Analysis', icon: Activity },
    { path: '/prediction', label: 'AI Prediction', icon: TrendingUp },
    { path: '/methodology', label: 'Data & Methodology', icon: BookOpen },
  ];

  const secondaryLinks = [
    { path: '/risk-analysis', label: 'Risk Analysis' },
    { path: '/patient-analytics', label: 'Resource Registry' },
    { path: '/geographic', label: 'Geographic Map' },
    { path: '/insights', label: 'AI Insights' },
    { path: '/data-management', label: 'Data Management' },
    { path: '/reports', label: 'Analytical Reports' },
  ];

  if (user?.role === 'admin' || user?.role === 'researcher') {
    secondaryLinks.push({ path: '/admin', label: 'Admin Control' });
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95 transition-colors shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              COVID-19 TREND PREDICTION
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
              Public Health Analytics Platform
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {primaryLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                {item.label}
              </Link>
            );
          })}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
            >
              <span>More</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-1.5 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg py-1.5 z-50">
                {secondaryLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMoreOpen(false)}
                    className={`block px-4 py-2 text-xs font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/40 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* User Auth */}
          {user ? (
            <div className="flex items-center gap-2 border-l border-slate-200 pl-2.5 dark:border-slate-700">
              <div className="hidden sm:block text-right">
                <div className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">{user.full_name}</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                  {user.role.replace('_', ' ')}
                </div>
              </div>
              <button
                onClick={logout}
                title="Logout"
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-950/50 dark:text-red-300 dark:hover:bg-red-900/60 rounded-md transition"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 border-l border-slate-200 pl-2.5 dark:border-slate-700">
              <Link
                to="/login"
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition"
              >
                <LogIn className="h-3.5 w-3.5" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1">
          {[...primaryLinks, ...secondaryLinks].map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${
                  active
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
            {!user ? (
              <div className="flex gap-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-md">Login</Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2 text-xs font-semibold text-white bg-blue-600 rounded-md">Register</Link>
              </div>
            ) : (
              <button onClick={logout} className="w-full py-2 text-xs font-semibold text-red-600 dark:text-red-400">Logout ({user.full_name})</button>
            )}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {moreOpen && <div className="fixed inset-0 z-40" onClick={() => setMoreOpen(false)} />}
    </header>
  );
};
