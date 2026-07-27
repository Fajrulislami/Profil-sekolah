"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// DATA METODE PEMBELAJARAN
const METODE_DATA = [
  {
    number: "01",
    title: "Eksplorasi Berbasis Proyek",
    description: "Siswa belajar memecahkan masalah nyata melalui karya konkret. Fokus pada pemahaman konsep dan penerapan langsung, bukan sekadar hafalan.",
    tag: "Praktis & Relevan",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.24a6 6 0 00-2.24 2.24m0 0l-2.24 2.24m2.24-2.24l2.24 2.24" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Diskusi & Peer Learning",
    description: "Ruang kelas dirancang terbuka untuk bertukar pikiran. Mengasah keberanian berpendapat, komunikasi aktif, dan cara berpikir kritis.",
    tag: "Kolaboratif",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Pendampingan Personal",
    description: "Setiap siswa memiliki kecepatan belajar unik. Guru berperan sebagai fasilitator yang memandu perkembangan tiap individu secara terarah.",
    tag: "Mentoring 1-on-1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Media Visual & Digital Interaktif",
    description: "Pemanfaatan alat bantu digital dan simulasi interaktif untuk menyederhanakan materi kompleks agar lebih mudah dipahami.",
    tag: "Teknologi Terpadu",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

// DATA HASIL PEMBELAJARAN
const HASIL_BELAJAR = [
  {
    title: "Kritis & Analitis",
    desc: "Memecahkan masalah dengan logika & data.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Komunikatif & Pede",
    desc: "Berani berpendapat & tampil percaya diri.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Kemandirian Belajar",
    desc: "Memiliki dorongan eksplorasi secara mandiri.",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

// VARIANT ANIMASI FRAMER MOTION
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18, // Efek jeda antar elemen (0.18 detik)
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0] // Smooth easing Curve
    }
  }
};

export default function MetodePembelajaranSMP() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#0B1120] text-slate-200 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================= */}
        {/* 1. HEADER (ANIMASI TEKS PERLAHAN)                 */}
        {/* ================================================= */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
              Metode Pembelajaran
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-5"
          >
            Suasana Belajar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Interaktif & Relevan.
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed"
          >
            Kami mengalihkan peran siswa dari sekadar pendengar pasif menjadi partisipan aktif. Setiap materi dirancang agar dekat dengan terapan dunia nyata.
          </motion.p>
        </motion.div>


        {/* ================================================= */}
        {/* 2. GRID 2x2 (KARTU MUNCUL SATU-PER-SATU SAAT SCROLL)*/}
        {/* ================================================= */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {METODE_DATA.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-7 lg:p-8 rounded-3xl bg-slate-900/90 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full
                  ${isActive 
                    ? "border-amber-400/50 bg-slate-800/90 shadow-[0_10px_30px_rgba(251,191,36,0.06)] -translate-y-1" 
                    : "border-slate-800 hover:border-slate-700"
                  }
                `}
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-amber-400 text-slate-950 scale-105 shadow-md shadow-amber-400/20" 
                        : "bg-slate-800 text-amber-400 border border-slate-700"
                    }`}>
                      {item.icon}
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-400">
                        {item.tag}
                      </span>
                      <span className="text-xs font-bold text-amber-400/80 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  {/* Judul & Deskripsi */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-200 ${
                    isActive ? "text-amber-400" : "text-white"
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Pendekatan SMP Cordova</span>
                  <span className={`transition-colors duration-200 ${isActive ? "text-amber-400 font-semibold" : "text-slate-500"}`}>
                    Metode #{item.number}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


        {/* ================================================= */}
        {/* 3. HASIL YANG DIHARAPKAN (MUNCUL TERAKHIR)         */}
        {/* ================================================= */}
        <motion.div 
          className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Hasil Yang Diharapkan</h4>
              <p className="text-xs text-slate-400">Target utama pengembangan karakter & akademis siswa</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HASIL_BELAJAR.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">{item.title}</h5>
                  <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}