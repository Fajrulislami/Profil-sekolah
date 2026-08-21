"use client";

import { useState } from "react";
import Link from "next/link";

interface BeritaItem {
  id: number;
  title: string;
  excerpt: string;
  category: "Kegiatan" | "Prestasi" | "Informasi" | "Pengumuman";
  date: string;
  author: string;
  imageUrl: string;
  readTime: string;
}

export default function DaftarBeritaTerbaru() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Semua", "Kegiatan", "Prestasi", "Informasi", "Pengumuman"];

  const newsList: BeritaItem[] = [
    {
      id: 4,
      title: "Kegiatan Pesantren Kilat Ramadhan 1447 H Berjalan Khidmat",
      excerpt: "Rangkaian kegiatan pembinaan karakter dan keislaman siswa melalui Pesantren Kilat resmi ditutup dengan penyaluran zakat dan santunan anak yatim.",
      category: "Kegiatan",
      date: "12 Agustus 2026",
      author: "Kesiswaan",
      readTime: "4 min baca",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2027/2028 Resmi Dibuka",
      excerpt: "Informasi lengkap jadwal, alur pendaftaran, dan persyaratan beasiswa untuk calon santri dan siswa baru semua jenjang pendidikan.",
      category: "Informasi",
      date: "05 Agustus 2026",
      author: "Panitia PPDB",
      readTime: "6 min baca",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Juara 1 Lomba Robotika Nasional di Institut Teknologi Bandung",
      excerpt: "Tim Robotika sekolah menciptakan inovasi robot pemilah sampah berbasis IoT dan berhasil mengalahkan puluhan finalis dari seluruh Indonesia.",
      category: "Prestasi",
      date: "28 Juli 2026",
      author: "Ekstrakurikuler",
      readTime: "5 min baca",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Pengumuman Pembagian Raport Semester Genap dan Libur Akhir Tahun",
      excerpt: "Pemberitahuan resmi mengenai jadwal pengambilan evaluasi belajar siswa serta himbauan kegiatan positif selama libur sekolah.",
      category: "Pengumuman",
      date: "20 Juli 2026",
      author: "Kurikulum",
      readTime: "3 min baca",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Kunjungan Edukasi dan Field Trip Budaya ke Museum Nasional",
      excerpt: "Siswa-siswi jenjang menengah melakukan studi lapangan untuk mempelajari artefak bersejarah dan memperdalam wawasan kebudayaan nusantara.",
      category: "Kegiatan",
      date: "14 Juli 2026",
      author: "Humas",
      readTime: "4 min baca",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "Pelatihan Digital Literacy & Cyber Safety untuk Orang Tua Siswa",
      excerpt: "Komite sekolah menyelenggarakan workshop pengawasan penggunaan gadget dan media sosial bagi anak di era serba digital.",
      category: "Informasi",
      date: "02 Juli 2026",
      author: "Komite Sekolah",
      readTime: "5 min baca",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  const filteredNews = newsList.filter((item) => {
    const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full py-24 bg-slate-50 font-sans border-t border-slate-200/80 overflow-hidden">
      {/* Pola background titik-titik halus */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-6 transition-all duration-500 hover:border-emerald-400">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
              Arsip & Berita Terbaru
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 pb-2">
              Jelajahi Berita & Informasi
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
            Temukan kabar terbaru, pengumuman resmi, dan rangkaian agenda kegiatan yang berlangsung di lingkungan sekolah kami.
          </p>
        </div>

        {/* BILAH FILTER & PENCARIAN YANG SUDAH DIPERBAIKI */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 bg-white p-3 sm:p-4 rounded-3xl shadow-sm border border-slate-200/80">
          
          {/* Filter Kategori */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none px-2 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-slate-100 hover:bg-slate-200/70 text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Input Pencarian (Bug Fix) */}
          <div className="relative w-full md:w-[320px] shrink-0 px-2 sm:px-0 pb-1 sm:pb-0">
            {/* Wadah ikon yang mengunci posisi vertikal dan horizontal */}
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            {/* Input dengan padding kiri (pl-10/pl-11) yang cukup agar teks tidak menabrak ikon */}
            <input
              type="text"
              placeholder="Cari berita atau pengumuman..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* DAFTAR KARTU BERITA */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-emerald-200 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    {news.category}
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{news.date}</span>
                    </div>
                    <span>•</span>
                    <span>{news.readTime}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 leading-snug mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                    {news.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      Oleh: {news.author}
                    </span>
                    <Link
                      href={`/berita/${news.id}`}
                      className="text-sm font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      Baca Artikel
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mb-16">
            <p className="text-lg font-bold text-slate-700 mb-2">Berita tidak ditemukan</p>
            <p className="text-sm text-slate-500">Coba kata kunci lain atau pilih kategori yang berbeda.</p>
          </div>
        )}

        {/* TOMBOL CTA */}
        <div className="flex justify-center">
          <button className="px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5">
            Tampilkan Lebih Banyak
          </button>
        </div>

      </div>
    </section>
  );
}