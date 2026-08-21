"use client";

import { useEffect, useState, useRef } from "react";

// DATA PROGRAM UNGGULAN
const PROGRAM_DATA = [
  {
    id: "tahfidz",
    number: "01",
    title: "Tahfidz & Halaqah Qur'an",
    tagline: "Membentuk Generasi Penghafal Al-Qur'an Berjiwa Mutqin",
    description:
      "Program bimbingan hafalan Al-Qur'an yang terintegrasi langsung dengan aktivitas harian sekolah. Didampingi oleh Muhafiz berpengalaman untuk memastikan kelancaran hafalan, pemantapan tajwid, serta penanaman adab terhadap Al-Qur'an.",
    badge: "Keagamaan"
  },
  {
    id: "steam",
    number: "02",
    title: "STEAM & Digital Literacy",
    tagline: "Keterampilan Teknologi & Sains untuk Masa Depan",
    description:
      "Pembelajaran berbasis Sains, Teknologi, Teknik, Seni, dan Matematika. Dirancang untuk melatih kemampuan berpikir kritis, pemecahan masalah (problem solving), serta pemahaman dasar pemrograman dan literasi digital.",
    badge: "Teknologi"
  },
  {
    id: "bilingual",
    number: "03",
    title: "Bilingual & Public Speaking",
    tagline: "Kepercayaan Diri Berkomunikasi di Tingkat Global",
    description:
      "Program pembiasaan bahasa internasional (Bahasa Inggris & Bahasa Arab) dalam komunikasi harian serta presentasi kelas. Berfokus pada pembentukan keberanian siswa dalam menyampaikan gagasan secara terstruktur.",
    badge: "Bahasa & Komunikasi"
  },
  {
    id: "leadership",
    number: "04",
    title: "Leadership & Character Building",
    tagline: "Menanamkan Adab, Kemandirian, dan Jiwa Kepemimpinan",
    description:
      "Pembentukan karakter kepemimpinan berbasis nilai-nilai Islam melalui kegiatan mentoring kelompok, kepanduan, dan latihan dasar kepemimpinan. Berfokus pada kedisiplinan, kemandirian, dan tanggung jawab sosial.",
    badge: "Karakter"
  }
];

export default function ProgramUnggulanSMP() {
  const [activeTab, setActiveTab] = useState(0);
  const [isFading, setIsFading] = useState(false);
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

  // Handler untuk pergantian tab dengan animasi smooth
  const handleTabChange = (index: number) => {
    if (index === activeTab || isFading) return;

    setIsFading(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsFading(false);
    }, 200); // Durasi transisi fade-out sebelum ganti data
  };

  const activeProgram = PROGRAM_DATA[activeTab];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#0B1120] text-white overflow-hidden" ref={sectionRef}>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================= */}
        {/* BAGIAN ATAS: CAPSULE & JUDUL                      */}
        {/* ================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          
          {/* Badge / Kapsul */}
          <div 
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-amber-400/30 backdrop-blur-md shadow-sm w-max mx-auto mb-6 transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
              Keunggulan Sekolah
            </span>
          </div>

          {/* Judul Utama (Gradient Accent) */}
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight mb-6 transition-all duration-500 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              Program Unggulan
            </span>{" "}
            SMP
          </h2>

          {/* Sub-judul ringkas */}
          <p 
            className={`text-slate-400 text-base sm:text-lg font-light max-w-2xl mx-auto transition-all duration-500 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Dirancang khusus untuk mengasah potensi intelektual, spiritual, dan karakter kepemimpinan siswa.
          </p>
        </div>

        {/* ================================================= */}
        {/* BAGIAN BAWAH: LAYOUT SEJAJAR (KIRI & KANAN)       */}
        {/* ================================================= */}
        <div 
          className={`transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Label ditempatkan di atas grid */}
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Daftar Program:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* KIRI: DAFTAR KARTU (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              {PROGRAM_DATA.map((prog, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={prog.id}
                    onClick={() => handleTabChange(index)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden h-full [backface-visibility:hidden] ${
                      isActive
                        ? "bg-slate-800/90 border-amber-400/80 shadow-lg shadow-amber-500/5"
                        : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700"
                    }`}
                  >
                    {/* Indikator Garis Aktif */}
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400 transition-all duration-300 ${
                        isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                      }`}
                    ></div>

                    <div className="flex items-center gap-4">
                      {/* Angka Nomor */}
                      <span 
                        className={`text-sm font-black transition-colors duration-300 ${
                          isActive ? "text-amber-400" : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      >
                        {prog.number}
                      </span>

                      {/* Judul Program */}
                      <div>
                        <h3 
                          className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                            isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {prog.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-normal line-clamp-1 mt-0.5">
                          {prog.badge}
                        </p>
                      </div>
                    </div>

                    {/* Panah Indikator */}
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shrink-0 ${
                        isActive 
                          ? "bg-amber-400 text-slate-950 opacity-100 translate-x-0" 
                          : "bg-slate-800/80 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    >
                      →
                    </div>
                  </button>
                );
              })}
            </div>

            {/* KANAN: DESKRIPSI DETAIL (7 Columns - Sejajar Tinggi) */}
            <div className="lg:col-span-7">
              <div 
                className="bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-slate-800/90 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
              >
                {/* Pembungkus Konten dengan Efek Animasi Fade & Slide */}
                <div 
                  className={`transition-all duration-300 ease-out transform ${
                    isFading 
                      ? "opacity-0 translate-y-3 scale-[0.99]" 
                      : "opacity-100 translate-y-0 scale-100"
                  }`}
                >
                  {/* Header Kartu Detail */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                      {activeProgram.badge}
                    </span>
                    <span className="text-3xl font-black text-slate-800 select-none">
                      {activeProgram.number}
                    </span>
                  </div>

                  {/* Judul & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-snug">
                    {activeProgram.title}
                  </h3>
                  <p className="text-amber-300/90 text-sm font-medium mb-6">
                    {activeProgram.tagline}
                  </p>

                  {/* Deskripsi Lengkap */}
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                    {activeProgram.description}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}