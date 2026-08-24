import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';

export default function BeritaTable() {
  return (
    <div className="space-y-4">
      {/* Filter & Pencarian */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Cari judul berita..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
            <option value="">Semua Kategori</option>
            <option value="kegiatan">Kegiatan</option>
            <option value="prestasi">Prestasi</option>
            <option value="pengumuman">Pengumuman</option>
          </select>
        </div>
      </div>

      {/* Tabel Data yang Lapang */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500">
              <tr>
                <th className="px-6 py-4 w-12 text-center">No</th>
                <th className="px-6 py-4">Judul Berita</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Tanggal Publikasi</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              
              {/* Baris Data 1 (Contoh Berita Utama) */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 text-center text-slate-400">1</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-slate-800">Kegiatan Masa Ta'aruf Siswa Madrasah (Matsama) 2026</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {/* Indikator Berita Utama (Sederhana, Tanpa Icon AI/Mencolok) */}
                    <span className="inline-flex px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200">
                      Berita Utama
                    </span>
                    <p className="text-xs text-slate-400 truncate max-w-[250px]">Seluruh siswa baru mengikuti kegiatan Matsama dengan antusias...</p>
                  </div>
                </td>
                <td className="px-6 py-4">Kegiatan</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                    Sudah Terbit
                  </span>
                </td>
                <td className="px-6 py-4">15 Juli 2026</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      title="Edit Berita"
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      title="Hapus Berita"
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Baris Data 2 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 text-center text-slate-400">2</td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-slate-800">Pendaftaran Beasiswa Tahfidz Quran Dibuka</p>
                  <p className="text-xs text-slate-400 mt-0.5 truncate max-w-xs">Sekolah kembali membuka jalur beasiswa bagi siswa yang memiliki hafalan...</p>
                </td>
                <td className="px-6 py-4">Pengumuman</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-700 rounded-full border border-amber-200">
                    Konsep (Draft)
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-400">-</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      title="Edit Berita"
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      title="Hapus Berita"
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        
        {/* Pagination Bawah */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-500">Menampilkan 1 hingga 2 dari 2 berita</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-slate-400 border border-slate-200 rounded-lg cursor-not-allowed">
              Sebelumnya
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
