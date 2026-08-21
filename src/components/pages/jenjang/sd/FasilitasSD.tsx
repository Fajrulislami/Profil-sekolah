"use client";

import { useEffect, useRef, useState } from "react";

export default function FasilitasSD() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const facilities = [
    {
      id: 1,
      title: "Ruang Kelas AC & Interactive Board",
      category: "Kenyamanan Belajar",
      desc: "Ruang kelas modern ber-AC yang dilengkapi dengan Smart Board interaktif untuk menunjang pembelajaran visual dan aktif.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Perpustakaan & Literacy Corner",
      category: "Pusat Sumber Belajar",
      desc: "Koleksi buku cerita islami, literasi sains, dan ruang baca lesehan yang nyaman untuk menumbuhkan minat baca sejak dini.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Laboratorium Sains & Komputer",
      category: "Eksplorasi & Teknologi",
      desc: "Fasilitas praktikum lengkap untuk eksperimen sains sederhana dan pengenalan dasar teknologi informasi bagi siswa.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Masjid & Area Tahfidz",
      category: "Spiritual & Adab",
      desc: "Masjid sekolah yang bersih dan luas untuk pelaksanaan shalat berjamaah, pembiasaan dzikir, dan halqah hafalan Al-Qur'an.",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Lapangan Olahraga & Area Bermain",
      category: "Aktivitas Fisik",
      desc: "Sarana olahraga serbaguna yang aman untuk kegiatan PJOK, panahan, futsal, serta area bermain bebas saat istirahat.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  // Fungsi Putar Kiri / Kanan Infinite
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % facilities.length);
  };

  // Kalkulasi offset melingkar untuk infinite loop
  const getOffset = (index: number) => {
    const total = facilities.length;
    let diff = index - activeIndex;

    // Putar selisih agar berada di rentang [-total/2, total/2]
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section ref={sectionRef} className="w-full py-24 bg-slate-50 font-sans relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          
          {/* Kapsul Header Identik */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 mb-6 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
              Fasilitas Sekolah
            </span>
          </div>

          {/* Judul Utama Gradient Primary */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-[1.25] tracking-tight">
            Sarana Belajar Modern <br className="hidden sm:block" />
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black italic pb-1">
              Untuk Tumbuh Maksimal
            </span>
          </h2>

          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
            Lingkungan belajar yang bersih, aman, dan dirancang khusus mendukung potensi siswa.
          </p>
        </div>

        {/* CIRCULAR FOCUSED CAROUSEL */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Stage Area Carousel */}
          <div className="relative w-full h-[460px] sm:h-[540px] flex items-center justify-center overflow-hidden">
            {facilities.map((item, index) => {
              const offset = getOffset(index);
              const isActive = offset === 0;

              // Tentukan gaya transformasi berdasarkan posisi offset (-1, 0, 1, dst)
              let transformClasses = "opacity-0 pointer-events-none scale-75 z-0";
              
              if (offset === 0) {
                // Kartu Tengah (Utama)
                transformClasses = "translate-x-0 scale-100 z-30 opacity-100 shadow-2xl pointer-events-auto h-[420px] sm:h-[500px] w-[290px] sm:w-[380px]";
              } else if (offset === 1) {
                // Kartu Kanan
                transformClasses = "translate-x-[85%] sm:translate-x-[105%] scale-90 z-20 opacity-60 hover:opacity-90 shadow-lg pointer-events-auto h-[350px] sm:h-[420px] w-[250px] sm:w-[320px]";
              } else if (offset === -1) {
                // Kartu Kiri
                transformClasses = "-translate-x-[85%] sm:-translate-x-[105%] scale-90 z-20 opacity-60 hover:opacity-90 shadow-lg pointer-events-auto h-[350px] sm:h-[420px] w-[250px] sm:w-[320px]";
              } else if (offset === 2) {
                // Kartu Sembunyi Kanan (Penyiapan Putaran)
                transformClasses = "translate-x-[170%] sm:translate-x-[200%] scale-75 z-10 opacity-0 pointer-events-none h-[320px] w-[240px]";
              } else if (offset === -2) {
                // Kartu Sembunyi Kiri (Penyiapan Putaran)
                transformClasses = "-translate-x-[170%] sm:-translate-x-[200%] scale-75 z-10 opacity-0 pointer-events-none h-[320px] w-[240px]";
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out bg-slate-900 group ${transformClasses}`}
                >
                  {/* Gambar Fasilitas */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                  {/* Badge Kategori */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                    <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase backdrop-blur-md transition-all ${
                      isActive 
                        ? "bg-emerald-500/90 text-white border border-white/20" 
                        : "bg-black/50 text-slate-200"
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Konten Teks Bawah */}
                  <div className={`absolute inset-x-0 bottom-0 p-5 sm:p-7 z-20 transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-80 translate-y-1"
                  }`}>
                    <h3 className={`font-bold text-white tracking-tight leading-tight ${
                      isActive ? "text-xl sm:text-2xl mb-2" : "text-base sm:text-lg mb-0"
                    }`}>
                      {item.title}
                    </h3>

                    {isActive && (
                      <p className="text-slate-200 text-xs sm:text-sm font-normal line-clamp-3 leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* TOMBOL NAVIGASI & INDIKATOR */}
          <div className="flex items-center justify-center gap-4 mt-6 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all shadow-sm active:scale-95"
              aria-label="Previous Facility"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indikator Titik (Dots) */}
            <div className="flex items-center gap-2 px-3">
              {facilities.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`transition-all duration-300 rounded-full ${
                    dotIdx === activeIndex 
                      ? "w-8 h-2.5 bg-emerald-600" 
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all shadow-sm active:scale-95"
              aria-label="Next Facility"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}