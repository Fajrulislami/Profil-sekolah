import React from 'react';
import { Upload, ImageIcon, Save } from 'lucide-react';

export default function FasilitasForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Kolom Kiri: Isian Utama (Lebar 2/3) */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* Box Data Fasilitas */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Informasi Utama Fasilitas</h2>
          
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Nama Fasilitas <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: Ruang Kelas Interaktif"
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Deskripsi Fasilitas <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="Contoh: Ruang kelas modern yang dirancang untuk mendukung pembelajaran dua arah secara digital demi memicu keaktifan siswa."
              className="block w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors resize-y"
            ></textarea>
            <p className="text-xs text-slate-500 mt-1.5">
              Jelaskan kegunaan umum dari fasilitas ini (1-2 kalimat).
            </p>
          </div>
        </div>

        {/* Box Spesifikasi Detail */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Spesifikasi Detail</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Fungsi Utama <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh: Proses belajar mengajar harian..."
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Kapasitas <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh: 25 - 30 Siswa"
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Lokasi Gedung <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh: Gedung Utama (Lantai 1-3)"
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Digunakan Oleh <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh: Semua Jenjang (TK / SD / SMP)"
                className="block w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Kolom Kanan: Pengaturan Foto & Status (Lebar 1/3) */}
      <div className="space-y-6">
        
        {/* Box Foto Utama (Satu Foto Saja) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-emerald-600" />
            Foto Fasilitas
          </h3>
          
          <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-100 transition-colors">
              <Upload className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm font-medium text-slate-700">Klik untuk memilih foto</p>
            <p className="text-xs text-slate-500 mt-1">Hanya 1 foto diperbolehkan.<br/>Format JPG/PNG, Maks. 2MB</p>
          </div>
        </div>

        {/* Box Status */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Status Tampilan
          </label>
          
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" defaultChecked className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Aktif (Tampil)</p>
                <p className="text-xs text-slate-500">Fasilitas ini terlihat oleh publik.</p>
              </div>
            </label>
            
            <label className="flex items-start gap-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <input type="radio" name="status" className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500" />
              <div>
                <p className="text-sm font-medium text-slate-800">Tidak Aktif (Sembunyikan)</p>
                <p className="text-xs text-slate-500">Fasilitas ini disimpan sementara.</p>
              </div>
            </label>
          </div>
        </div>
        
      </div>
    </div>
  );
}
