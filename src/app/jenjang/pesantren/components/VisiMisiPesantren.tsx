"use client";

import React, { useState, useEffect, useRef } from "react";

// ============================================================================
// KOMPONEN PEMBUNGKUS ANIMASI SCROLL (Mendeteksi setiap elemen secara mandiri)
// ============================================================================
function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.15, // Memicu ketika 15% elemen masuk layar
        rootMargin: "0px 0px -40px 0px" // Jarak offset scroll
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ============================================================================
// KOMPONEN UTAMA VISI & MISI
// ============================================================================
export default function VisiMisiPesantren() {
  const MISI_LIST = [
    {
      no: "01",
      title: "Tahfizh & Sanad Al-Qur'an",
      desc: "Menyelenggarakan pembelajaran Al-Qur'an mutqin dan bersanad dengan metode terstruktur dan terukur.",
      tag: "Kurikulum Utama",
    },
    {
      no: "02",
      title: "Integrasi Sains & Bahasa",
      desc: "Mengintegrasikan kedalaman dirasah islamiyah dengan sains modern dan bahasa asing (Arab & Inggris).",
      tag: "Akademik",
    },
    {
      no: "03",
      title: "Pembentukan Adab & Karakter",
      desc: "Membina akhlak karimah, kepemimpinan mandiri, serta jiwa kewirausahaan berbasis nilai Rabbani.",
      tag: "Karakter",
    },
    {
      no: "04",
      title: "Ekosistem Belajar Modern",
      desc: "Menciptakan lingkungan pesantren yang asri, disiplin, aman, dan adaptif terhadap teknologi digital.",
      tag: "Lingkungan",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-slate-50 text-slate-800 py-24 lg:py-32 overflow-hidden">
      
      {/* Background Decorator: Ambient Light & Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* ================================================= */}
        {/* 1. HEADER (Latar Belakang Slate Terang + Title)   */}
        {/* ================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Arah & Pedoman Utama
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
              Visi & Misi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                Pesantren Kami
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Komitmen berkelanjutan kami dalam membentuk generasi Rabbani yang unggul secara intelektual, adab, dan spiritual.
            </p>
          </ScrollReveal>
        </div>


        {/* ================================================= */}
        {/* 2. VISI HERO CARD (Interaktif & Elegan)            */}
        {/* ================================================= */}
        <ScrollReveal delay={100} className="mb-10">
          <div className="group relative w-full p-8 sm:p-12 rounded-3xl bg-white/80 border border-slate-200/90 shadow-xl shadow-slate-200/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-400 overflow-hidden">
            
            {/* Top Hover Progress Accent */}
            <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>

            {/* Background Watermark Icon / Text */}
            <span className="absolute right-6 -bottom-6 text-9xl font-black text-slate-100 select-none pointer-events-none group-hover:text-emerald-50/60 transition-colors duration-500">
              VISI
            </span>

            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  Landasan Utama
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug tracking-tight mb-4 group-hover:text-emerald-950 transition-colors">
                "Menjadi lembaga pendidikan Islam unggulan yang melahirkan generasi huffaz Al-Qur'an, berakhlak mulia, berwawasan global, serta menguasai sains dan teknologi."
              </h3>
            </div>
          </div>
        </ScrollReveal>


        {/* ================================================= */}
        {/* 3. MISI BENTO GRID (2x2 Layout + Staggered Reveal) */}
        {/* ================================================= */}
        <div className="w-full">
          
          <ScrollReveal delay={0}>
            <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal-500 inline-block"></span>
                Empat Pilar Misi Strategis
              </h3>
              <span className="text-xs font-semibold text-slate-500">01 — 04</span>
            </div>
          </ScrollReveal>

          {/* Grid Layout 2 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MISI_LIST.map((misi, index) => {
              // Delay bertahap jika kartu masuk layar bersamaan
              const staggerDelay = (index % 2) * 150;

              return (
                <ScrollReveal key={misi.no} delay={staggerDelay}>
                  <div className="group relative h-full p-8 rounded-2xl bg-white/80 border border-slate-200/90 shadow-md shadow-slate-200/40 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-300 hover:bg-white flex flex-col justify-between">
                    
                    <div>
                      {/* Top Card Info: Badge & Angka */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                          {misi.tag}
                        </span>

                        {/* Angka dengan Animasi Fill saat Hover */}
                        <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-600 group-hover:scale-110 transition-all duration-300">
                          {misi.no}
                        </span>
                      </div>

                      {/* Judul Misi */}
                      <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                        {misi.title}
                      </h4>

                      {/* Deskripsi Misi */}
                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {misi.desc}
                      </p>
                    </div>

                    {/* Bottom Indicator Bar */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                      <span>Misi Operasional</span>
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}