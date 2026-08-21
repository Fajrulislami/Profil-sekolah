"use client";

import { useEffect, useRef, useState } from "react";

export default function FasilitasSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const [activeText, setActiveText] = useState({ 
    title: "Navigasi Jelajah", 
    desc: "Arahkan kursor atau sentuh kartu di atas untuk melihat fungsi detail fasilitas utama kami." 
  });
  const [isTextChanging, setIsTextChanging] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fasilitasData = [
    {
      title: "Perpustakaan",
      desc: "Ruang literasi modern dengan ribuan koleksi buku fisik, akses e-library, dan area membaca keheningan yang nyaman.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Masjid Sekolah",
      desc: "Pusat kegiatan ibadah dan pembentukan karakter islami yang luas, bersih, serta sejuk untuk seluruh warga sekolah.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Lapangan Serbaguna",
      desc: "Fasilitas olahraga serbaguna terbuka untuk basket, futsal, dan upacara guna mendukung kebugaran fisik siswa.",
      image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const handleHoverChange = (index: number | null) => {
    setHoveredIndex(index);
    setIsTextChanging(true); 

    setTimeout(() => {
      if (index !== null) {
        setActiveText({ title: fasilitasData[index].title, desc: fasilitasData[index].desc });
      } else {
        setActiveText({ 
          title: "Navigasi Jelajah", 
          desc: "Arahkan kursor atau sentuh kartu di atas untuk melihat fungsi detail fasilitas utama kami." 
        });
      }
      setIsTextChanging(false); 
    }, 200); 
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#0B1120] py-24 relative overflow-hidden font-sans border-t border-slate-800/50">
      
      {/* Ambient Light Latar Belakang */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* ========================================================= */}
          {/* SISI KIRI: Teks & Kapsul Identik                          */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start z-10">
            
            {/* KAPSUL IDENTIK (Perbaikan: Ditambahkan w-max & disesuaikan untuk Dark Mode) */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Fasilitas Kami
              </span>
            </div>
            
            {/* Judul Utama dengan Font Gradient Accent (Delay 150ms) */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 transform transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Infrastruktur Modern <br />
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
                Penunjang Kreativitas.
              </span>
            </h2>
            
            {/* Deskripsi (Delay 300ms) */}
            <p className={`text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-md font-normal transform transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Lingkungan belajar yang kondusif dan standar tinggi disiapkan khusus untuk mendukung perkembangan potensi terbaik putra-putri Anda.
            </p>
            
            {/* Tombol CTA (Delay 450ms) */}
            <div className={`flex transform transition-all duration-700 delay-450 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <a 
                href="/fasilitas" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all duration-300 group hover:-translate-y-0.5"
              >
                Lihat Semua Fasilitas
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SISI KANAN: Animasi Mekar (Fan-Out)                       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full">
            
            <div className="relative w-full max-w-[420px] h-[320px] sm:h-[360px] flex items-center justify-center">
              
              {/* KARTU 1: Kiri */}
              <div 
                onMouseEnter={() => handleHoverChange(0)}
                onMouseLeave={() => handleHoverChange(null)}
                className={`absolute w-[180px] sm:w-[200px] h-[260px] sm:h-[290px] rounded-[2rem] bg-[#121A2A] border border-slate-800 shadow-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out origin-bottom group ${
                  isVisible 
                    ? hoveredIndex === 0 
                      ? "-translate-x-24 rotate-0 -translate-y-8 scale-110 z-30 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)]" 
                      : "-translate-x-16 sm:-translate-x-20 -rotate-12 z-10 opacity-75 " + (hoveredIndex !== null ? "blur-[1px] scale-95" : "")
                    : "translate-x-0 rotate-0 z-10 opacity-0 scale-75"
                }`}
              >
                <img src={fasilitasData[0].image} alt={fasilitasData[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent flex items-end p-5 transition-colors duration-300 group-hover:from-amber-950/80">
                  <h3 className="text-white font-bold tracking-tight text-base group-hover:text-yellow-400 transition-colors">{fasilitasData[0].title}</h3>
                </div>
              </div>

              {/* KARTU 2: Tengah */}
              <div 
                onMouseEnter={() => handleHoverChange(1)}
                onMouseLeave={() => handleHoverChange(null)}
                className={`absolute w-[180px] sm:w-[200px] h-[260px] sm:h-[290px] rounded-[2rem] bg-[#121A2A] border border-slate-800 shadow-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out origin-bottom group ${
                  isVisible 
                    ? hoveredIndex === 1 
                      ? "rotate-0 -translate-y-8 scale-110 z-30 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)]" 
                      : "rotate-0 z-20 " + (hoveredIndex !== null ? "opacity-75 blur-[1px] scale-95" : "opacity-100")
                    : "translate-x-0 rotate-0 z-20 opacity-0 scale-75"
                }`}
              >
                <img src={fasilitasData[1].image} alt={fasilitasData[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent flex items-end p-5 transition-colors duration-300 group-hover:from-amber-950/80">
                  <h3 className="text-white font-bold tracking-tight text-base group-hover:text-yellow-400 transition-colors">{fasilitasData[1].title}</h3>
                </div>
              </div>

              {/* KARTU 3: Kanan */}
              <div 
                onMouseEnter={() => handleHoverChange(2)}
                onMouseLeave={() => handleHoverChange(null)}
                className={`absolute w-[180px] sm:w-[200px] h-[260px] sm:h-[290px] rounded-[2rem] bg-[#121A2A] border border-slate-800 shadow-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out origin-bottom group ${
                  isVisible 
                    ? hoveredIndex === 2 
                      ? "translate-x-24 rotate-0 -translate-y-8 scale-110 z-30 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)]" 
                      : "translate-x-16 sm:translate-x-20 rotate-12 z-10 opacity-75 " + (hoveredIndex !== null ? "blur-[1px] scale-95" : "")
                    : "translate-x-0 rotate-0 z-10 opacity-0 scale-75"
                }`}
              >
                <img src={fasilitasData[2].image} alt={fasilitasData[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent flex items-end p-5 transition-colors duration-300 group-hover:from-amber-950/80">
                  <h3 className="text-white font-bold tracking-tight text-base group-hover:text-yellow-400 transition-colors">{fasilitasData[2].title}</h3>
                </div>
              </div>

            </div>

            {/* Teks Deskripsi Dinamis Bawah */}
            <div className={`w-full max-w-md text-center mt-6 min-h-[80px] flex flex-col items-center justify-start px-4 transform transition-all duration-1000 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <div className={`transition-all duration-300 ease-out transform ${
                isTextChanging ? "opacity-0 translate-y-2 blur-[2px]" : "opacity-100 translate-y-0 blur-0"
              }`}>
                <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1.5">
                  {activeText.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-sm">
                  {activeText.desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}