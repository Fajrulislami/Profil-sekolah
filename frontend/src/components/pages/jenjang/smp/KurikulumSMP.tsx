"use client";

import { useState, useEffect, useRef } from "react";

// DATA KURIKULUM
const KURIKULUM_DATA = [
  {
    id: 1,
    title: "Kurikulum Merdeka Belajar",
    description: "Pendekatan pembelajaran yang berpusat pada siswa (student-centered). Memberikan ruang bagi siswa untuk mengeksplorasi minat dan bakat mereka melalui pembelajaran berbasis proyek (Project-Based Learning) yang relevan dengan isu-isu nyata di masyarakat.",
    imageText: "Ilustrasi Kurikulum Merdeka",
    tag: "Inovasi"
  },
  {
    id: 2,
    title: "Kurikulum Khas Kepesantrenan",
    description: "Selain kurikulum nasional, kami mengintegrasikan pendidikan Diniyah (Keislaman) yang mencakup Aqidah, Akhlaq, Fiqih, dan Sejarah Kebudayaan Islam. Bertujuan membentuk pondasi spiritual dan adab yang kuat pada diri siswa.",
    imageText: "Ilustrasi Pendidikan Karakter",
    tag: "Karakter"
  },
  {
    id: 3,
    title: "Penguatan Profil Pelajar Pancasila",
    description: "Fokus pada pengembangan karakter kebangsaan yang beriman, berkebinekaan global, bergotong royong, mandiri, bernalar kritis, dan kreatif. Diwujudkan dalam kegiatan intrakurikuler dan ekstrakurikuler terpadu.",
    imageText: "Ilustrasi Kolaborasi Siswa",
    tag: "Kepemimpinan"
  }
];

export default function KurikulumSMP() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const changeSlide = (direction: "next" | "prev") => {
    if (isFading) return; 
    
    setIsFading(true);
    setTimeout(() => {
      if (direction === "next") {
        setCurrentIndex((prev) => (prev === KURIKULUM_DATA.length - 1 ? 0 : prev + 1));
      } else {
        setCurrentIndex((prev) => (prev === 0 ? KURIKULUM_DATA.length - 1 : prev - 1));
      }
      setIsFading(false);
    }, 300); 
  };

  const currentData = KURIKULUM_DATA[currentIndex];
  const progressPercentage = ((currentIndex + 1) / KURIKULUM_DATA.length) * 100;

  return (
    <section className="relative w-full py-20 lg:py-32 bg-slate-50 text-slate-900 overflow-hidden" ref={sectionRef}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/50 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100/50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================= */}
        {/* BAGIAN ATAS: CAPSULE & JUDUL                      */}
        {/* ================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          
          <div 
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-sm w-max mx-auto mb-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wide uppercase">
              Sistem Pendidikan
            </span>
          </div>

          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight mb-6 transition-all duration-700 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500">
              Kurikulum
            </span>{" "}
            Pembelajaran
          </h2>

          <p 
            className={`text-slate-600 text-base sm:text-lg font-light max-w-2xl mx-auto transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Memadukan standar pendidikan nasional dengan nilai-nilai kepribadian untuk membentuk generasi yang cerdas dan berkarakter.
          </p>
        </div>

        {/* ================================================= */}
        {/* BAGIAN BAWAH: CREATIVE CARD SLIDER                */}
        {/* ================================================= */}
        <div 
          className={`relative transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Ambient Glow behind the card */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-[2.5rem] blur-2xl transform -skew-y-2 scale-105"></div>

          {/* Main Card (Glassmorphism Dark) */}
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden">
            
            {/* Subtle Grid overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
              
              {/* KIRI: ILUSTRASI KREATIF (Tinggi Terkunci Sama Persis) */}
              <div 
                className={`lg:col-span-5 w-full h-[240px] sm:h-[280px] lg:h-[380px] rounded-[2rem] rounded-tr-[5rem] rounded-bl-[4rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex flex-col items-center justify-center p-6 transition-all duration-500 shrink-0 ${
                  isFading ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
                }`}
              >
                {/* Visual Placeholder */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 mb-4 sm:mb-6 rounded-full bg-emerald-500/10 border-2 border-dashed border-emerald-500/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 opacity-80 blur-md"></div>
                </div>
                <p className="text-emerald-400 text-xs sm:text-sm font-semibold text-center uppercase tracking-widest">
                  {currentData.imageText}
                </p>
              </div>

              {/* KANAN: KONTEN TEKS & NAVIGASI (Tinggi Terkunci h-[380px]) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-[420px] sm:h-[360px] lg:h-[380px]">
                
                {/* Area Teks (Locked Height & Overflow Hidden untuk mencegah pergeseran) */}
                <div 
                  className={`h-[310px] sm:h-[260px] lg:h-[280px] flex flex-col justify-start overflow-hidden transition-all duration-300 ${
                    isFading ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                  }`}
                >
                  {/* Tag/Kategori */}
                  <div className="inline-block w-max px-3 py-1 mb-3 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium tracking-wider uppercase">
                    {currentData.tag}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                    {currentData.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                    {currentData.description}
                  </p>
                </div>

                {/* BAWAH: NAVIGASI & PROGRESS BAR (Tetap Diam di Dasar) */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-6 shrink-0 h-[60px]">
                  
                  {/* Progress Indicator */}
                  <div className="flex-1 max-w-[200px]">
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-1.5">
                      <span>0{currentIndex + 1}</span>
                      <span>0{KURIKULUM_DATA.length}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 ease-out rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Circular Navigation Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => changeSlide("prev")}
                      disabled={isFading}
                      aria-label="Previous Slide"
                      className="w-11 h-11 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => changeSlide("next")}
                      disabled={isFading}
                      aria-label="Next Slide"
                      className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}