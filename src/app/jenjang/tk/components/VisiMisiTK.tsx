"use client";

import { useEffect, useState, useRef } from "react";

export default function VisiMisiTK() {
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

  // Contoh Data Misi (Nanti bisa diganti dengan teks asli sekolah)
  const misiList = [
    "Menyelenggarakan pendidikan Islami yang menyenangkan dan berpusat pada anak.",
    "Mengembangkan potensi kecerdasan majemuk melalui metode bermain sambil belajar.",
    "Membiasakan akhlakul karimah dalam kehidupan sehari-hari sejak usia dini.",
    "Menjalin sinergi yang kuat antara sekolah, orang tua, dan lingkungan masyarakat."
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-slate-50 overflow-hidden">

      {/* Ornamen Latar Belakang (Halus) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

          {/* KOLOM KIRI: BADGE, JUDUL, DAN VISI UTAMA */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center text-center lg:text-left transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            {/* Badge/Pill Label (Aksen warna berganti ke hijau) */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 w-max mx-auto lg:mx-0 mb-6 transition-all duration-500 hover:border-emerald-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Visi & Misi
              </span>
            </div>

            {/* Penggunaan text-gradient-primary yang sudah dibuat di globals.css */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-[1.2] tracking-tight mb-8">
              Mewujudkan Generasi <br className="hidden lg:block" />
              <span className="text-gradient-primary italic font-black pr-2">Cerdas & Berakhlak</span>
            </h2>

            {/* Kotak Visi (Vision Box) */}
            <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
              {/* Ikon Tanda Kutip (Quote) */}
              <div className="absolute -top-6 -left-2 sm:-left-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">Visi Kami</p>
              <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
                "Menjadi taman kanak-kanak unggul yang mencetak generasi Rabbani, berkarakter Islami, mandiri, dan berwawasan global di usia emas mereka."
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: DAFTAR MISI DENGAN NUMBERED CARDS */}
          <div
            className={`lg:col-span-7 flex flex-col gap-4 sm:gap-5 transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            <div className="mb-2 lg:mb-4 text-center lg:text-left">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Misi Kami</p>
            </div>

            {/* Looping Kartu Misi */}
            {misiList.map((misi, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Tipografi Angka Besar dengan Gradient */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors duration-300">
                  <span className="text-2xl font-black text-gradient-primary">
                    0{index + 1}
                  </span>
                </div>

                {/* Teks Misi */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed group-hover:text-slate-800 transition-colors">
                  {misi}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}