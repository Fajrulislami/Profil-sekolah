"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// DATA KEGIATAN BARIS 1 (BERGERAK KE KANAN)
const KEGIATAN_BARIS_1 = [
  {
    id: 1,
    title: "Eksperimen Sains & Robotik",
    category: "Akademik",
    type: "landscape", // 16:9
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Kunjungan Edukasi Museum",
    category: "Outing",
    type: "portrait", // 3:4
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Class Meeting & Olahraga",
    category: "Karakter",
    type: "landscape",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Latihan Kepemimpinan",
    category: "Soft Skill",
    type: "portrait",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Pentas Seni & Budaya",
    category: "Kreativitas",
    type: "landscape",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  }
];

// DATA KEGIATAN BARIS 2 (BERGERAK KE KIRI)
const KEGIATAN_BARIS_2 = [
  {
    id: 6,
    title: "Diskusi & Presentasi Kelompok",
    category: "Peer Learning",
    type: "portrait",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Workshop Digital & Coding",
    category: "Teknologi",
    type: "landscape",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Kegiatan Kepramukaan",
    category: "Karakter",
    type: "portrait",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Kompetisi Matematika",
    category: "Prestasi",
    type: "landscape",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Proyek Bakti Sosial",
    category: "Sosial",
    type: "landscape",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop"
  }
];

// Duplikasi data agar animasi berjalan continuous / seamless
const ROW_1_DUPLICATED = [...KEGIATAN_BARIS_1, ...KEGIATAN_BARIS_1];
const ROW_2_DUPLICATED = [...KEGIATAN_BARIS_2, ...KEGIATAN_BARIS_2];

export default function KegiatanSMP() {
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-50 text-slate-800 overflow-hidden">
      
      {/* Background Subtle Ambient Glow (Nuansa Hijau Soft) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Fade Gradient di Sisi Kiri & Kanan Marquee (Menyatu dengan bg-slate-50) */}
      <div className="absolute top-0 bottom-0 left-0 w-20 lg:w-36 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 lg:w-36 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 lg:mb-16">
        
        {/* ================================================= */}
        {/* HEADER SECTION (SLATE-50 & GRADIEN HIJAU PRIMARY) */}
        {/* ================================================= */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge Atas */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="text-xs sm:text-sm font-bold text-emerald-800 tracking-wide uppercase">
              Kegiatan & Ekstrakurikuler
            </span>
          </div>

          {/* Judul Utama dengan Gradien Hijau Primary */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-5">
            Ragam Kegiatan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600">
              Interaktif & Seru
            </span>
          </h2>

          {/* Deskripsi */}
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Menyajikan pengalaman belajar seimbang di dalam maupun di luar kelas untuk mendukung potensi akademis dan pembentukan karakter setiap siswa.
          </p>
        </motion.div>

      </div>


      {/* ================================================= */}
      {/* MARQUEE CONTAINER                                 */}
      {/* ================================================= */}
      <div className="flex flex-col gap-6 lg:gap-8 relative z-10">
        
        {/* BARIS 1: BERGERAK KE KANAN */}
        <div 
          className="flex overflow-hidden select-none"
          onMouseEnter={() => setIsHoveredRow1(true)}
          onMouseLeave={() => setIsHoveredRow1(false)}
        >
          <motion.div 
            className="flex gap-6 shrink-0 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
            style={{
              animationPlayState: isHoveredRow1 ? "paused" : "running"
            }}
          >
            {ROW_1_DUPLICATED.map((item, idx) => (
              <div 
                key={`r1-${idx}`}
                className={`relative group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 shrink-0 ${
                  item.type === "portrait" 
                    ? "w-56 sm:w-64 h-72 sm:h-80"   /* Ukuran Portrait */
                    : "w-80 sm:w-96 h-72 sm:h-80"   /* Ukuran Landscape */
                }`}
              >
                {/* Gambar Foto */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay agar teks judul pada foto tetap sangat terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 flex flex-col justify-end">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 self-start mb-2 backdrop-blur-md">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>


        {/* BARIS 2: BERGERAK KE KIRI */}
        <div 
          className="flex overflow-hidden select-none"
          onMouseEnter={() => setIsHoveredRow2(true)}
          onMouseLeave={() => setIsHoveredRow2(false)}
        >
          <motion.div 
            className="flex gap-6 shrink-0 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
            style={{
              animationPlayState: isHoveredRow2 ? "paused" : "running"
            }}
          >
            {ROW_2_DUPLICATED.map((item, idx) => (
              <div 
                key={`r2-${idx}`}
                className={`relative group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 shrink-0 ${
                  item.type === "portrait" 
                    ? "w-56 sm:w-64 h-72 sm:h-80"   /* Ukuran Portrait */
                    : "w-80 sm:w-96 h-72 sm:h-80"   /* Ukuran Landscape */
                }`}
              >
                {/* Gambar Foto */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 flex flex-col justify-end">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 self-start mb-2 backdrop-blur-md">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
}