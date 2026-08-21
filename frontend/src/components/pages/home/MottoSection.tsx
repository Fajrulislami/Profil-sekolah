"use client";

import { useEffect, useRef, useState } from "react";

export default function MottoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger true saat masuk viewport, false saat keluar
        // Ini memastikan animasi berulang saat scroll up/down
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 } // Memicu animasi ketika 20% bagian masuk layar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28 flex flex-col">
        
        {/* ========================================= */}
        {/* BAGIAN ATAS: Teks (Kiri) & Gambar (Kanan) */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-20">
          
          {/* KIRI: Teks Utama Motto */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Badge/Pill Label (Aksen warna berganti ke hijau) */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 w-max mx-auto lg:mx-0 mb-6 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Moto & Filosofi Institusi
              </span>
            </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.2]">
                "Mendidik dengan <span className="text-gradient-primary">Hati</span>, <br className="hidden md:block" />
                Membentuk Generasi <span className="text-gradient-primary">Rabbani</span>"
              </h2>
              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl text-justify">
                Kami percaya bahwa pendidikan sejati tidak hanya sekadar mengisi akal dengan ilmu pengetahuan, tetapi juga menyentuh hati dengan akhlak mulia. Di sini, setiap langkah adalah proses menuntun potensi terbaik siswa untuk siap menghadapi tantangan masa depan.
              </p>
              <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl text-justify">
                Setiap individu diciptakan berbeda dengan keunikan dan potensi luar biasa. Kami berkomitmen untuk menggali dan mengasah bakat tersebut melalui pendekatan holistik yang seimbang.
              </p>
            </div>
          </div>

          {/* KANAN: Gambar / Visual Samping dengan Animasi Bouncy */}
          <div 
            className={`w-full lg:w-1/2 h-[450px] relative transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isVisible 
                ? "opacity-100 translate-x-0 scale-100 rotate-0" 
                : "opacity-0 translate-x-20 scale-90 rotate-3"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Latar shadow dekoratif di belakang gambar */}
            <div className="absolute inset-0 bg-brand-primary/5 backdrop-blur-sm rounded-3xl -rotate-2 scale-105 pointer-events-none border border-brand-primary/10" />
            
            <div className="relative w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden flex items-center justify-center group border border-gray-100">
              <div className="text-center p-6 relative z-10">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Tempat Foto Lingkungan/Siswa</p>
              </div>
            </div>

            {/* Elemen Mengambang Samping */}
            <div 
              className={`absolute -bottom-6 -left-6 bg-white py-5 px-8 min-w-[260px] rounded-2xl shadow-xl border border-gray-100 animate-bounce transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`} 
              style={{ animationDuration: '3.5s', transitionDelay: "600ms" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gradient-primary font-bold tracking-wider uppercase">Ketua Yayasan</p>
                  <p className="text-base text-gray-800 font-extrabold mt-0.5 whitespace-nowrap">[Nama Tokoh]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* BAGIAN BAWAH: 3 Kartu Berjajar (Bouncy Pop-up) */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-4">
          
          {/* Kartu 1: Pilar 01 */}
          <div 
            className={`relative group bg-[#111111] rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden ${
              isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-24 scale-90"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[50%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Cerdas Akademik</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Kurikulum terpadu merangsang daya pikir kritis & inovatif untuk bersaing secara global.
              </p>
            </div>
          </div>

          {/* Kartu 2: Pilar 02 */}
          <div 
            className={`relative group bg-[#111111] rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden ${
              isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-24 scale-90"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[50%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Anggun Berakhlak</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Pembiasaan adab Islami dan karakter mulia dalam keseharian di lingkungan sekolah.
              </p>
            </div>
          </div>

          {/* Kartu 3: Pilar 03 */}
          <div 
            className={`relative group bg-[#111111] rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-3 hover:scale-[1.03] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden ${
              isVisible 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-24 scale-90"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[50%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Tangguh Global</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Membekali skill yang adaptif dan solutif untuk siap bersaing di era teknologi modern.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}