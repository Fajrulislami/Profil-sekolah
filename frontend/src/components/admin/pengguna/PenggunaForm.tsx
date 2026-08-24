import React from 'react';
import { UserPlus, ShieldAlert, Shield, ShieldCheck, Info } from 'lucide-react';

export default function PenggunaForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Kolom Kiri: Isian Data (Lebar 2/3) */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Box Data Diri */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-emerald-600" />
            Informasi Pribadi & Akun
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Nama Lengkap <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh: Budi Santoso, S.Pd"
                className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Alamat Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Contoh: budi@sekolah.sch.id"
                className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
              <p className="text-xs text-slate-500 mt-1.5">Email ini akan digunakan sebagai username untuk login.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Kata Sandi (Password) <span className="text-rose-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Minimal 8 karakter"
                className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Konfirmasi Kata Sandi <span className="text-rose-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Ketik ulang password"
                className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Pengaturan Role & Status */}
      <div className="space-y-6">
        
        {/* Box Hak Akses */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">Peran & Hak Akses (Role)</h2>
          
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors relative overflow-hidden group">
              <input type="radio" name="role" value="SuperAdmin" className="mt-1 w-4 h-4 text-violet-600 focus:ring-violet-500" />
              <div>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-violet-600" /> Super Admin
                </p>
                <p className="text-xs text-slate-500 mt-1">Akses penuh ke semua halaman, termasuk membuat pengguna admin baru.</p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="role" value="AdminHumas" defaultChecked className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500" />
              <div>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-600" /> Admin Humas
                </p>
                <p className="text-xs text-slate-500 mt-1">Hanya kelola Berita, Pesan Masuk, Fasilitas & Prestasi.</p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="role" value="AdminPPDB" className="mt-1 w-4 h-4 text-amber-600 focus:ring-amber-500" />
              <div>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" /> Admin PPDB
                </p>
                <p className="text-xs text-slate-500 mt-1">Khusus mengelola halaman PPDB dan konsultasi calon pendaftar.</p>
              </div>
            </label>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg flex gap-2 border border-blue-100">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800 font-medium leading-relaxed">Admin yang baru dibuat akan langsung dalam status "Aktif" dan bisa melakukan login.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
