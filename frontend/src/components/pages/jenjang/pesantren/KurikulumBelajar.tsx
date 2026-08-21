"use client";

import React, { useState, useEffect, useRef } from "react";

// ============================================================================
// KOMPONEN PEMBUNGKUS ANIMASI SCROLL
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
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
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
// DATA KURIKULUM BELAJAR
// ============================================================================
const CURRICULUMS = [
  {
    id: "01",
    category: "Al-Qur'an & Sanad",
    title: "Kurikulum Tahfizh & Mutqin",
    shortDesc: "Struktur materi hafalan Al-Qur'an, perbaikan tajwid makhraj, dan sertifikasi sanad.",
    fullDesc: "Kurikulum komprehensif yang dirancang bertahap mulai dari tahsin makhraj, pembiasaan muraja'ah harian, hingga target mutqin 30 juz berijazah resmi.",
    outcomes: ["Target 30 Juz Mutqin", "Ujian Sanad Resmi", "Matrikulasi Tajwid & Nagham"],
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    category: "Dirasah Islamiyah",
    title: "Kurikulum Kitab Turats Klasik",
    shortDesc: "Penguasaan dasar ilmu syar'i, Nahwu-Shorof, Fiqih, dan Aqidah berbasis kitab kuning.",
    fullDesc: "Sistem materi keislaman terstruktur dari tingkat dasar (mubtadi) hingga lanjutan, membekali santri pemahaman literatur klasik dan tata bahasa Arab aktif.",
    outcomes: ["Tata Bahasa Nahwu & Shorof", "Pendalaman Fiqih Ibadah", "Kajian Aqidah Ahlussunnah"],
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    category: "Sains & Teknologi",
    title: "Kurikulum STEM & Digital",
    shortDesc: "Integrasi matematika, sains eksak, logika coding, dan literasi digitalIslami.",
    fullDesc: "Materi kurikulum sains terpadu yang memadukan standar nasional dengan aplikasi praktis seperti robotik, pemrograman dasar, dan pemecahan masalah.",
    outcomes: ["Sains Eksak & Matematika", "Basic Coding & Logic", "Literasi Digital Etis"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    category: "Adab & Karakter",
    title: "Kurikulum Adab & Leadership",
    shortDesc: "Pembentukan akhlak karimah, kemandirian santri, dan keahlian public speaking.",
    fullDesc: "Program materi karakter terapan untuk melatih kepemimpinan Rabbani, kedisiplinan ibadah harian, manajemen organisasi, serta retorika dakwah.",
    outcomes: ["Pembiasaan Adab Harian", "Public Speaking & Retorika", "Kemandirian & Keorganisasian"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
  },
];

// ============================================================================
// KOMPONEN UTAMA
// ============================================================================
export default function KurikulumBelajar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full min-h-screen bg-slate-50 text-slate-800 py-24 lg:py-32 overflow-hidden flex items-center">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[190px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* ================================================= */}
        {/* 1. HEADER SEKSYEN                                  */}
        {/* ================================================= */}
        <div className="flex flex-col items-start max-w-3xl mb-12 lg:mb-16">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300/80 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-5 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Struktur Pendidikan
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Kurikulum{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                Belajar Kami
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Rancangan materi terpadu yang memadukan kedalaman ilmu syar'i, hafalan Al-Qur'an, sains modern, dan pembiasaan adab secara sistematis.
            </p>
          </ScrollReveal>
        </div>

        {/* ================================================= */}
        {/* 2. LAYOUT EDITORIAL SHOWCASE                       */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* SISI KIRI: INDEX KURIKULUM */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {CURRICULUMS.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <ScrollReveal key={item.id} delay={index * 100}>
                  <div
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group cursor-pointer p-5 sm:p-6 rounded-2xl transition-all duration-300 relative border ${
                      isActive
                        ? "bg-white border-emerald-300 shadow-xl shadow-emerald-500/10"
                        : "bg-white/40 border-slate-200/70 hover:bg-white/80 hover:border-slate-300"
                    }`}
                  >
                    {/* Active Accent Bar */}
                    <div
                      className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full transition-all duration-300 ${
                        isActive ? "bg-emerald-600" : "bg-transparent"
                      }`}
                    ></div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase mb-1">
                          {item.category}
                        </span>
                        <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm mt-1.5 line-clamp-2 font-normal leading-relaxed">
                          {item.shortDesc}
                        </p>
                      </div>

                      <span className={`text-xl font-black transition-colors ${
                        isActive ? "text-emerald-600" : "text-slate-300 group-hover:text-slate-400"
                      }`}>
                        {item.id}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* SISI KANAN: FRAME SHOWCASE FOTO & DETAIL KURIKULUM */}
          <div className="lg:col-span-7 relative">
            <ScrollReveal delay={200} className="h-full">
              <div className="relative w-full h-[450px] sm:h-[500px] lg:h-full min-h-[480px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl shadow-slate-300/50 flex flex-col justify-end p-6 sm:p-10 group">
                
                {/* Visual Image Cross-Fade */}
                {CURRICULUMS.map((c, idx) => (
                  <div
                    key={c.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      idx === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  </div>
                ))}

                {/* Glassmorphic Panel Info Kurikulum */}
                <div className="relative z-10 flex flex-col items-start gap-4">
                  
                  {/* Category Pill */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      {CURRICULUMS[activeIndex].category}
                    </span>
                    <span className="text-slate-300 text-xs font-semibold">
                      Materi {CURRICULUMS[activeIndex].id}
                    </span>
                  </div>

                  {/* Title & Full Description */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 drop-shadow-md">
                      {CURRICULUMS[activeIndex].title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                      {CURRICULUMS[activeIndex].fullDesc}
                    </p>
                  </div>

                  {/* Target Pembelajaran / Outcome Tags */}
                  <div className="w-full pt-4 mt-2 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {CURRICULUMS[activeIndex].outcomes.map((target, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-emerald-200 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span className="truncate">{target}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}