"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface BeritaFeatured {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  imageUrl: string | null;
  createdAt: string;
}

export default function BeritaUnggulan() {
  const [featuredNews, setFeaturedNews] = useState<BeritaFeatured[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch('/api/v1/berita?type=featured');
        if (response.ok) {
          const data = await response.json();
          setFeaturedNews(data);
        }
      } catch (error) {
        console.error("Gagal memuat berita unggulan:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (isLoading) {
    return (
      <section className="relative w-full py-24 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-amber-500 font-bold">Memuat Berita Unggulan...</p>
        </div>
      </section>
    );
  }

  if (featuredNews.length === 0) {
    return (
      <section className="relative w-full py-24 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-slate-300 mb-4">Berita Unggulan</h2>
            <p className="text-slate-500">Belum ada berita unggulan saat ini.</p>
          </div>
        </div>
      </section>
    );
  }

  const mainNews = featuredNews[0];
  const sideNews = featuredNews.slice(1, 4); // Ambil maksimal 3 untuk di samping (Total 4)

  return (
    <section className="relative w-full py-24 bg-slate-950 font-sans border-t border-slate-900 overflow-hidden">
      
      {/* Efek Cahaya Latar Belakang Halus (Kreatif & Tidak Mengganggu) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Sesuai Aturan Sistem Desain) */}
        <div className="flex flex-col items-start lg:items-center lg:text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-amber-400/30 shadow-sm w-max mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider uppercase">
              Sorotan Utama
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 pb-2">
              Berita Unggulan
            </span>
          </h2>
        </div>

        {/* 
          BENTO GRID LAYOUT 
          Menggunakan tinggi statis (lg:h-[640px]) di desktop agar kiri dan kanan sejajar sempurna.
        */}
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[640px]">
          
          {/* KIRI: Berita Utama (Hero Card) */}
          {mainNews && (
            <div className="w-full lg:w-[60%] h-[500px] lg:h-full relative group rounded-3xl overflow-hidden shadow-2xl">
              {/* Gambar Background */}
              {mainNews.imageUrl ? (
                <img 
                  src={mainNews.imageUrl} 
                  alt={mainNews.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-slate-800 flex items-center justify-center">
                  <span className="text-slate-500 font-medium">Gambar Tidak Ditemukan</span>
                </div>
              )}
              
              {/* Overlay Gradasi Ekstra Gelap (Tinggi dari bawah ke atas) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />
              
              {/* Konten Melayang di Bawah */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
                <span className="w-max px-3 py-1.5 mb-5 rounded-lg bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-widest shadow-lg">
                  {mainNews.category}
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white leading-tight mb-4 group-hover:text-amber-300 transition-colors duration-300">
                  {mainNews.title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-2 max-w-xl mb-8">
                  {mainNews.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-amber-400/80 font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(mainNews.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  
                  {/* CTA Tanpa Panah Sesuai Aturan */}
                  <Link 
                    href={`/berita/${mainNews.slug}`}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:-translate-y-1"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* KANAN: Berita Pendukung (Seamless Stack) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 h-[600px] lg:h-full">
            {sideNews.map((news) => (
              <div 
                key={news.id} 
                // flex-1 adalah kunci agar kartu ini meregang mengisi ruang vertikal yang kosong
                className="flex-1 group flex flex-row rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-800/60 hover:border-amber-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Gambar (Rasio Kiri) */}
                <div className="w-2/5 sm:w-[45%] h-full relative overflow-hidden shrink-0 bg-slate-800">
                  {news.imageUrl ? (
                    <img 
                      src={news.imageUrl} 
                      alt={news.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-center p-2">
                      <span className="text-slate-500 text-xs font-medium leading-tight">Gambar Tidak Ditemukan</span>
                    </div>
                  )}
                  {/* Overlay tipis pada gambar */}
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Teks (Rasio Kanan) */}
                <div className="w-3/5 sm:w-[55%] p-5 sm:p-6 flex flex-col justify-center">
                  <span className="w-max px-2.5 py-1 mb-4 rounded-md bg-slate-950/80 text-amber-500 text-[10px] sm:text-xs font-black uppercase tracking-widest border border-amber-500/20">
                    {news.category}
                  </span>
                  
                  <h4 className="text-lg sm:text-xl font-black text-white leading-snug mb-4 group-hover:text-amber-400 transition-colors duration-300 line-clamp-3">
                    {news.title}
                  </h4>
                  
                  {/* CTA Text Only Sesuai Aturan */}
                  <div className="mt-auto flex items-center justify-between">
                     <span className="text-xs text-slate-400 font-medium">{new Date(news.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                     <Link 
                        href={`/berita/${news.slug}`}
                        className="text-sm font-bold text-amber-500 hover:text-amber-300 transition-colors"
                      >
                        Baca Artikel
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}