"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface BeritaItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  imageUrl: string | null;
  createdAt: string;
}

export default function DaftarBeritaTerbaru() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(6);

  const [newsList, setNewsList] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["Semua", "Kegiatan", "Prestasi", "Informasi Umum", "Pengumuman Penting"];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/v1/berita?type=published');
        if (response.ok) {
          const data = await response.json();
          setNewsList(data);
        }
      } catch (error) {
        console.error("Gagal memuat berita:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = newsList.filter((item) => {
    const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedNews = filteredNews.slice(0, displayCount);

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
                onClick={() => {
                  setSelectedCategory(cat);
                  setDisplayCount(6); // Reset limit when filter changes
                }}
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
        {isLoading ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx} className="bg-[#121B2D] rounded-2xl border border-slate-800 overflow-hidden flex flex-col animate-pulse">
        <div className="relative h-52 w-full bg-slate-700" />
        <div className="p-6 flex-1 flex flex-col space-y-3">
          <div className="h-4 w-3/4 bg-slate-600 rounded" />
          <div className="h-3 w-1/2 bg-slate-600 rounded" />
          <div className="h-3 w-full bg-slate-600 rounded" />
          <div className="h-3 w-2/3 bg-slate-600 rounded" />
        </div>
      </div>
    ))}
  </div>
) : filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {displayedNews.map((news) => (
              <article
                key={news.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="relative w-full h-52 overflow-hidden bg-slate-100 flex items-center justify-center">
                  {news.imageUrl ? (
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <span className="text-slate-400">Tanpa Gambar</span>
                  )}
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
                      <span>{new Date(news.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
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
                      href={`/berita/${news.slug}`}
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
        {filteredNews.length > displayCount && (
          <div className="flex justify-center">
            <button 
              onClick={() => setDisplayCount(prev => prev + 6)}
              className="px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}

      </div>
    </section>
  );
}