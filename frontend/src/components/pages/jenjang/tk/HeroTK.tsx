"use client";

import { useEffect, useState } from "react";

export default function HeroTK() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-100 -mt-24 md:-mt-32 pt-40 md:pt-48 pb-16">
      
      {/* 
        BOLA-BOLA BERSINAR (BLOB ACCENT): 
        Sudah diganti menjadi nuansa hijau (emerald/teal) sesuai permintaan 
      */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/3 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* KOLOM KIRI: TEKS & KONTEN */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            
            {/* Badge/Pill Label (Aksen warna berganti ke hijau) */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 w-max mx-auto lg:mx-0 mb-6 transition-all duration-1000 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Program Taman Kanak-Kanak
              </span>
            </div>

            {/* Headline Utama (Warna gradient diubah dominan hijau) */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1120] leading-[1.15] tracking-tight mb-6 transition-all duration-1000 delay-150 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Belajar Sambil Bermain <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Penuh Keceriaan
              </span>
            </h1>

            {/* Sub-Headline */}
            <p 
              className={`text-slate-600 text-lg sm:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 transition-all duration-1000 delay-300 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Belajar sambil bermain untuk membangun karakter dan kreativitas anak.
            </p>

            {/* Tombol Aksi (CTA) */}
            <div 
              className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ease-out ${
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

          {/* KOLOM KANAN: TEMPAT FOTO */}
          <div 
            className={`relative flex justify-center lg:justify-end items-center transition-all duration-1000 delay-500 ease-out ${
              isMounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/5] animate-float">
              
              {/* Dekorasi di belakang foto */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-emerald-400 rounded-[3rem] sm:rounded-[4rem] transform rotate-3 scale-105 opacity-60"></div>
              <div className="absolute inset-0 bg-white rounded-[3rem] sm:rounded-[4rem] transform -rotate-2 scale-105 opacity-90 shadow-xl"></div>
              
              {/* Kontainer Foto */}
              <div className="relative w-full h-full rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Siswa TK Belajar Sambil Bermain" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent mix-blend-overlay"></div>
              </div>

              {/* 
                EMOTICON TETAP DIPERTAHANKAN: 
                Bintang (⭐) dan Palet Lukis (🎨) tidak dihilangkan sesuai permintaan Anda.
              */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl rotate-12 flex items-center justify-center text-3xl animate-bounce-slow border border-emerald-100">
                ⭐
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-4xl animate-bounce-slow delay-150 border border-emerald-100">
                🎨
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ENGINE ANIMASI */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}} />
    </section>
  );
}