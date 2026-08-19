"use client";

import React, { useState, useEffect, useRef } from "react";

export default function HeroPesantren() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0: Tahfiz, 1: Sains, 2: Karakter
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handler Efek Parallax Mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current) return;
    const { left, top, width, height } = visualRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Data Interaktif Foto & Program
  const FEATURES = [
    {
      id: 0,
      title: "Tahfiz 30 Juz",
      subtitle: "Metode Mutqin & Sanad",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop",
      badgeBg: "bg-emerald-50 text-emerald-600 ring-emerald-500/30",
      activeBorder: "border-emerald-500 shadow-emerald-500/15",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Sains & Bahasa",
      subtitle: "Kurikulum STEM & Bilingual",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
      badgeBg: "bg-teal-50 text-teal-600 ring-teal-500/30",
      activeBorder: "border-teal-500 shadow-teal-500/15",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.143-5.714L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Pendidikan Karakter",
      subtitle: "Kedisiplinan & Kemandirian",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      badgeBg: "bg-green-50 text-green-600 ring-green-500/30",
      activeBorder: "border-green-500 shadow-green-500/15",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full min-h-[85vh] bg-slate-50 text-slate-800 overflow-hidden flex items-center py-16 lg:py-24">
      
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

      {/* Dynamic Ambient Blur */}
      <div 
        className={`absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
          activeTab === 0 ? "bg-emerald-200/40" : activeTab === 1 ? "bg-teal-200/40" : "bg-green-200/40"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================================================= */}
          {/* SISI KIRI: TEKS & CALL TO ACTION                  */}
          {/* ================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Badge Kategori */}
            <div 
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm transition-all duration-1000 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Pesantren Terpadu & Boarding School
            </div>

            {/* Headline Utama dengan Gradient Primary */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 transition-all duration-1000 delay-150 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Mendidik Generasi Santri{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600">
                Berilmu & Beradab
              </span>
            </h1>

            {/* Deskripsi Singkat */}
            <p 
              className={`text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-2xl transition-all duration-1000 delay-300 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Memadukan kedalaman Al-Qur'an (Tahfiz 30 Juz), pembentukan adab, serta penguasaan sains dan teknologi modern dalam lingkungan belajar yang aman dan terstruktur.
            </p>

            {/* Tombol CTA (Hover Kurikulum Disesuaikan) */}
            <div 
              className={`w-full flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-base shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-1">
                Daftar Sekarang
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-2xl font-bold text-base shadow-sm border border-slate-200 hover:border-emerald-300 transition-all">
                Lihat Kurikulum
              </button>
            </div>

          </div>


          {/* ================================================= */}
          {/* SISI KANAN: INTERACTIVE VISUAL & PARALLAX PILLS   */}
          {/* ================================================= */}
          <div 
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`lg:col-span-5 relative flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-none h-[430px] sm:h-[500px] flex items-center justify-center">
              
              {/* Frame Foto Utama dengan Parallax Shift */}
              <div 
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/80 ring-1 ring-slate-900/10 transition-transform duration-200 ease-out"
                style={{
                  transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`
                }}
              >
                {FEATURES.map((item, index) => (
                  <img 
                    key={item.id}
                    src={item.image} 
                    alt={item.title} 
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                      activeTab === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
              </div>


              {/* ----------------------------------------------- */}
              {/* INTERACTIVE PILL 1: TAHFIZ 30 JUZ               */}
              {/* ----------------------------------------------- */}
              <div 
                onMouseEnter={() => setActiveTab(0)}
                className={`absolute top-8 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md border rounded-full py-2.5 px-4 flex items-center gap-3 shadow-xl transition-all duration-300 cursor-pointer ${
                  activeTab === 0 ? FEATURES[0].activeBorder : "border-slate-200/90 hover:border-slate-300"
                }`}
                style={{
                  transform: `translate3d(${-mousePos.x * 18}px, ${-mousePos.y * 18}px, 0)`
                }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ring-1 ${FEATURES[0].badgeBg}`}>
                  {FEATURES[0].icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 tracking-wide">
                    {FEATURES[0].title}
                  </span>
                  {activeTab === 0 && (
                    <span className="text-[10px] text-emerald-600 font-semibold animate-fadeIn">
                      {FEATURES[0].subtitle}
                    </span>
                  )}
                </div>
              </div>


              {/* ----------------------------------------------- */}
              {/* INTERACTIVE PILL 2: SAINS & BAHASA              */}
              {/* ----------------------------------------------- */}
              <div 
                onMouseEnter={() => setActiveTab(1)}
                className={`absolute top-1/2 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border rounded-full py-2.5 px-4 flex items-center gap-3 shadow-xl transition-all duration-300 cursor-pointer ${
                  activeTab === 1 ? FEATURES[1].activeBorder : "border-slate-200/90 hover:border-slate-300"
                }`}
                style={{
                  transform: `translate3d(${-mousePos.x * 24}px, ${-mousePos.y * 24}px, 0)`
                }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ring-1 ${FEATURES[1].badgeBg}`}>
                  {FEATURES[1].icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 tracking-wide">
                    {FEATURES[1].title}
                  </span>
                  {activeTab === 1 && (
                    <span className="text-[10px] text-teal-600 font-semibold animate-fadeIn">
                      {FEATURES[1].subtitle}
                    </span>
                  )}
                </div>
              </div>


              {/* ----------------------------------------------- */}
              {/* INTERACTIVE PILL 3: PENDIDIKAN KARAKTER        */}
              {/* ----------------------------------------------- */}
              <div 
                onMouseEnter={() => setActiveTab(2)}
                className={`absolute bottom-8 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md border rounded-full py-2.5 px-4 flex items-center gap-3 shadow-xl transition-all duration-300 cursor-pointer ${
                  activeTab === 2 ? FEATURES[2].activeBorder : "border-slate-200/90 hover:border-slate-300"
                }`}
                style={{
                  transform: `translate3d(${-mousePos.x * 20}px, ${-mousePos.y * 20}px, 0)`
                }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ring-1 ${FEATURES[2].badgeBg}`}>
                  {FEATURES[2].icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 tracking-wide">
                    {FEATURES[2].title}
                  </span>
                  {activeTab === 2 && (
                    <span className="text-[10px] text-green-600 font-semibold animate-fadeIn">
                      {FEATURES[2].subtitle}
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}