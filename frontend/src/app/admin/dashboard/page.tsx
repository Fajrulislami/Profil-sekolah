import React from 'react';
import { Users, FileText, MessageSquare, Eye } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Ringkasan Dasbor</h1>
        <p className="text-sm text-slate-500 mt-1">Selamat datang kembali, berikut adalah statistik website Anda hari ini.</p>
      </div>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Kartu 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pendaftar PPDB</p>
            <h3 className="text-2xl font-bold text-slate-800">128</h3>
          </div>
        </div>

        {/* Kartu 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Berita Aktif</p>
            <h3 className="text-2xl font-bold text-slate-800">45</h3>
          </div>
        </div>

        {/* Kartu 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pesan Masuk</p>
            <h3 className="text-2xl font-bold text-slate-800">12</h3>
          </div>
        </div>

        {/* Kartu 4 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Kunjungan Bulan Ini</p>
            <h3 className="text-2xl font-bold text-slate-800">3,240</h3>
          </div>
        </div>

      </div>

      {/* Area Bawah: Tabel Aktivitas & Info Tambahan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        
        {/* Tabel Aktivitas Terakhir (Lebar 2/3) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800">Pesan Masuk Terbaru</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
                <tr>
                  <th className="px-6 py-4">Pengirim</th>
                  <th className="px-6 py-4">Subjek</th>
                  <th className="px-6 py-4">Tanggal</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Baris 1 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">Budi Santoso</td>
                  <td className="px-6 py-4">Tanya syarat PPDB SD</td>
                  <td className="px-6 py-4">Hari ini, 10:30</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-1 text-xs font-medium bg-rose-50 text-rose-600 rounded-full">Belum Dibaca</span>
                  </td>
                </tr>
                {/* Baris 2 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">Siti Aminah</td>
                  <td className="px-6 py-4">Pendaftaran gelombang 2</td>
                  <td className="px-6 py-4">Kemarin</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-600 rounded-full">Sudah Dibaca</span>
                  </td>
                </tr>
                {/* Baris 3 */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">Agus Wijaya</td>
                  <td className="px-6 py-4">Biaya seragam SMP</td>
                  <td className="px-6 py-4">19 Agustus 2026</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-600 rounded-full">Sudah Dibaca</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Kanan Halaman (Lebar 1/3) */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Pintasan Cepat</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-left transition-colors group">
              <div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700">Tulis Berita Baru</p>
                <p className="text-xs text-slate-500">Publikasikan artikel terbaru</p>
              </div>
              <span className="text-emerald-600 bg-white p-1.5 rounded-md shadow-sm border border-emerald-100">+</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-left transition-colors group">
              <div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">Tambah Prestasi</p>
                <p className="text-xs text-slate-500">Update galeri juara siswa</p>
              </div>
              <span className="text-blue-600 bg-white p-1.5 rounded-md shadow-sm border border-blue-100">+</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
