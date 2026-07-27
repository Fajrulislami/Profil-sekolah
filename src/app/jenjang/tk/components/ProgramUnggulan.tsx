"use client";

import { useEffect, useState, useRef } from "react";

export default function ProgramUnggulan() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      no: "01",
      title: "Tahfidz Cilik & Adab",
      desc: "Pembentukan karakter islami melalui metode hafalan Al-Qur'an juz 30 yang menyenangkan serta pembiasaan adab ibadah harian sejak usia dini.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      no: "02",
      title: "Fun Bilingual Play",
      desc: "Pengenalan bahasa internasional secara alami melalui lagu, dongeng boneka, dan percakapan interaktif sehari-hari tanpa membebani mental anak.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      no: "03",
      title: "STEAM Explorer",
      desc: "Merangsang logika, pemecahan masalah, dan kreativitas anak melalui eksperimen sains sederhana berbasis air, udara, serta seni kriya tangan.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      no: "04",
      title: "Life Skills & Wirausaha",
      desc: "Melatih kemandirian motorik kasar serta kecerdasan sosial-finansial anak melalui simulasi pasar (Market Day) dan tanggung jawab merapikan ruang.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-[#0B1120] relative overflow-hidden">
      
      {/* PENDARAN CAHAYA HALUS (Mencegah Kesan Polos, Tetap Bersih Tanpa Grid) */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full filter blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* HEADER HALAMAN - RATA KIRI PENUH */}
        <div 
          className={`text-left max-w-7xl mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* KAPSUL IDENTIK (Perbaikan: Ditambahkan w-max & disesuaikan untuk Dark Mode) */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Program Utama
              </span>
            </div>

          {/* Judul & Deskripsi Berdampingan (Split Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              {/* py-1 & leading-[1.25] mencegah bagian atas huruf terpotong */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.25] tracking-tight py-1">
                Metode Terbaik Berorientasi <br />
                <span className="text-gradient-accent font-black italic inline-block pr-2 py-1">
                  Masa Depan Emas Ananda
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 border-l-2 border-slate-800 pl-6 lg:pl-8 py-1">
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
                Kami mengintegrasikan pendidikan nilai Islami dengan metode bermain interaktif untuk menstimulasi kecerdasan emosional dan spiritual sejak dini.
              </p>
            </div>
          </div>
        </div>

        {/* HORIZONTAL MINIMALIST SLIDER */}
        {/* 
          - Di mobile/tablet: Bisa di-swipe horizontal dengan efek snap (`snap-x`)
          - Scrollbar disembunyikan total agar clean (`[scrollbar-width:none]`)
        */}
        <div 
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-2 -mx-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {programs.map((prog, index) => (
            <div 
              key={index}
              /* 
                - Bentuk Vertikal Tinggi: h-[380px]
                - Sudut Membulat Ekstrem: rounded-[2.5rem]
                - Hover Efek: Naik sedikit, membesar lembut (scale-[1.03]), mengaktifkan efek semi-glassmorphism transparan, dan pendaran bayangan kuning tipis.
              */
              className="snap-center shrink-0 w-[290px] sm:w-[320px] lg:w-[295px] h-[380px] bg-[#121A2A] border border-slate-800/80 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.03] hover:bg-[#16223F]/60 hover:backdrop-blur-md hover:border-yellow-400/30 hover:shadow-[0_20px_40px_rgba(234,179,8,0.04)] group"
            >
              
              {/* NOMOR INDEKS BESAR DI POJOK ATAS */}
              <div className="absolute right-8 top-6 font-mono font-black text-6xl text-slate-800/40 tracking-tighter transition-colors duration-500 group-hover:text-yellow-400/10 pointer-events-none select-none">
                {prog.no}
              </div>

              {/* BAGIAN ATAS: IKON KAPSUL */}
              <div className="w-12 h-12 rounded-2xl bg-slate-800/60 border border-slate-700/50 text-slate-400 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:text-[#0B1120] group-hover:border-transparent group-hover:shadow-md">
                {prog.icon}
              </div>

              {/* BAGIAN BAWAH: JUDUL (GRADIENT HOVER) & DESKRIPSI TEXT */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent">
                  {prog.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {prog.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* INDICATOR LINE UNTUK PANDUAN SWIPE (MUNCUL DI LAYAR KECIL) */}
        <div className="w-full flex justify-start items-center gap-3 mt-4 lg:hidden">
          <span className="text-xs font-medium text-slate-500 tracking-wider uppercase">Geser</span>
          <div className="h-[2px] bg-slate-800 flex-1 relative rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1/4 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
}