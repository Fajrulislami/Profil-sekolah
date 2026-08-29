import React from 'react';
import Link from 'next/link';
import { Users, FileText, MessageSquare, Eye, Info } from 'lucide-react';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  // Fetch real data from Prisma
  const pendaftarCount = await prisma.pendaftarPPDB.count();
  const beritaCount = await prisma.berita.count({ where: { status: 'PUBLISHED' } });
  const pesanCount = await prisma.pesan.count({ where: { isRead: false } });
  
  // Ambil 5 pesan terbaru
  const recentMessages = await prisma.pesan.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  // Dummy kunjungan web
  const kunjunganCount = 3240;

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
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-300 transition-colors">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pendaftar PPDB</p>
            <h3 className="text-2xl font-bold text-slate-800">{pendaftarCount.toLocaleString('id-ID')}</h3>
          </div>
        </div>

        {/* Kartu 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-300 transition-colors">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Berita Dipublikasi</p>
            <h3 className="text-2xl font-bold text-slate-800">{beritaCount.toLocaleString('id-ID')}</h3>
          </div>
        </div>

        {/* Kartu 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-amber-300 transition-colors">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pesan Belum Dibaca</p>
            <h3 className="text-2xl font-bold text-slate-800">{pesanCount.toLocaleString('id-ID')}</h3>
          </div>
        </div>

        {/* Kartu 4 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 relative group hover:border-purple-300 transition-colors">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 flex items-center gap-1">
              Kunjungan Web
              <Info className="w-3 h-3 text-slate-400 cursor-help" />
            </p>
            <h3 className="text-2xl font-bold text-slate-800">{kunjunganCount.toLocaleString('id-ID')}</h3>
          </div>
          
          {/* Tooltip Penjelasan Data Dummy */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <p><strong>Catatan:</strong> Data ini saat ini adalah simulasi (dummy) karena sistem tracking analitik web (seperti Google Analytics) belum terintegrasi ke sistem.</p>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
          </div>
        </div>

      </div>

      {/* Area Bawah: Tabel Aktivitas & Info Tambahan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        
        {/* Tabel Aktivitas Terakhir (Lebar 2/3) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-800">Pesan Masuk Terbaru</h2>
            <Link href="/admin/dashboard/pesan" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">Lihat Semua</Link>
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
                {recentMessages.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                      Belum ada pesan masuk.
                    </td>
                  </tr>
                ) : (
                  recentMessages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-800">{msg.senderName}</td>
                      <td className="px-6 py-4 truncate max-w-[200px]">{msg.subject}</td>
                      <td className="px-6 py-4 text-xs whitespace-nowrap">
                        {new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(msg.createdAt))}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {msg.isRead ? (
                          <span className="px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-600 rounded-full">Sudah Dibaca</span>
                        ) : (
                          <span className="px-2.5 py-1 text-xs font-medium bg-rose-50 text-rose-600 rounded-full">Belum Dibaca</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Kanan Halaman (Lebar 1/3) */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Pintasan Cepat</h2>
          <div className="space-y-3">
            <Link href="/admin/dashboard/berita/tambah" className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-left transition-colors group">
              <div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700">Tulis Berita Baru</p>
                <p className="text-xs text-slate-500">Publikasikan artikel terbaru</p>
              </div>
              <span className="text-emerald-600 bg-white p-1.5 rounded-md shadow-sm border border-emerald-100">+</span>
            </Link>
            <Link href="/admin/dashboard/prestasi/tambah" className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-left transition-colors group">
              <div>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">Tambah Prestasi</p>
                <p className="text-xs text-slate-500">Update galeri juara siswa</p>
              </div>
              <span className="text-blue-600 bg-white p-1.5 rounded-md shadow-sm border border-blue-100">+</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
