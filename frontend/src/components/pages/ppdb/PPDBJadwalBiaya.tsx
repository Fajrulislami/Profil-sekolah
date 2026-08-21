"use client";

import { useState, useEffect } from "react";

export default function PPDBJadwalBiaya() {
  // State untuk memastikan render tanggal aman di sisi client (mencegah error hydration Next.js)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Kita gunakan tanggal hari ini secara otomatis.
  // Catatan: Jika ingin mencoba/tes UI, Anda bisa ganti new Date() menjadi new Date("2027-04-10")
  const today = new Date();

  // Data gelombang sekarang menggunakan startDate dan endDate untuk pengecekan otomatis
  const wavesData = [
    {
      name: "Gelombang 1 (Awal)",
      period: "01 Oktober - 31 Desember 2026",
      startDate: new Date("2026-10-01T00:00:00"),
      endDate: new Date("2026-12-31T23:59:59"),
      benefit: "Diskon Uang Gedung 20% & Gratis Biaya Formulir",
    },
    {
      name: "Gelombang 2 (Reguler)",
      period: "01 Januari - 31 Maret 2027",
      startDate: new Date("2027-01-01T00:00:00"),
      endDate: new Date("2027-03-31T23:59:59"),
      benefit: "Diskon Biaya Masuk 10% & Prioritas Pilihan Kelas",
    },
    {
      name: "Gelombang 3 (Penutupan)",
      period: "01 April - 30 Mei 2027",
      startDate: new Date("2027-04-01T00:00:00"),
      endDate: new Date("2027-05-30T23:59:59"),
      benefit: "Pendaftaran Ditutup Otomatis Jika Kuota Sudah Penuh",
    },
  ];

  // Logic Otomatis: Menentukan status masing-masing gelombang berdasarkan tanggal hari ini
  const waves = wavesData.map((w) => {
    const isPast = today > w.endDate;
    const isFuture = today < w.startDate;
    const isCurrent = today >= w.startDate && today <= w.endDate;

    let status = "";
    let statusColor = "";

    if (isCurrent) {
      status = "Sedang Dibuka";
      statusColor = "bg-emerald-600 text-white animate-pulse";
    } else if (isPast) {
      status = "Selesai";
      statusColor = "bg-slate-200 text-slate-700";
    } else {
      status = "Akan Datang";
      statusColor = "bg-amber-100 text-amber-800 border border-amber-300";
    }

    return { ...w, isCurrent, status, statusColor };
  });

  const feeComponents = [
    { name: "Formulir & Temu Kenal Anak", note: "Cukup dibayar 1 kali saat mendaftar" },
    { name: "Uang Masuk / Gedung", note: "Bisa dicicil hingga 3 kali pembayaran" },
    { name: "Paket Seragam & Buku Lengkap", note: "Dapat 5 pasang seragam lengkap & buku panduan" },
    { name: "SPP Bulanan", note: "Sudah mencakup semua kegiatan & ekstrakurikuler" },
  ];

  // Cegah render sebelum client siap agar tidak ada mismatch UI
  if (!isMounted) return null;

  return (
    <section id="jadwal" className="relative w-full py-24 bg-slate-50 font-sans border-t border-slate-200/80 overflow-hidden">
      
      {/* Pola Titik Halus */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tema Terang) */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
              Jadwal & Biaya Jelas
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.15] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 pb-2">
              Jadwal Gelombang & Rincian Biaya
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            Semua rincian biaya dijelaskan secara transparan tanpa ada biaya tersembunyi selama masa belajar anak.
          </p>
        </div>

        {/* 3 Gelombang Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {waves.map((w, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-white border transition-all duration-500 flex flex-col justify-between ${
                w.isCurrent
                  ? "border-emerald-500 shadow-xl ring-2 ring-emerald-500/20 -translate-y-1"
                  : "border-slate-200/80 shadow-sm hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${w.statusColor}`}>
                    {w.status}
                  </span>
                  {w.isCurrent && (
                    <span className="text-xs font-bold text-emerald-600">Sedang Dibuka</span>
                  )}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {w.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-emerald-700 mb-6">
                  {w.period}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-600">
                <span className="text-slate-900 font-bold block mb-1">Keuntungan:</span>
                {w.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Transparansi Komponen Biaya Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-2 text-center">
            Apa Saja yang Termasuk dalam Biaya Masuk?
          </h3>
          <p className="text-sm text-slate-500 text-center mb-8">
            Semua fasilitas, seragam, dan buku sudah disiapkan sekolah agar orang tua tidak repot.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {feeComponents.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 mb-0.5">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pt-6 border-t border-slate-100">
            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
              Ingin minta rincian tabel biaya resmi dalam format PDF untuk jenjang anak Anda?
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Panitia%20PPDB,%20saya%20ingin%20meminta%20brosur%20dan%20rincian%20biaya%20resmi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              Minta Brosur Biaya via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}