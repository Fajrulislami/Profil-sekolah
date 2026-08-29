import React, { FormEvent, useState } from 'react';
import { UserPlus, ShieldAlert, Shield, ShieldCheck, Info } from 'lucide-react';

export interface PenggunaData {
  id?: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLogin: string;
  password?: string; // Menambahkan opsi password
}

interface PenggunaFormProps {
  initialData?: PenggunaData;
  onSubmit: (data: PenggunaData) => void;
  apiError?: string | null;
}

export default function PenggunaForm({ initialData, onSubmit, apiError }: PenggunaFormProps) {
  // Secara default, jika ini mode tambah (bukan edit), aktifkan Google Only
  const [isGoogleOnly, setIsGoogleOnly] = useState(!initialData);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError(null);
    const formData = new FormData(e.currentTarget);
    
    // In a real application, passwords would be handled securely here.
    const data: PenggunaData = {
      id: initialData?.id || Date.now(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      isActive: initialData ? initialData.isActive : true,
      lastLogin: initialData?.lastLogin || "Belum pernah",
    };

    if (!isGoogleOnly && formData.get('password')) {
      const password = formData.get('password') as string;
      const confirmPassword = formData.get('confirmPassword') as string;
      
      if (!initialData || password !== '') {
        if (password !== confirmPassword) {
          setValidationError("Kata sandi dan konfirmasi kata sandi tidak cocok.");
          return;
        }
        data.password = password;
      }
    }
    
    onSubmit(data);
  };

  const displayError = validationError || apiError;

  return (
    <form id="pengguna-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Kolom Kiri: Isian Data (Lebar 2/3) */}
      <div className="lg:col-span-2 space-y-6">
        
        {displayError && (
          <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg text-rose-700 text-sm font-medium">
            {displayError}
          </div>
        )}

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
                name="name"
                required
                defaultValue={initialData?.name}
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
                name="email"
                required
                defaultValue={initialData?.email}
                placeholder="Contoh: budi@sekolah.sch.id"
                className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
              <p className="text-xs text-slate-500 mt-1.5">Email ini akan digunakan sebagai username untuk login.</p>
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isGoogleOnly}
                onChange={(e) => setIsGoogleOnly(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <span className="text-sm font-semibold text-slate-800">
                Gunakan Login Google (Tanpa Kata Sandi)
              </span>
            </label>
            <p className="text-xs text-slate-500 mt-1 ml-7">Admin hanya bisa masuk melalui tombol "Masuk dengan Google" menggunakan alamat email di atas.</p>
          </div>

          {!isGoogleOnly && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1">
                  Kata Sandi (Password) {!initialData && <span className="text-rose-500">*</span>}
                </label>
                <input
                  type="password"
                  name="password"
                  required={!initialData && !isGoogleOnly}
                  placeholder={initialData ? "Kosongkan jika tidak ingin mengubah sandi" : "Minimal 8 karakter"}
                  className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1">
                  Konfirmasi Kata Sandi {!initialData && <span className="text-rose-500">*</span>}
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required={!initialData && !isGoogleOnly}
                  placeholder="Ketik ulang password"
                  className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Kolom Kanan: Pengaturan Role & Status */}
      <div className="space-y-6">
        
        {/* Box Hak Akses */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">Peran & Hak Akses (Role)</h2>
          
          <div className="space-y-3">
            <label className={`flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg transition-colors relative overflow-hidden group ${initialData?.role === 'SuperAdmin' ? 'opacity-60 bg-slate-50 cursor-not-allowed' : 'hover:bg-slate-50'}`}>
              <input type="radio" name="role" value="SuperAdmin" defaultChecked={initialData?.role === 'SuperAdmin'} disabled={initialData?.role === 'SuperAdmin'} className="mt-1 w-4 h-4 text-violet-600 focus:ring-violet-500" />
              <div>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-violet-600" /> Super Admin
                </p>
                <p className="text-xs text-slate-500 mt-1">Akses penuh ke semua halaman, termasuk membuat pengguna admin baru.</p>
              </div>
            </label>

            <label className={`flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg transition-colors ${initialData?.role === 'SuperAdmin' ? 'opacity-60 bg-slate-50 cursor-not-allowed' : 'hover:bg-slate-50'}`}>
              <input type="radio" name="role" value="AdminHumas" defaultChecked={(!initialData) || (initialData?.role === 'AdminHumas')} disabled={initialData?.role === 'SuperAdmin'} className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500" />
              <div>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-600" /> Admin Humas
                </p>
                <p className="text-xs text-slate-500 mt-1">Hanya kelola Berita, Pesan Masuk, Fasilitas & Prestasi.</p>
              </div>
            </label>

            <label className={`flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg transition-colors ${initialData?.role === 'SuperAdmin' ? 'opacity-60 bg-slate-50 cursor-not-allowed' : 'hover:bg-slate-50'}`}>
              <input type="radio" name="role" value="AdminPPDB" defaultChecked={initialData?.role === 'AdminPPDB'} disabled={initialData?.role === 'SuperAdmin'} className="mt-1 w-4 h-4 text-amber-600 focus:ring-amber-500" />
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
    </form>
  );
}
