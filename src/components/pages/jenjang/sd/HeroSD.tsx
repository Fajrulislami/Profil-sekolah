"use client";

import { useEffect, useState } from "react";

export default function HeroSD() {
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
          
          {/* SISI KIRI: TEKS UTAMA & TOMBOL CTA */}
          <div className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            
            {/* Badge/Pill Label (Aksen warna berganti ke hijau) */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 w-max mx-auto lg:mx-0 mb-6 transition-all duration-1000 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Program Sekolah Dasar
              </span>
            </div>

            {/* Judul Utama */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-800 leading-[1.2] tracking-tight mb-6">
              Membangun Karakter & Prestasi <br className="hidden lg:block" />
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black pb-2 pr-4">
                Sejak Usia Dini
              </span>
            </h1>

            {/* Deskripsi */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-light">
              Sekolah Dasar kami menyediakan lingkungan belajar yang inovatif, memadukan kurikulum akademik unggul dengan pendidikan karakter untuk mempersiapkan pemimpin masa depan.
            </p>

            {/* TOMBOL CTA SAMA SEPERTI HEROTK */}
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

          {/* SISI KANAN: KOLASE GAMBAR */}
          <div className={`lg:col-span-6 relative h-[420px] sm:h-[500px] lg:h-[550px] w-full transition-all duration-1000 delay-300 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            
            {/* Gambar Utama (Besar) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[80%] sm:w-[75%] h-[85%] sm:h-[80%] rounded-3xl overflow-hidden border-8 border-white shadow-2xl shadow-slate-200/50 z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Aktivitas Siswa SD" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Gambar Tambahan (Melayang di Kiri Bawah) */}
            <div className="absolute bottom-2 left-0 w-[48%] sm:w-[45%] h-[38%] sm:h-[40%] rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-slate-200/60 z-20 animate-float-slow group">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Belajar Kelompok" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Kartu Info "Kurikulum Merdeka" */}
            <div className="absolute top-2 sm:top-6 -left-2 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/60 z-30 flex items-center gap-3 sm:gap-4 animate-float">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-black text-slate-800 leading-none">Kurikulum</p>
                <p className="text-xs sm:text-sm text-emerald-600 font-bold mt-1">Merdeka Belajar</p>
              </div>
            </div>

            {/* Badge Bintang (Kanan Bawah) */}
            <div className="absolute bottom-8 sm:bottom-12 right-[-10px] sm:right-[-20px] bg-slate-900 text-white py-2.5 px-4 sm:py-3 sm:px-5 rounded-2xl shadow-xl z-30 flex items-center gap-3 animate-float-delayed">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=3" alt="Avatar" />
              </div>
              <div className="text-xs sm:text-sm font-medium">
                Dipercaya <br/> <span className="text-emerald-400 font-bold">500+ Orang Tua</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CSS Animasi */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 5s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}} />
    </section>
  );
}