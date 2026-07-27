"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// KATEGORI FASILITAS
const CATEGORIES = ["Semua", "Akademik & Tech", "Olahraga & Seni", "Area Publik"];

// DATA FASILITAS (BISA DITAMBAH SEBANYAK MUNGKIN TANPA MERUSAK TINGGI HALAMAN)
const FASILITAS_DATA = [
  {
    id: 1,
    title: "Smart Classroom Interaktif",
    category: "Akademik & Tech",
    description: "Ruang kelas modern ber-AC dilengkapi Interactive Display Board 75\" dan meja fleksibel untuk diskusi kelompok.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    specs: ["Interactive TV 75\"", "AC & Wi-Fi 6", "Kapasitas 28 Siswa"]
  },
  {
    id: 2,
    title: "Laboratorium Sains & Robotik",
    category: "Akademik & Tech",
    description: "Fasilitas integrasi praktikum IPA dan kit robotik dengan peralatan standar keamanan tinggi.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
    specs: ["Kit Robotik", "Peralatan Safety", "30 Set Alat IPA"]
  },
  {
    id: 3,
    title: "Perpustakaan & Learning Hub",
    category: "Akademik & Tech",
    description: "Ruang baca tenang berkonsep lesehan modern dengan koleksi fisik & e-book interaktif.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    specs: ["Akses E-Book", "Quiet Zone", "Corner Lesehan"]
  },
  {
    id: 4,
    title: "Lapangan Olahraga Multi-fungsi",
    category: "Olahraga & Seni",
    description: "Lapangan indoor berlantai interlock untuk kegiatan Basket, Futsal, dan Bulutangkis.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    specs: ["Lantai Interlock", "Tribun Mini", "LED Stadium Lighting"]
  },
  {
    id: 5,
    title: "Studio Musik & Seni Pertunjukan",
    category: "Olahraga & Seni",
    description: "Ruang kedap suara berdesain akustik khusus yang dilengkapi instrumen band modern.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    specs: ["Kedap Suara", "Instrumen Lengkap", "Audio Mixer"]
  },
  {
    id: 6,
    title: "Kantin Sehat & Green Lounge",
    category: "Area Publik",
    description: "Area istirahat terbuka hijau dengan katering higienis dan sistem pembayaran cashless.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    specs: ["Menu Nutrisi Teruji", "Cashless Pay", "Taman Terbuka"]
  }
];

export default function FasilitasSMP() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter Data
  const filteredFasilitas = activeCategory === "Semua" 
    ? FASILITAS_DATA 
    : FASILITAS_DATA.filter(f => f.category === activeCategory);

  // Fungsi Scroll Kiri / Kanan
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380; // Jarak geser per klik (sesuai lebar kartu)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-50 text-slate-800 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================= */}
        {/* HEADER SECTION                                    */}
        {/* ================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Fasilitas Sekolah
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Infrastruktur Belajar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600">
                Modern & Lengkap.
              </span>
            </h2>
          </div>

          {/* NAVIGASI PANAH (KIRI & KANAN) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll Kiri"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll Kanan"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>


        {/* ================================================= */}
        {/* TAB FILTER KATEGORI                               */}
        {/* ================================================= */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                // Reset scroll posisi ke paling awal saat ganti kategori
                if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
              }}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "text-white shadow-md shadow-emerald-600/20" 
                  : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeFasilitasTabSlider"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>


        {/* ================================================= */}
        {/* HORIZONTAL CAROUSEL CONTAINER (HORIZONTAL SNAP)   */}
        {/* ================================================= */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 -mx-4 px-4 sm:-mx-8 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <AnimatePresence mode="popLayout">
            {filteredFasilitas.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="snap-start shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Foto Fasilitas */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-900/80 text-emerald-300 border border-slate-700/60 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Konten & Deskripsi */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Fitur Spesifikasi di Bagian Bawah Card */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80"
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}