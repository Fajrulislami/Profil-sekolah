import React from 'react';
import { Mail, Lock, LogIn } from 'lucide-react'; // Menggunakan ikon standar Lucide

export default function AdminLoginPage() {
  return (
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

        {/* Form Login */}
        <form className="space-y-5">
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
                placeholder="admin@sekolahmadani.sch.id"
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700" htmlFor="password">
                Kata Sandi
              </label>
              <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                Lupa sandi?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                required
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <LogIn className="h-5 w-5" />
              Masuk ke Dasbor
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            Halaman ini dilindungi secara aman. Akses hanya untuk staf berwenang.
          </p>
        </div>
      </div>
    </div>
  );
}
