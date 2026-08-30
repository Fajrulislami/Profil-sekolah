"use client";

import React, { useState } from 'react';
import { Mail, Lock, LogIn, AlertCircle, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 1000);
      } else {
        setError(data.message || 'Gagal masuk. Periksa email dan sandi Anda.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Terjadi kesalahan pada jaringan atau server.');
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/v1/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/admin/dashboard');
        }, 1000);
      } else {
        setError(data.message || 'Gagal masuk dengan Google.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Terjadi kesalahan pada jaringan saat autentikasi Google.');
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError('Gagal terhubung dengan Google. Silakan coba lagi.');
  };

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'dummy-client-id';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
        
        {/* Header / Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-emerald-600 rounded-lg mx-auto flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">SM</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Login Admin</h1>
          <p className="text-sm text-slate-500 mt-2">Masuk ke dasbor pengelolaan profil sekolah</p>
        </div>

        {/* Notifikasi Error */}
        {error && !isSuccess && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <p className="text-sm text-rose-600">{error}</p>
          </div>
        )}

        {/* Notifikasi Sukses */}
        {isSuccess && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-600 font-medium">Login berhasil! Mengalihkan...</p>
          </div>
        )}

        {/* Google Login Button */}
        <div className="mb-6">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap={false}
            theme="outline"
            size="large"
            text="continue_with"
          />
        </div>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Atau masuk dengan email</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* Form Login */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
              Alamat Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@sekolahmadani.sch.id"
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                required
                disabled={isLoading || isSuccess}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700" htmlFor="password">
                Kata Sandi
              </label>
              <button 
                type="button" 
                onClick={() => alert("Sistem tidak mengirim email otomatis. Silakan hubungi Super Admin atau bagian IT Sekolah untuk mereset kata sandi Anda.")}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Lupa sandi?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                required
                disabled={isLoading || isSuccess}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-emerald-600 transition-colors focus:outline-none"
                disabled={isLoading || isSuccess}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || isSuccess}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold transition-all mt-2 ${
              isSuccess 
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" 
                : "bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-70 disabled:cursor-not-allowed"
            }`}
          >
            {isLoading && !isSuccess ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isSuccess ? (
              <>
                <CheckCircle className="w-5 h-5 animate-in zoom-in" />
                Berhasil
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                Masuk
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>&copy; 2026 SMA Madani. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </div>
    </GoogleOAuthProvider>
  );
}
