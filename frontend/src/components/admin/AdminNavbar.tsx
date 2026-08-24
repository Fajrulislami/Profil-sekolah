import React from 'react';
import Link from 'next/link';
import { ExternalLink, Bell, Search } from 'lucide-react';

export default function AdminNavbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      
      {/* Kiri: Pencarian Global (Opsional) atau Judul Halaman */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cari data..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Kanan: Actions & Profile */}
      <div className="flex items-center gap-6">
        
        {/* Tombol Lihat Website */}
        <Link 
          href="/" 
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Lihat Website</span>
        </Link>

        {/* Garis Pemisah */}
        <div className="w-px h-6 bg-slate-200"></div>

        {/* Notifikasi */}
        <button className="relative text-slate-400 hover:text-slate-600 transition-colors focus:outline-none">
          <Bell className="w-5 h-5" />
          {/* Badge Notifikasi Aktif */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>

        {/* Profil Admin */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold text-slate-800">Fajrul Islami</div>
            <div className="text-xs text-slate-500">Super Admin</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
            FI
          </div>
        </div>
        
      </div>
    </header>
  );
}
