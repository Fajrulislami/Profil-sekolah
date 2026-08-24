"use client";

import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';

export default function FasilitasTable() {
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
            placeholder="Cari nama fasilitas..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
            <option value="">Semua Kategori</option>
            <option value="akademik">Akademik & Kelas</option>
            <option value="laboratorium">Laboratorium & Riset</option>
            <option value="olahraga">Olahraga & Seni</option>
            <option value="asrama">Asrama & Ibadah</option>
          </select>
        </div>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500">
              <tr>
                <th className="px-6 py-4 w-12 text-center">No</th>
                <th className="px-6 py-4">Fasilitas & Deskripsi</th>
                <th className="px-6 py-4">Fungsi Utama</th>
                <th className="px-6 py-4">Lokasi & Kapasitas</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              
              {/* Baris Data 1 */}
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 text-center text-slate-400">1</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop" alt="Lab Komputer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Ruang Kelas Interaktif</p>
                      <p className="text-xs text-slate-400 mt-0.5 truncate max-w-[200px]">Ruang kelas modern yang dirancang untuk mendukung...</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-slate-500 line-clamp-2 max-w-xs">Proses belajar mengajar harian berbasis teknologi terintegrasi.</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-xs font-medium text-slate-700">Gedung Utama (Lantai 1-3)</p>
                  <p className="text-xs text-slate-400 mt-0.5">25 - 30 Siswa</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                    Aktif (Tampil)
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      title="Edit Fasilitas"
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      title="Hapus Fasilitas"
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      onClick={() => alert("Apakah Anda yakin ingin menghapus fasilitas 'Ruang Kelas Interaktif' ini secara permanen?")}
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
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-slate-400">No Pic</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Laboratorium Sains</p>
                      <p className="text-xs text-slate-400 mt-0.5 truncate max-w-[200px]">Pusat penelitian dan eksperimen sains siswa.</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-slate-500 line-clamp-2 max-w-xs">Praktikum Fisika, Biologi, dan Kimia.</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-xs font-medium text-slate-700">Gedung B (Lantai Dasar)</p>
                  <p className="text-xs text-slate-400 mt-0.5">40 Siswa</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    Tidak Aktif
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      title="Edit Fasilitas"
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      title="Hapus Fasilitas"
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      onClick={() => alert("Apakah Anda yakin ingin menghapus fasilitas 'Laboratorium Sains' ini secara permanen?")}
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
          <p className="text-sm text-slate-500">Menampilkan 1 hingga 2 dari 2 fasilitas</p>
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
