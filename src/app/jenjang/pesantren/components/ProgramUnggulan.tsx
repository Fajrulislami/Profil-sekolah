"use client";

import React, { useState, useEffect, useRef } from "react";

// ============================================================================
// KOMPONEN PEMBUNGKUS ANIMASI SCROLL (Scroll-Reveal Naik ke Atas)
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
// DATA PROGRAM UNGGULAN PESANTREN
// ============================================================================
const PROGRAMS = [
  {
    id: "01",
    category: "Tahfizh & Al-Qur'an",
    title: "Program Tahfizh 30 Juz & Sanad",
    desc: "Program intensif penghafalan Al-Qur'an dengan target mutqin 30 juz, disertai bimbingan tajwid makhraj presisi dan pengambilan sanad bacaan resmi.",
    highlights: [
      "Target mutqin 30 Juz dalam 2-3 tahun",
      "Bimbingan setoran harian 1-on-1 bersama Muqri",
      "Ujian Sanad & Ijazah Al-Qur'an resmi",
    ],
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    category: "Dirasah Islamiyah",
    title: "Kajian Kitab Turats & Bahasa Arab",
    desc: "Pendalaman ilmu syar'i secara mendalam melalui kitab-kitab turats klasik (Kitab Kuning) dipadukan dengan metode penuturan bahasa Arab aktif harian.",
    highlights: [
      "Penguasaan tata bahasa Nahwu & Shorof",
      "Kajian Fiqih, Aqidah, dan Hadits Tematik",
      "Penerapan Bi'ah Lughawiyah (Lingkungan Arab active)",
    ],
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    category: "Sains & Teknologi",
    title: "Sains Rabbani & Programming",
    desc: "Integrasi pengetahuan sains modern dan keterampilan teknologi digital seperti coding, robotik, serta analisis data berbasis adab dan etika Islam.",
    highlights: [
      "Laboratorium Komputer & Coding Bootcamps",
      "Projek Aplikasi & Solusi Digital Berkelanjutan",
      "Kompetisi Olimipade Sains Terpadu",
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    category: "Kepemimpinan & Kemandirian",
    title: "Leadership & Entrepreneurship",
    desc: "Pelatihan kepemimpinan organisasi, kemampuan retorika dakwah (public speaking), serta praktik kewirausahaan santri untuk membentuk pribadi mandiri.",
    highlights: [
      "Kajian Public Speaking & Retorika Dakwah",
      "Manajemen Organisasi Santri (OSIS/IPNU)",
      "Inkubasi Bisnis & Ekosistem Usaha Mandiri",
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
  },
];

// ============================================================================
// KOMPONEN UTAMA
// ============================================================================
export default function ProgramUnggulan() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PROGRAMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PROGRAMS.length) % PROGRAMS.length);
  };

  const currentProgram = PROGRAMS[activeIndex];

  return (
    <section className="relative w-full min-h-screen bg-[#0B1120] text-slate-100 py-24 lg:py-32 overflow-hidden">
      
      {/* Background Decorator: Ambient Glow Emas/Kuning & Pattern Grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* ================================================= */}
        {/* 1. HEADER (Judul + Deskripsi dengan Accent Kuning) */}
        {/* ================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Kurikulum Unggulan
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-6">
              Program Unggulan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
                Pesantren Kami
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Program-program berkualitas yang dirancang secara terpadu untuk membentuk santri beradab, berakhlak mulia, serta menguasai ilmu keislaman dan sains modern.
            </p>
          </ScrollReveal>
        </div>


        {/* ================================================= */}
        {/* 2. DUA KARTU UTAMA (Kiri: Foto | Kanan: Isi Bening)*/}
        {/* ================================================= */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* ============================================== */}
            {/* CARD SEBELAH KIRI: FOTO (GELAP)                 */}
            {/* ============================================== */}
            <div className="lg:col-span-6 relative group rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-slate-900 border border-slate-800 shadow-2xl shadow-black/60 flex flex-col justify-end p-8 sm:p-10">
              
              {/* Gambar Background dengan Transisi Cross-Fade Smooth */}
              {PROGRAMS.map((prog, idx) => (
                <div
                  key={prog.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === activeIndex ? "opacity-100 scale-105" : "opacity-0 scale-100 pointer-events-none"
                  }`}
                  style={{ transitionProperty: "opacity, transform" }}
                >
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
                  />
                  {/* Gradient Overlay Gelap */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"></div>
                </div>
              ))}

              {/* Badges & Overlay Text di Atas Foto */}
              <div className="relative z-10 flex flex-col items-start gap-3">
                <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  {currentProgram.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {currentProgram.title}
                </h3>
              </div>

              {/* Accent Watermark Angle */}
              <span className="absolute top-6 right-8 text-7xl font-black text-white/10 select-none pointer-events-none">
                {currentProgram.id}
              </span>
            </div>


            {/* ============================================== */}
            {/* CARD SEBELAH KANAN: ISI (BENING / GLASS)        */}
            {/* ============================================== */}
            <div className="lg:col-span-6 relative rounded-3xl bg-slate-800/40 border border-slate-700/60 shadow-2xl shadow-black/40 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"></div>

              {/* Header Card Bening: Navigasi & Tag Indicator */}
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-700/60">
                  <span className="text-xs font-extrabold text-amber-400 tracking-widest uppercase">
                    PROGRAM {currentProgram.id} / 0{PROGRAMS.length}
                  </span>

                  {/* Tombol Panah Geser (Carousel Controls) */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-400/60 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center group active:scale-95"
                      aria-label="Program Sebelumnya"
                    >
                      <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group active:scale-95"
                      aria-label="Program Selanjutnya"
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Deskripsi & Detail Program yang Sedang Aktif */}
                <div className="transition-all duration-500 ease-out">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    {currentProgram.title}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                    {currentProgram.desc}
                  </p>

                  {/* Bullet Points Highlight */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                      Keunggulan Utama:
                    </span>
                    {currentProgram.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Pagination Indicators (Interactive Dots/Numbers) */}
              <div className="pt-6 border-t border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {PROGRAMS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex
                          ? "w-8 bg-amber-400"
                          : "w-2.5 bg-slate-700 hover:bg-slate-600"
                      }`}
                      aria-label={`Ke Program ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Geser untuk melihat program lainnya
                </span>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}