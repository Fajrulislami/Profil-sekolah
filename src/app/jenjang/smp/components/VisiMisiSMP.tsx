"use client";

import { useEffect, useState, useRef } from "react";

export default function VisiMisiSMP() {
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

  return (
    <section className="relative w-full py-20 lg:py-32 bg-slate-50 overflow-hidden" ref={sectionRef}>
      
      {/* Background Ambient Glow (Hijau Lembut) */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================= */}
        {/* BAGIAN ATAS: CAPSULE & JUDUL                      */}
        {/* ================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          
          {/* Badge / Kapsul */}
          <div 
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-sm w-max mx-auto mb-6 transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-800 tracking-wide uppercase">
              Tujuan & Arah Pendidikan
            </span>
          </div>

          {/* Judul Utama (Gradient Hijau) */}
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight transition-all duration-500 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500">
              Visi & Misi Sekolah
            </span>
          </h2>
        </div>

        {/* ================================================= */}
        {/* BAGIAN BAWAH: GRID (GAMBAR KIRI, TEKS KANAN)      */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* KIRI: Gambar Anak Tanpa Border (Animasi dari Kiri) */}
          <div 
            className={`relative flex justify-center lg:justify-end transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            {/* Dekorasi Blob Latar Gambar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] bg-emerald-100 rounded-full filter blur-2xl opacity-70"></div>
            
            {/* Ganti src dengan path gambar anak Anda (contoh: /images/anak-buku.png) */}
            <img 
              src="https://placehold.co/600x800/transparent/emerald?text=Gambar+Anak+Tanpa+Border" 
              alt="Siswa SMP memegang buku" 
              className="relative z-10 w-full max-w-sm lg:max-w-md object-contain drop-shadow-xl [backface-visibility:hidden]"
            />
          </div>

          {/* KANAN: Konten Visi & Misi (Animasi dari Kanan) */}
          <div className="flex flex-col gap-10">
            
            {/* KOTAK VISI */}
            <div 
              className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 transition-all duration-700 delay-200 hover:delay-0 hover:duration-200 ease-out hover:-translate-y-1 group [backface-visibility:hidden] ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
              }`}
            >
              <div className="absolute -top-5 left-8 bg-emerald-600 text-white font-black text-sm px-6 py-2 rounded-full shadow-md uppercase tracking-wider">
                Visi
              </div>
              <p className="text-slate-700 text-lg lg:text-xl font-semibold leading-relaxed mt-2">
                "Menjadi lembaga pendidikan menengah Islam yang unggul dalam mencetak generasi pemimpin yang berakhlak mulia, cerdas secara akademik, dan berpegang teguh pada Al-Qur'an."
              </p>
            </div>

            {/* KOTAK MISI */}
            <div 
              className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 transition-all duration-700 delay-350 hover:delay-0 hover:duration-200 ease-out hover:-translate-y-1 group [backface-visibility:hidden] ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
              }`}
            >
              <div className="absolute -top-5 left-8 bg-slate-800 text-white font-black text-sm px-6 py-2 rounded-full shadow-md uppercase tracking-wider">
                Misi
              </div>
              <ul className="text-slate-600 text-base lg:text-lg leading-relaxed mt-2 space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-black text-xl leading-none mt-1">1.</span>
                  <span>Menyelenggarakan pendidikan berbasis karakter keislaman dan kepemimpinan.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-black text-xl leading-none mt-1">2.</span>
                  <span>Mengintegrasikan kurikulum nasional dengan program unggulan Tahfidzul Qur'an.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-emerald-600 font-black text-xl leading-none mt-1">3.</span>
                  <span>Membangun lingkungan belajar yang inovatif, kondusif, dan berwawasan global.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}