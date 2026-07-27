"use client";

import React, { useState } from "react";

// ============================================================================
// DATA KEGIATAN PESANTREN
// ============================================================================
const ACTIVITIES = [
  {
    id: "01",
    title: "Tahfizh & Talaqqi Shubuh",
    category: "Kedisiplinan & Qur'an",
    time: "04.30 - 06.00 WIB",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800&auto=format&fit=crop",
    desc: "Setoran hafalan Al-Qur'an dan perbaikan bacaan secara intensif bersama para ustadz pengampu sanad usai shalat shubuh berjamaah.",
  },
  {
    id: "02",
    title: "Kajian Kitab Turats",
    category: "Dirasah Islamiyah",
    time: "08.00 - 11.30 WIB",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
    desc: "Pembacaan dan pembedahan tata bahasa Arab, fiqih, serta akhlak menggunakan literatur kitab kuning metode sorogan dan bandongan.",
  },
  {
    id: "03",
    title: "Eksperimen & Riset Sains",
    category: "Pendidikan Umum",
    time: "13.00 - 15.00 WIB",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    desc: "Praktikum laboratorium sains dan logika dasar pemrograman untuk melatih daya kritis serta kemampuan berfikir sistematis santri.",
  },
  {
    id: "04",
    title: "Olahraga & Sunnah Memanah",
    category: "Pengembangan Diri",
    time: "16.00 - 17.15 WIB",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266200b?q=80&w=800&auto=format&fit=crop",
    desc: "Latihan ketangkasan fisik, panahan, dan olahraga beregu untuk membentuk stamina prima serta mentalitas kepemimpinan Rabbani.",
  },
  {
    id: "05",
    title: "Muhadharah 3 Bahasa",
    category: "Keterampilan Bahasa",
    time: "20.00 - 21.30 WIB",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
    desc: "Latihan pidato dan orasi publik dalam Bahasa Arab, Inggris, dan Indonesia guna melatih rasa percaya diri serta kemampuan komunikasi.",
  },
];

export default function KegiatanPesantren() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Pergeseran Melingkar (Infinite Circular Loop)
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % ACTIVITIES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + ACTIVITIES.length) % ACTIVITIES.length);
  };

  return (
    <section className="relative w-full bg-slate-100 text-slate-900 py-20 lg:py-28 overflow-hidden selection:bg-slate-900 selection:text-white">
      
      {/* ================================================= */}
      {/* BACKGROUND ATMOSPHERE & RADIAL DOT GRID           */}
      {/* ================================================= */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* ================================================= */}
      {/* CONTAINER UTAMA                                   */}
      {/* ================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          
          {/* Kapsul Sub-Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 mb-4 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-900">
              {ACTIVITIES[activeIndex].category}
            </span>
          </div>

          {/* Judul Utama Gradient Primary */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            <span className="text-slate-900">Kegiatan </span>
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 bg-clip-text text-transparent">
              Siswa
            </span>
          </h2>

          {/* Deskripsi Kegiatan */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal min-h-[48px] transition-all duration-500">
            {ACTIVITIES[activeIndex].desc}
          </p>
        </div>

        {/* DISPLAY 3 KARTU */}
        <div className="relative min-h-[360px] sm:min-h-[420px] flex items-center justify-center select-none">
          {ACTIVITIES.map((item, index) => {
            let diff = index - activeIndex;
            const total = ACTIVITIES.length;

            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            let positionClasses = "";
            if (isCenter) {
              positionClasses = "z-30 opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0";
            } else if (isLeft) {
              positionClasses = "z-10 opacity-80 scale-90 -translate-x-[200px] sm:-translate-x-[300px] translate-y-3 -rotate-[13deg] hover:opacity-100";
            } else if (isRight) {
              positionClasses = "z-10 opacity-80 scale-90 translate-x-[200px] sm:translate-x-[300px] translate-y-3 rotate-[13deg] hover:opacity-100";
            } else if (diff < -1) {
              positionClasses = "z-0 opacity-0 scale-75 -translate-x-[450px] translate-y-6 -rotate-[20deg] pointer-events-none";
            } else {
              positionClasses = "z-0 opacity-0 scale-75 translate-x-[450px] translate-y-6 rotate-[20deg] pointer-events-none";
            }

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${positionClasses}`}
              >
                {/* BINGKAI KARTU HITAM */}
                <div className="w-[210px] sm:w-[270px] h-[290px] sm:h-[370px] bg-slate-900 p-2.5 rounded-sm shadow-2xl flex flex-col justify-between">
                  
                  {/* ISI FOTO: HANYA MUNCUL DI TENGAH, KIRI & KANAN HITAM POLOS */}
                  <div className="w-full h-full bg-slate-900 overflow-hidden relative flex items-center justify-center">
                    {isCenter ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                        <span className="text-slate-800 font-mono text-xl font-bold">
                          {item.id}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CAPTION HANYA MUNCUL DI KARTU TENGAH */}
                  {isCenter && (
                    <div className="pt-3 pb-1 text-center bg-slate-900 text-white">
                      <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block mb-0.5">
                        {item.time}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-100">
                        {item.title}
                      </h3>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* TOMBOL NAVIGASI KAPSUL */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 active:scale-95"
            aria-label="Sebelumnya"
          >
            <span className="text-sm">←</span>
            <span>Sebelumnya</span>
          </button>

          <div className="px-3.5 py-2 rounded-full bg-slate-200/90 backdrop-blur-sm text-xs font-mono font-bold text-slate-700 select-none border border-slate-300/50">
            {activeIndex + 1} / {ACTIVITIES.length}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 active:scale-95"
            aria-label="Selanjutnya"
          >
            <span>Selanjutnya</span>
            <span className="text-sm">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}