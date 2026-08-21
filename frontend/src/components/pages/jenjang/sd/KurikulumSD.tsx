"use client";

import { useEffect, useRef, useState } from "react";

export default function KurikulumSD() {
  const [activeTab, setActiveTab] = useState("akademik");
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

  const curriculumData = {
    akademik: [
      {
        title: "Literasi & Numerasi Terapan",
        desc: "Fokus pada pemahaman bacaan tingkat lanjut, penalaran matematika logis, serta pemecahan masalah dunia nyata secara analitis.",
        tag: "Fokus Utama",
      },
      {
        title: "Sains & Eksperimen Proyek",
        desc: "Pembelajaran IPA berbasis Project-Based Learning (PBL) untuk merangsang rasa ingin tahu ilmiah sejak dini.",
        tag: "Praktikum",
      },
      {
        title: "Bahasa Inggris Komunikatif",
        desc: "Pengenalan kosakata, tata bahasa, dan percakapan harian untuk membangun rasa percaya diri di era global.",
        tag: "Bahasa",
      }
    ],
    keislaman: [
      {
        title: "Tahfidz & Tahsin Al-Qur'an",
        desc: "Target pemantapan hafalan Juz 30 dan perbaikan makharijul huruf dengan metode Talaqqi yang terstruktur.",
        tag: "Program Utama",
      },
      {
        title: "Fiqih Ibadah Praktis",
        desc: "Pembiasaan shalat berjamaah, wudhu sempurna, dhuha harian, serta hafalan doa-doa sunnah.",
        tag: "Pembiasaan",
      },
      {
        title: "Kisah Teladan & Sirah Nabawiyah",
        desc: "Mempelajari perjalanan sejarah Nabi SAW dan sahabat untuk meneladani akhlak mulia dalam kehidupan sehari-hari.",
        tag: "Karakter",
      }
    ],
    pengembangan: [
      {
        title: "Pendidikan Adab & Kemandirian",
        desc: "Membentuk rasa tanggung jawab, etika bersosialisasi, menghormati sesama, dan kemandirian belajar.",
        tag: "Fondasi",
      },
      {
        title: "Keterampilan Digital Cerdas",
        desc: "Edukasi pemanfaatan teknologi secara sehat, logika dasar komputasi, dan etika berinternet.",
        tag: "Teknologi",
      },
      {
        title: "Kreativitas & Motorik Siswa",
        desc: "Pengembangan bakat seni, ketangkasan fisik, serta ekspresi diri melalui olahraga dan seni islami.",
        tag: "Kreativitas",
      }
    ]
  };

  return (
    <section ref={sectionRef} className="w-full py-24 bg-slate-50 relative overflow-hidden font-sans border-b border-slate-200/60">
      
      {/* Ambient Soft Glow Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* SISI KIRIL: Teks, Kapsul, Tab, & List dengan Divider     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* KAPSUL IDENTIK */}
            <div className={`w-max inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Struktur Kurikulum
              </span>
            </div>

            {/* JUDUL UTAMA */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-[1.25] tracking-tight mb-8 transform transition-all duration-700 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Pendekatan Belajar <br />
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black italic pb-2 pr-4 mt-1">
                Holistik & Terintegrasi
              </span>
            </h2>

            {/* TAB NAVIGASI */}
            <div className={`mb-8 transform transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <div className="inline-flex p-1.5 bg-slate-200/70 backdrop-blur-sm rounded-2xl border border-slate-200/80 w-full sm:w-auto overflow-x-auto hide-scrollbar">
                <button 
                  onClick={() => setActiveTab("akademik")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                    activeTab === "akademik" ? "text-emerald-700 shadow-sm bg-white" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Kurikulum Merdeka
                </button>
                <button 
                  onClick={() => setActiveTab("keislaman")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                    activeTab === "keislaman" ? "text-emerald-700 shadow-sm bg-white" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Diniyah & Keislaman
                </button>
                <button 
                  onClick={() => setActiveTab("pengembangan")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
                    activeTab === "pengembangan" ? "text-emerald-700 shadow-sm bg-white" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Pengembangan Diri
                </button>
              </div>
            </div>

            {/* DAFTAR KURIKULUM DENGAN UNDERLINE DIVIDER */}
            <div className="space-y-6">
              {curriculumData[activeTab as keyof typeof curriculumData].map((item, index) => (
                <div 
                  key={index}
                  className={`pb-6 border-b border-slate-200/90 group transition-all duration-500 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${450 + (index * 150)}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* ========================================================= */}
          {/* SISI KANAN: Visual Organic Blob Frame yang Menyatu Rapi   */}
          {/* ========================================================= */}
          <div className={`lg:col-span-5 flex justify-center items-center relative transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/4.5] flex items-center justify-center p-4">
              
              {/* 1. DEKORASI BINTANG / ACCENT DOTS DI BELAKANG */}
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:10px_10px] opacity-40"></div>
              
              {/* 2. LAYER 1: BLOB BACKGROUND GRADIENT (Bayangan Blob Miring) */}
              <div className="absolute inset-2 bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] opacity-80 blur-xs transform -rotate-6 scale-105 shadow-xl shadow-emerald-500/20"></div>

              {/* 3. LAYER 2: BLOB PHOTO CONTAINER (Foto dipotong mengikuti bentuk Blob) */}
              <div className="relative w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden border-4 border-white shadow-2xl z-10 bg-slate-200 group">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                  alt="Siswa Belajar Aktif" 
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
              </div>

              {/* 4. DEKORASI BUBBLES MELAYANG */}
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-emerald-400 border-2 border-white shadow-md z-20 animate-bounce"></div>
              <div className="absolute top-1/4 -right-4 w-5 h-5 rounded-full bg-teal-300 border-2 border-white shadow-sm z-20"></div>

              {/* 5. FLOATING BADGE KECIL */}
              <div className="absolute -bottom-4 right-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center text-sm shadow-md">
                  ✨
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Lingkungan</p>
                  <p className="text-xs font-extrabold text-slate-800 mt-1 leading-none">Interaktif & Fun</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Hide Scrollbar Style */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}