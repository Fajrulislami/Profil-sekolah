"use client";

import { useEffect, useRef, useState } from "react";

export default function MetodePembelajaran() {
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

  const leftMethods = [
    {
      id: "01",
      title: "Active Learning",
      desc: "Siswa diajak aktif berdiskusi, bertanya, dan memecahkan masalah secara mandiri di dalam kelas.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Project-Based Learning",
      desc: "Belajar melalui proyek nyata untuk merancang karya, mengasah nalar kritis, dan kerja sama tim.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  const rightMethods = [
    {
      id: "03",
      title: "Talaqqi & Keteladanan",
      desc: "Metode Al-Qur'an dan penanaman adab harian dengan guru sebagai figur teladan secara langsung.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Blended & Digital Learning",
      desc: "Penggabungan interaksi tatap muka hangat dengan media digital interaktif yang menyenangkan.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-24 bg-[#0B1120] relative overflow-hidden font-sans border-t border-slate-800/50">
      
      {/* Ambient Light Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* HEADER SECTION (Terpusat di Tengah)                        */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          
          {/* Kapsul Identik */}
          <div className={`w-max inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-400 shadow-sm mb-6 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-amber-500 tracking-wide uppercase">
              Metode Belajar
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.25] tracking-tight transform transition-all duration-700 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Menghidupkan Suasana Kelas dengan <br className="hidden md:block" />
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
              Pendekatan Interaktif
            </span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* TATA LETAK 3 KOLOM: [Kiri 2 Item] - [Pusat Lingkaran] - [Kanan 2 Item] */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* SISI KIRI: 2 Item Metode */}
          <div className={`lg:col-span-4 flex flex-col gap-6 transform transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            {leftMethods.map((method) => (
              <div 
                key={method.id}
                className="group p-6 sm:p-8 rounded-3xl bg-[#121A2A] border border-slate-800/80 hover:border-amber-500/40 hover:bg-[#151E2F] hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Garis Aksen Kiri */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-amber-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

                <div className="w-12 h-12 rounded-2xl bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-500 mb-5 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all duration-300">
                  {method.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors duration-300">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>

          {/* SISI TENGAH: LINGKARAN DENGAN FOTO SISWA/GURU */}
          <div className={`lg:col-span-4 flex justify-center items-center my-4 lg:my-0 transform transition-all duration-1000 delay-400 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}>
            <div className="relative w-[280px] sm:w-[340px] aspect-square flex items-center justify-center">
              
              {/* Pendaran Lingkaran Emas di Belakang */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 via-amber-500/30 to-amber-600/10 blur-xl animate-pulse"></div>

              {/* Ring Lingkaran Luar dengan Border Gradasi */}
              <div className="absolute inset-2 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-amber-500 to-amber-600/20 shadow-2xl">
                
                {/* Kontainer Lingkaran Foto Utama */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#121A2A] border-4 border-[#0B1120] relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                    alt="Guru & Siswa Belajar" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 via-transparent to-transparent"></div>
                </div>

              </div>

              {/* Badge Teks Kecil Melayang */}
              <div className="absolute -bottom-2 bg-[#121A2A]/90 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/40 shadow-lg text-center">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Belajar Interaktif
                </span>
              </div>

            </div>
          </div>

          {/* SISI KANAN: 2 Item Metode */}
          <div className={`lg:col-span-4 flex flex-col gap-6 transform transition-all duration-700 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            {rightMethods.map((method) => (
              <div 
                key={method.id}
                className="group p-6 sm:p-8 rounded-3xl bg-[#121A2A] border border-slate-800/80 hover:border-amber-500/40 hover:bg-[#151E2F] hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Garis Aksen Kiri */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-amber-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

                <div className="w-12 h-12 rounded-2xl bg-[#0B1120] border border-slate-800 flex items-center justify-center text-amber-500 mb-5 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all duration-300">
                  {method.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-normal group-hover:text-slate-300 transition-colors duration-300">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}