"use client";

import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button"; 

export default function TentangSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Efek animasi masuk saat komponen di-load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  // Data Profil Sekolah
  const profilData = [
    { label: "Nama Sekolah", value: "YPI Cordova Ulul Albab" },
    { label: "Tahun Berdiri", value: "2010" },
    { label: "Jenjang", value: "TK, SD, SMP, SMK, Pesantren" },
    { label: "Status", value: "Swasta Terpadu" },
    { label: "Yayasan", value: "Yayasan Pendidikan Islam Cordova" },
    { label: "Akreditasi", value: "A (Sangat Baik)" },
  ];

  return (
    <section id="tentang" className="relative w-full overflow-hidden bg-slate-100 -mt-12 lg:-mt-20 pt-28 pb-16 lg:pt-40 lg:pb-24 z-0">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">

          {/* ========================================= */}
          {/* KONTEN KIRI: Profil Singkat & Data (Opsi C) */}
          {/* ========================================= */}
          <div 
            className={`w-full lg:w-[55%] space-y-8 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                  Profil Singkat Sekolah
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Membangun Generasi <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Unggul & Berkarakter
                </span>
              </h2>
            </div>

            {/* Paragraf Ringkasan Profil */}
            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg text-justify">
              <p>
                YPI Cordova Ulul Albab adalah institusi pendidikan Islam terpadu yang berdedikasi untuk mencetak generasi penerus bangsa yang tidak hanya cerdas secara intelektual, tetapi juga memiliki fondasi akhlak yang kokoh. Berdiri sejak tahun 2010, kami terus berinovasi dalam mengintegrasikan kurikulum nasional dengan nilai-nilai kepesantrenan.
              </p>
              <p>
                Lingkungan belajar kami dirancang secara komprehensif dari tingkat Taman Kanak-Kanak hingga Sekolah Menengah Kejuruan, serta didukung oleh program Pesantren Rabbani. Dengan fasilitas modern dan tenaga pendidik profesional, kami berkomitmen menjadi mitra terbaik orang tua dalam menuntun potensi emas setiap peserta didik.
              </p>
            </div>

            {/* Wadah Data Profil (Glassmorphism / Premium Container) */}
            <div className="relative bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl p-6 md:p-8 z-10 overflow-hidden">
              {/* Aksen Dekoratif di sudut wadah */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-50 rounded-full blur-2xl opacity-60"></div>
              
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {profilData.map((item, index) => (
                  <div key={index} className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</span>
                    <span className="text-sm md:text-base font-bold text-gray-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* KONTEN KANAN: Gambar Gedung & Efek Tilt     */}
          {/* ========================================= */}
          <div 
            className={`w-full lg:w-[45%] flex justify-center lg:justify-end relative transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {/* GLOW DI BELAKANG FOTO (Tepat di belakang container 3D) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-primary/30 blur-[80px] lg:blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer lg:-mr-4 bg-gray-50"
              style={{
                transform: isHovered
                  ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transformStyle: "preserve-3d",
                transition: isHovered ? "none" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)", 
              }}
            >
              {/* Efek Pantulan Cahaya (Glare) mengikuti arah mouse */}
              {isHovered && (
                <div
                  className="absolute inset-0 z-30 pointer-events-none mix-blend-soft-light"
                  style={{
                    background: `radial-gradient(circle at ${rotate.y * 4 + 50}% ${rotate.x * -4 + 50}%, rgba(255,255,255,0.6) 0%, transparent 60%)`,
                  }}
                />
              )}

              {/* Foto Gedung Sekolah (Bersih tanpa overlay warna) */}
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop"
                alt="Gedung Pusat Cordova Ulul Albab"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                  transform: isHovered ? "scale(1.08)" : "scale(1)",
                  transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
                }}
              />

              {/* Gradasi hitam tipis HANYA di bagian paling bawah agar teks putih bisa dibaca */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              
              {/* Badge Dekoratif di Gambar */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end pointer-events-none" style={{ transform: "translateZ(40px)" }}>
                <div>
                  <h4 className="text-white font-bold text-xl leading-tight drop-shadow-md">Gedung Utama</h4>
                  <p className="text-white/90 text-sm font-medium drop-shadow-sm">Kampus Terpadu</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}