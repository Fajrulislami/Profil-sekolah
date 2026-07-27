"use client";

import { useEffect, useState, useRef } from "react";

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const methods = [
    {
      title: "Belajar Sambil Bermain",
      desc: "Anak memahami konsep melalui aktivitas permainan.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l-7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Learning by Doing",
      desc: "Anak belajar melalui pengalaman langsung.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: "Pembelajaran Tematik",
      desc: "Materi dikemas berdasarkan tema tertentu.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Efek Pendaran Cahaya Latar Belakang Lambat */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BAGIAN ATAS: HEADER & DESKRIPSI (Layout Split Horizontal) */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          
          {/* Kiri: Judul Utama */}
          <div className="lg:max-w-2xl">
            {/* KAPSUL IDENTIK (Perbaikan: Ditambahkan w-max & disesuaikan untuk Dark Mode) */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Metode Utama
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              Pendekatan Edukasi Unggul Melalui <br className="hidden sm:block" />
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-black italic pr-4 pt-1 pb-2 leading-snug">
                Metode Pembelajaran Interaktif
              </span>
            </h2>
          </div>

          {/* Kanan: Teks Deskripsi Baru (Tanpa Link) */}
          <div className="lg:max-w-md pb-2">
            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Kami percaya bahwa setiap anak memiliki keunikan. Oleh karena itu, metode kami dirancang untuk menumbuhkan minat belajar secara natural melalui eksplorasi, penemuan, dan interaksi yang menyenangkan setiap harinya.
            </p>
          </div>
        </div>

        {/* BAGIAN BAWAH: GRID KARTU (Berjejer secara horizontal tanpa link 'Learn More') */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-150 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {methods.map((item, index) => (
            <div 
              key={index}
              className="w-full h-full bg-[#121A2A]/90 border border-slate-800/80 rounded-2xl p-8 flex flex-col shadow-[0_10px_30px_-10px_rgba(234,179,8,0.03)] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_20px_40px_-5px_rgba(234,179,8,0.08)] group"
            >
              <div className="mb-6">
                {/* Ikon Kapsul */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-amber-400 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:text-[#0B1120] group-hover:border-transparent group-hover:shadow-md group-hover:shadow-amber-400/20">
                  {item.icon}
                </div>
              </div>

              {/* Judul dengan Gradient Accent saat di-hover */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-amber-400 group-hover:bg-clip-text group-hover:text-transparent">
                {item.title}
              </h3>

              {/* Deskripsi */}
              <p className="text-slate-400 text-sm font-light leading-relaxed tracking-wide transition-colors duration-300 group-hover:text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />

    </section>
  );
}