"use client";

import React from "react";
import { motion } from "framer-motion";

// DATA GURU & TENAGA PENDIDIK
const GURU_DATA = [
  {
    id: 1,
    name: "Zack Hill, M.Pd.",
    role: "Kepala Sekolah & Guru IPA",
    email: "zack.hill@cordova.sch.id",
    // Warna blob background individual untuk variasi visual yang hidup
    blobGradient: "from-amber-500/80 via-orange-500/60 to-yellow-400/80",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Arlton Lowry, S.T.",
    role: "Guru Informatika & Robotik",
    email: "arlton.l@cordova.sch.id",
    blobGradient: "from-teal-500/80 via-emerald-500/60 to-green-400/80",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sarah Devine, S.S.",
    role: "Guru Bahasa Inggris",
    email: "sarah.d@cordova.sch.id",
    blobGradient: "from-amber-400/80 via-yellow-500/60 to-amber-600/80",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Will Carter, S.Pd.",
    role: "Guru Matematika & Logika",
    email: "will.carter@cordova.sch.id",
    blobGradient: "from-emerald-500/80 via-teal-500/60 to-cyan-500/80",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  }
];

// VARIANT ANIMASI FRAMER MOTION
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }
  }
};

export default function TenagaPendidikSMP() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#0B1120] text-slate-200 overflow-hidden">
      
      {/* Background Subtle Glow Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================= */}
        {/* HEADER SECTION (GRADIENT-ACCENT / AMBER-GOLD)     */}
        {/* ================================================= */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge Atas */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
              Tenaga Pendidik
            </span>
          </motion.div>

          {/* Judul Utama dengan Gradient-Accent (Amber to Gold) */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-5"
          >
            Dimentori oleh{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Pendidik Profesional
            </span>
          </motion.h2>

          {/* Deskripsi */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed"
          >
            Guru-guru berdedikasi tinggi yang siap membimbing, menginspirasi, dan mendampingi tumbuh kembang siswa secara personal.
          </motion.p>
        </motion.div>


        {/* ================================================= */}
        {/* GRID GURU (LAYOUT ORGANIC BLOB DI BG #0B1120)     */}
        {/* ================================================= */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {GURU_DATA.map((guru) => (
            <motion.div 
              key={guru.id}
              variants={itemVariants}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* =========================================== */}
              {/* CONTAINER FOTO & ORGANIC BLOB BACKDROP      */}
              {/* =========================================== */}
              <div className="relative w-56 h-64 mb-6 flex items-center justify-center">
                
                {/* 1. Organic Blob Shape (Background Belakang Foto) */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-tr ${guru.blobGradient} rounded-[38%_62%_63%_37%/41%_44%_56%_59%] blur-[2px] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out shadow-lg shadow-amber-500/10`}
                ></div>

                {/* 2. Glowing Ambient Effect saat Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-tr ${guru.blobGradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>

                {/* 3. Foto Guru */}
                <div className="relative z-10 w-48 h-56 rounded-[35%_65%_60%_40%/45%_40%_60%_55%] overflow-hidden border-2 border-slate-700/50 group-hover:border-amber-400/60 transition-colors duration-300">
                  <img 
                    src={guru.image} 
                    alt={guru.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>


              {/* =========================================== */}
              {/* DESKRIPSI & TENTANG GURU                    */}
              {/* =========================================== */}
              {/* Jabatan / Role Tag */}
              <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400/90 mb-2 group-hover:border-amber-400/30 transition-colors">
                {guru.role}
              </span>

              {/* Nama Guru */}
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-200 mb-1">
                {guru.name}
              </h3>

              {/* Email / Kontak */}
              <p className="text-xs text-slate-400 font-normal">
                {guru.email}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}