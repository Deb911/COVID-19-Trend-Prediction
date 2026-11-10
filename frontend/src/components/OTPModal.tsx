import React, { useState, useEffect } from 'react';
import { Mail, Clock, RefreshCw, CheckCircle2, AlertCircle, X, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface OTPModalProps {
  onSuccess?: () => void;
}

export const OTPModal: React.FC<OTPModalProps> = ({ onSuccess }) => {
  const { otpModal, closeOTPModal } = useAuth();
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(60);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!otpModal.isOpen) {
      setCode('');
      setError(null);
      setSuccess(null);
      return;
    }

    setTimeLeft(300);
    setCanResend(false);
    setResendCooldown(60);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const resendTimer = setInterval(() => {
      setResendCooldown(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(resendTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(resendTimer);
    };
  }, [otpModal.isOpen]);

  if (!otpModal.isOpen) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError('Please enter a valid 6-digit verification code.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: otpModal.email,
          otp_code: code,
          purpose: otpModal.purpose
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || 'Verification failed. Please check the code.');
      }

      setSuccess('Verification successful! Your identity has been verified.');
      setTimeout(() => {
        closeOTPModal();
        if (onSuccess) onSuccess();
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Verification error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: otpModal.email,
          purpose: otpModal.purpose
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || 'Failed to resend verification code.');
      }

      setCanResend(false);
      setResendCooldown(60);
      setTimeLeft(300);
      setSuccess('A fresh 6-digit code has been dispatched to your email.');
      setTimeout(() => setSuccess(null), 3500);
    } catch (err: any) {
      setError(err.message || 'Error requesting code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        
        {/* Close Button */}
        <button
          onClick={closeOTPModal}
          className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-400 mb-3">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Security Verification Required
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            We sent a confidential 6-digit code to <strong className="text-slate-700 dark:text-slate-300">{otpModal.email}</strong>
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-rose-50 p-3 text-xs font-medium text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {/* Verification Form */}
        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              6-Digit One-Time Passcode (OTP)
            </label>
            <input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              placeholder="&bull; &bull; &bull; &bull; &bull; &bull;"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-center text-2xl font-bold tracking-[0.5em] text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 transition"
              autoFocus
            />
          </div>

          {/* Expiration Timer & Resend */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>Expires in: </span>
              <span className={`font-bold ${timeLeft < 60 ? 'text-rose-500' : 'text-slate-700 dark:text-slate-300'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend || loading}
              className={`flex items-center gap-1 font-semibold transition ${
                canResend
                  ? 'text-blue-600 hover:text-blue-700 dark:text-blue-400 cursor-pointer'
                  : 'text-slate-400 cursor-not-allowed'
              }`}
            >
              <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
              <span>{canResend ? 'Resend Code' : `Resend in ${resendCooldown}s`}</span>
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || code.length !== 6 || timeLeft === 0}
            className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 focus:outline-none disabled:opacity-50 transition"
          >
            {loading ? 'Verifying Credentials...' : 'Verify Code & Proceed'}
          </button>
        </form>

        <p className="text-[11px] text-center text-slate-400 mt-4">
          Strict OTP expiration prevents brute-force interception. Codes expire after 5 minutes.
        </p>
      </div>
    </div>
  );
};
