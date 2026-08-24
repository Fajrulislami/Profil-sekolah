"use client";

import React from 'react';
import { Search, Edit, Trash2 } from 'lucide-react';

const data = [
  {
    id: 1,
    judul: "Medali Emas Olimpiade Sains Nasional (OSN) 2025",
    siswa: "Muhammad Farhan & Tim",
    ajang: "Olimpiade Sains Nasional (OSN)",
    tingkat: "Nasional",
    bidang: "Akademik",
    medali: "Emas",
    tahun: 2025,
    isUnggulan: true,
  },
  {
    id: 2,
    judul: "Juara 1 Turnamen Basket Pelajar Provinsi",
    siswa: "Tim Basket Putra",
    ajang: "Turnamen Basket Pelajar",
    tingkat: "Provinsi",
    bidang: "Olahraga & Seni",
    medali: "Juara 1",
    tahun: 2025,
    isUnggulan: false,
  },
];

const tingkatColor: Record<string, string> = {
  "Internasional": "bg-violet-50 text-violet-700 border-violet-200",
  "Nasional":      "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Provinsi":      "bg-sky-50 text-sky-700 border-sky-200",
  "Kota/Kabupaten":"bg-slate-100 text-slate-600 border-slate-200",
};

const medaliColor: Record<string, string> = {
  "Emas":    "bg-amber-50 text-amber-700 border-amber-200",
  "Perak":   "bg-slate-100 text-slate-600 border-slate-300",
  "Perunggu":"bg-orange-50 text-orange-700 border-orange-200",
  "Juara 1": "bg-amber-50 text-amber-700 border-amber-200",
  "Juara 2": "bg-slate-100 text-slate-600 border-slate-300",
  "Juara 3": "bg-orange-50 text-orange-700 border-orange-200",
  "Harapan": "bg-slate-50 text-slate-500 border-slate-200",
};

export default function PrestasiTable() {
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
            placeholder="Cari nama prestasi atau siswa..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
            <option value="">Semua Tingkat</option>
            <option>Internasional</option>
            <option>Nasional</option>
            <option>Provinsi</option>
            <option>Kota/Kabupaten</option>
          </select>
          <select className="block w-full sm:w-auto py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white">
            <option value="">Semua Bidang</option>
            <option>Akademik</option>
            <option>Tahfidz & Keagamaan</option>
            <option>Robotika & Teknologi</option>
            <option>Olahraga & Seni</option>
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
                <th className="px-6 py-4">Nama Prestasi</th>
                <th className="px-6 py-4">Siswa / Tim</th>
                <th className="px-6 py-4">Bidang</th>
                <th className="px-6 py-4">Tingkat & Medali</th>
                <th className="px-6 py-4 text-center">Tahun</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((item, i) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-center text-slate-400">{i + 1}</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-800 mb-1">{item.judul}</p>
                    <div className="flex items-center gap-1.5">
                      {item.isUnggulan && (
                        <span className="inline-flex px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200">
                          Hall of Fame
                        </span>
                      )}
                      <span className="text-xs text-slate-400">{item.ajang}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{item.siswa}</td>
                  <td className="px-6 py-4 text-slate-600">{item.bidang}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5">
                      <span className={`inline-flex w-max px-2.5 py-1 text-xs font-medium rounded-full border ${tingkatColor[item.tingkat] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                        {item.tingkat}
                      </span>
                      <span className={`inline-flex w-max px-2.5 py-1 text-xs font-medium rounded-full border ${medaliColor[item.medali] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                        {item.medali}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-500">{item.tahun}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button title="Edit Prestasi" className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        title="Hapus Prestasi"
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        onClick={() => alert(`Apakah Anda yakin ingin menghapus prestasi '${item.judul}' ini secara permanen?`)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Bawah */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-500">Menampilkan {data.length} dari {data.length} prestasi</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-slate-400 border border-slate-200 rounded-lg cursor-not-allowed">Sebelumnya</button>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
}
