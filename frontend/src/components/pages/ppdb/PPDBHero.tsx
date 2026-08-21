"use client";

import Link from "next/link";

export default function PPDBHero() {
  const quickStats = [
    { label: "Gelombang Aktif", value: "Gelombang 2" },
    { label: "Tahun Ajaran", value: "2027 / 2028" },
    { label: "Sisa Kuota", value: "35 Kursi" },
    { label: "Jalur Tersedia", value: "4 Pilihan" },
  ];

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-44 lg:pb-28 bg-white overflow-hidden font-sans">
      
      {/* Animasi Background Blur Bergerak */}
      <div className="absolute top-0 left-[-5%] w-[600px] h-[600px] rounded-[40%] bg-gradient-to-br from-emerald-200/40 to-transparent blur-[100px] animate-[spin_20s_linear_infinite] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[650px] h-[650px] rounded-[40%] bg-gradient-to-tr from-teal-200/30 to-transparent blur-[120px] animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />

      {/* Pola Titik Halus (Grid Pattern) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-60 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge Kapsul Putih dengan Border Hijau */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-6 transition-all duration-500 hover:border-emerald-400">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
            Penerimaan Peserta Didik Baru 2027/2028
          </span>
        </div>

        {/* Judul Utama Gradien Hijau-Teal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6 max-w-5xl mx-auto">
          Mulai Perjalanan Prestasi & Karakter Islami di <br />
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 pb-2">
            Sekolah Madani & Pesantren Rabbani
          </span>
        </h1>

        {/* Deskripsi */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
          Bergabunglah dalam lingkungan pendidikan holistik yang memadukan keunggulan sains, kurikulum berbasis adab, dan tahfidz Al-Qur'an untuk seluruh jenjang (TK, SD, SMP, & Pesantren).
        </p>

        {/* Tombol Aksi Cepat (CTA Tanpa Panah) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#formulir"
            className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Daftar Formulir Online
          </a>
          <a
            href="#jadwal"
            className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            Lihat Rincian Biaya & Jadwal
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          {quickStats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-3 bg-white rounded-2xl border border-slate-100">
              <span className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wider">{item.label}</span>
              <span className="text-lg sm:text-xl font-black text-emerald-700">{item.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
