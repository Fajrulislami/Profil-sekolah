"use client";

import { useEffect, useState } from "react";

export default function HeroSMP() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-50 overflow-hidden font-sans pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24">
      
      {/* Latar Belakang Dekoratif */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================= */}
          {/* SISI KIRI: TEKS UTAMA & TOMBOL CTA          */}
          {/* ========================================= */}
          <div className={`lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            
            {/* Badge/Pill Label */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 w-max mx-auto lg:mx-0 mb-6 transition-all duration-1000 ease-out delay-100 ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Program Menengah Pertama
              </span>
            </div>

            {/* Judul Utama */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-800 leading-[1.15] tracking-tight mb-6">
              Membentuk Karakter & <br className="hidden lg:block" />
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black pb-2">
                Generasi Mandiri
              </span>
            </h1>

            {/* Deskripsi */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-light">
              Mempersiapkan siswa-siswi menghadapi jenjang yang lebih tinggi dengan memadukan kurikulum akademik modern, pembinaan adab Islami, dan pengembangan bakat minat siswa.
            </p>

            {/* TOMBOL CTA */}
            <div 
              className={`w-full flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-base shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Daftar Sekarang
              </button>
              <button className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-2xl font-bold text-base shadow-sm border border-slate-200 hover:border-emerald-300 transition-all flex items-center justify-center gap-3 group">
                <span className="w-8 h-8 rounded-full bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                Pelajari Program
              </button>
            </div>
            
          </div>

          {/* ========================================= */}
          {/* SISI KANAN: BENTO LAYOUT BENTO JENJANG SMP  */}
          {/* ========================================= */}
          <div className={`lg:col-span-7 relative h-[500px] sm:h-[600px] w-full transition-all duration-1000 delay-300 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            
            {/* 1. KARTU TAHFIDZ (KIRI ATAS) */}
            <div className="absolute left-[2%] sm:left-[5%] top-[2%] w-[45%] h-[46%] bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[2rem] p-5 sm:p-7 text-white shadow-xl z-10 flex flex-col justify-between border border-emerald-400/30 animate-float-slow">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  Tahfidz Target
                </span>
              </div>
              <div>
                <h3 className="text-3xl sm:text-5xl font-black mb-1 tracking-tight">3 - 5 Juz</h3>
                <p className="text-emerald-100 text-xs sm:text-sm font-medium leading-tight">
                  Target hafalan Al-Qur'an mutqin & pembiasaan adab siswa SMP.
                </p>
              </div>
            </div>

            {/* 2. KARTU BILINGUAL & STEM (KIRI BAWAH) */}
            <div className="absolute left-[2%] sm:left-[5%] bottom-[2%] w-[45%] h-[46%] bg-teal-500 rounded-[2rem] p-5 sm:p-7 text-white shadow-xl z-10 flex flex-col justify-between overflow-hidden group">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-teal-100 uppercase tracking-widest block mb-1">
                  Kurikulum Khusus
                </span>
                <h4 className="text-lg sm:text-2xl font-black leading-tight z-10 relative">
                  Bilingual & <br/>STEM Class
                </h4>
              </div>

              {/* Grafik / Ikon Ilustrasi STEM */}
              <div className="absolute bottom-3 right-3 w-16 h-16 sm:w-20 sm:h-20 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* BADGE LINGKARAN TENGAH-KIRI (Melayang) */}
            <div className="absolute left-[45%] sm:left-[48%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-slate-900 text-white rounded-full flex flex-col items-center justify-center z-30 shadow-2xl border-4 sm:border-[6px] border-slate-50 cursor-pointer hover:bg-emerald-600 transition-colors animate-float">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-1 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
              </svg>
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-center leading-none">
                Play <br/> Video
              </span>
            </div>

            {/* GAMBAR UTAMA PORTRAIT (KANAN) */}
            <div className="absolute right-[2%] sm:right-0 top-[2%] w-[50%] sm:w-[48%] h-[96%] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300 z-0">
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop" 
                alt="Siswa SMP" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* BADGE KANAN 1 (Overlap Gambar) */}
            <div className="absolute right-[-10px] sm:right-[-20px] top-[40%] bg-slate-900 text-white py-3 px-4 sm:py-4 sm:px-5 rounded-2xl shadow-xl z-20 flex flex-col items-center animate-float-delayed">
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Tingkat Lulus</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">98%</span>
            </div>

            {/* BADGE KANAN 2 (Overlap Gambar) */}
            <div className="absolute right-[5%] sm:right-[-5px] bottom-[15%] bg-slate-900 text-white py-3 px-4 sm:py-4 sm:px-5 rounded-2xl shadow-xl z-20 flex flex-col items-center animate-float">
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Akreditasi</span>
              <span className="text-2xl sm:text-3xl font-black text-teal-400">A+</span>
            </div>

          </div>
        </div>
      </div>

      {/* CSS Animasi */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
          100% { transform: translateY(0px) translateX(-50%); }
        }
        @keyframes float-regular {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-regular {
          animation: float-regular 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .absolute.right-\\[-10px\\].animate-float-delayed,
        .absolute.right-\\[-20px\\].animate-float-delayed,
        .absolute.right-\\[5\\%\\].animate-float,
        .absolute.right-\\[-5px\\].animate-float {
             animation-name: float-regular;
        }
      `}} />
    </section>
  );
}