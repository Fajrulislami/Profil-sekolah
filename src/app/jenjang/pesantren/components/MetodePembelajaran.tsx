"use client";

import React, { useState, useEffect, useRef } from "react";

// ============================================================================
// KOMPONEN ANIMASI SCROLL REVEAL
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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ============================================================================
// DATA METODE PEMBELAJARAN
// ============================================================================
const LEARNING_METHODS = [
  {
    num: "1",
    category: "Al-Qur'an & Sanad",
    title: "Talaqqi & Musyafahah",
    desc: "Setoran hafalan Al-Qur'an tatap muka dengan pengajar berijazah sanad. Menekankan ketepatan artikulasi makhraj dan hukum tajwid.",
    focus: "Akurasi Makhraj & Tajwid",
  },
  {
    num: "2",
    category: "Dirasah Islamiyah",
    title: "Sorogan & Bandongan",
    desc: "Pendalaman literatur klasik Kitab Turats. Santri menelaah tata bahasa Arab, Nahwu-Shorof, dan struktur fiqih secara analitis.",
    focus: "Literasi Kitab Gundul & Fiqih",
  },
  {
    num: "3",
    category: "Sains & Teknologi",
    title: "Project-Based Learning",
    desc: "Penerapan teori sains dan logika pemrograman dalam proyek nyata. Santri dilatih riset mandiri dan pemecahan masalah.",
    focus: "Logika Pemrograman & Eksperimen",
  },
  {
    num: "4",
    category: "Adab & Karakter",
    title: "Biah Salihah & Immersion",
    desc: "Internalisasi adab dan kepemimpinan melalui pembiasaan 24 jam di pesantren, menekankan keteladanan harian dan kemandirian.",
    focus: "Karakter & Kepemimpinan",
  },
];

// ============================================================================
// KOMPONEN UTAMA
// ============================================================================
export default function MetodePembelajaran() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#0B1120] text-slate-100 py-16 sm:py-20 px-6 sm:px-8 lg:px-12 selection:bg-yellow-400 selection:text-slate-950 overflow-hidden">
      
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #334155 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================================================= */}
        {/* HEADER SECTION                                    */}
        {/* ================================================= */}
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/30 shadow-sm w-max mx-auto mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Pendekatan Edukasi
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Metode{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Pembelajaran
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Sistem transmisi keilmuan holistik yang memadukan keotentikan sanad klasik dengan efektivitas riset modern.
            </p>
          </ScrollReveal>
        
        {/* ================================================= */}
        {/* EDITORIAL GRID 2x2 (LEBIH HEMAT RUANG VERTIKAL)   */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-800/80">
          {LEARNING_METHODS.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <ScrollReveal key={item.num} delay={index * 100}>
                <div
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="group border-r border-b border-slate-800/80 p-6 sm:p-8 transition-colors duration-300 hover:bg-slate-900/40 min-h-[220px] flex flex-col justify-between"
                >
                  <div>
                    {/* Header Item: Angka Blocky + Kategori */}
                    <div className="flex items-baseline justify-between mb-4">
                      <span
                        className={`font-mono font-black text-4xl sm:text-5xl leading-none tracking-tighter transition-colors duration-300 select-none ${
                          isActive
                            ? "text-yellow-400"
                            : "text-slate-600 group-hover:text-slate-400"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase group-hover:text-amber-400 transition-colors">
                        {item.category}
                      </span>
                    </div>

                    {/* Judul & Deskripsi */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Detail Fokus Ringkas */}
                  <div className="mt-6 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 uppercase tracking-wider font-semibold">Fokus:</span>
                    <span className="text-slate-300 font-medium group-hover:text-amber-300 transition-colors">
                      {item.focus}
                    </span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}