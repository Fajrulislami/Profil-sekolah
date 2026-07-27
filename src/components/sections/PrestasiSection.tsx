"use client";

import { useEffect, useRef, useState } from "react";

export default function PrestasiSection() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prestasiData = [
    {
      id: 1,
      kategori: "Tingkat Nasional",
      title: "Medali Emas Olimpiade Sains Nasional (OSN) 2025",
      desc: "Diraih oleh tim sains sekolah atas inovasi penelitian energi terbarukan di kancah nasional.",
      image: "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?q=80&w=1000&auto=format&fit=crop",
      isHero: true,
    },
    {
      id: 2,
      kategori: "Olahraga",
      title: "Juara 1 Turnamen Basket Pelajar Provinsi",
      desc: "Tim basket putra berhasil merebut piala bergilir gubernur setelah tak terkalahkan dalam 8 pertandingan.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
      isHero: false,
    },
    {
      id: 3,
      kategori: "Seni & Budaya",
      title: "Terbaik 1 Festival Tari Tradisional Internasional",
      desc: "Mewakili Indonesia dan memukau juri mancanegara lewat koreografi kontemporer berbasis budaya lokal.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
      isHero: false,
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-slate-50 py-24 lg:py-32 relative overflow-hidden font-sans border-t border-slate-200/60">
      
      {/* Efek Pendar Latar Belakang (Emerald Ambient) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* HEADER: Terpusat di Tengah (Centered Header)              */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 flex flex-col items-center">
          
          {/* KAPSUL IDENTIK */}
          <div className={`w-max inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm mb-6 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
              Hall of Fame
            </span>
          </div>

          <h2 className={`text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.2] mb-6 transform transition-all duration-700 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Bukti Nyata Dedikasi & <br />
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
              Kualitas Pendidikan Kami.
            </span>
          </h2>
          
          <p className={`text-slate-600 text-base md:text-lg font-normal leading-relaxed transform transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Ratusan piala dan medali telah dibawa pulang oleh putra-putri terbaik kami. Ini adalah panggung penghormatan untuk keringat dan perjuangan mereka.
          </p>
        </div>

        {/* ========================================================= */}
        {/* BENTO GRID LAYOUT: 1 Besar (Kiri), 2 Kecil (Kanan)        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Kartu Hero (Besar - Memakan 2 Kolom dan 2 Baris di Desktop) */}
          <div 
            className={`lg:col-span-2 lg:row-span-2 rounded-[2rem] bg-white border border-slate-200 overflow-hidden relative group cursor-pointer transform transition-all duration-700 delay-400 ease-out hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/50
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            {/* Gambar Background */}
            <img 
              src={prestasiData[0].image} 
              alt={prestasiData[0].title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Overlay Gradasi agar teks terbaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            
            {/* Konten Teks Kartu Besar */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider w-fit mb-4 backdrop-blur-sm border border-emerald-500/30">
                ⭐ {prestasiData[0].kategori}
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3 group-hover:text-emerald-400 transition-colors duration-300 max-w-lg">
                {prestasiData[0].title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md font-normal">
                {prestasiData[0].desc}
              </p>
            </div>
          </div>

          {/* Kartu Kecil 1 (Kanan Atas) */}
          <div 
            className={`rounded-[2rem] bg-white border border-slate-200 overflow-hidden relative group cursor-pointer transform transition-all duration-700 delay-500 ease-out hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/40
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <img 
              src={prestasiData[1].image} 
              alt={prestasiData[1].title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-90"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                {prestasiData[1].kategori}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                {prestasiData[1].title}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-normal line-clamp-2">
                {prestasiData[1].desc}
              </p>
            </div>
          </div>

          {/* Kartu Kecil 2 (Kanan Bawah) */}
          <div 
            className={`rounded-[2rem] bg-white border border-slate-200 overflow-hidden relative group cursor-pointer transform transition-all duration-700 delay-600 ease-out hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/40
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <img 
              src={prestasiData[2].image} 
              alt={prestasiData[2].title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-90"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                {prestasiData[2].kategori}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                {prestasiData[2].title}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-normal line-clamp-2">
                {prestasiData[2].desc}
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* TOMBOL LIHAT SEMUA (Centered di Bawah Grid)                */}
        {/* ========================================================= */}
        <div 
          className={`mt-12 md:mt-16 text-center transform transition-all duration-700 delay-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a 
            href="/prestasi" 
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 group hover:-translate-y-0.5"
          >
            Eksplorasi Semua Prestasi
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}