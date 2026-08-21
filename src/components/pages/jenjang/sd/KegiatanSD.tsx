"use client";

import { useEffect, useRef, useState } from "react";

export default function KegiatanSD() {
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

  const activities = [
    {
      title: "Ekstrakurikuler Sunnah",
      category: "Olahraga & Ketangkasan",
      desc: "Melatih ketangkasan, kedisiplinan, dan fokus siswa melalui kegiatan memanah dan berenang yang dibimbing langsung oleh pelatih profesional.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Field Trip & Outing Class",
      category: "Eksplorasi Alam & Edukasi",
      desc: "Pembelajaran kontekstual di luar kelas dengan mengunjungi museum, peternakan, dan alam terbuka untuk mengasah kepekaan serta pengalaman belajar langsung.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Market Day Kids",
      category: "Kewirausahaan Islami",
      desc: "Simulasi pasar cilik untuk melatih jiwa kewirausahaan, keberanian berkomunikasi, kejujuran, dan pemahaman nilai transaksi sejak usia dini.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Pentas Seni & Bakat Kreatif",
      category: "Seni & Ekspresi Diri",
      desc: "Wadah apresiasi bagi siswa untuk berekspresi dan tampil percaya diri membawakan nasyid, drama pendek, bacaan puisi, dan karya seni.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Mabit & Bina Ruhiyah",
      category: "Spiritual & Adab",
      desc: "Malam bina iman dan takwa di sekolah untuk memperkuat shalat qiyamul lail, kemandirian tidur mandiri, serta kedekatan dengan Al-Qur'an.",
      image: "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Pramuka Siaga & Penggalang",
      category: "Karakter & Kepanduan",
      desc: "Kegiatan kepanduan berkala untuk membina kedisiplinan, kemandirian, kecintaan pada alam, serta semangat gotong royong antar sesama teman.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 bg-slate-50 relative font-sans border-t border-slate-200/60 overflow-x-clip">
      
      {/* Ambient Light Latar Belakang */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-300 mb-4">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
              Kehidupan Siswa
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-[1.25] tracking-tight">
            Beragam Kegiatan Menyenangkan <br className="hidden sm:block" />
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent font-black italic pb-1">
              Di Luar Kelas
            </span>
          </h2>
          
          <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
            Gulir ke bawah untuk melihat tumpukan aktivitas siswa.
          </p>
        </div>

        {/* STACKED CARDS CONTAINER */}
        <div className="relative pb-16">
          {activities.map((activity, index) => (
            <div 
              key={index}
              style={{ zIndex: index + 10 }}
              className="sticky top-20 w-full h-[380px] sm:h-[480px] md:h-[520px] rounded-3xl overflow-hidden bg-slate-900 group mb-[40vh] transition-all duration-500"
            >
              
              {/* Gambar Utama */}
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                loading="lazy"
              />

              {/* Efek Kilatan Cahaya Saat Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                <div className="w-[150%] h-[150%] absolute -top-1/4 -left-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>

              {/* Gradient Overlay Berlapis */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/60 group-hover:via-slate-950/15 transition-all duration-500"></div>

              {/* Konten Atas (Kategori, Judul, & Counter) */}
              <div className="absolute inset-x-0 top-0 p-6 sm:p-8 flex justify-between items-start z-30 transform group-hover:-translate-y-0.5 transition-transform duration-300">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold uppercase tracking-wider mb-2.5 backdrop-blur-md border border-white/20 group-hover:bg-emerald-400 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    {activity.category}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-emerald-100 transition-colors duration-300">
                    {activity.title}
                  </h3>
                </div>

                {/* Counter Badge */}
                <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 text-white font-extrabold text-xs sm:text-sm border border-white/20 backdrop-blur-md group-hover:border-emerald-400/50 transition-colors duration-300">
                  0{index + 1} / 0{activities.length}
                </span>
              </div>

              {/* Konten Bawah (Deskripsi) */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 z-30 transform group-hover:translate-x-1 transition-transform duration-300">
                <p className="text-white text-base sm:text-lg md:text-xl font-bold leading-relaxed max-w-3xl opacity-95 group-hover:opacity-100">
                  {activity.desc}
                </p>
              </div>

            </div>
          ))}

          {/* ========================================================= */}
          {/* DEKORASI BAWAH SIMPLE & CLEAN (TANPA BORDER / AURA AI)   */}
          {/* ========================================================= */}
          <div 
            style={{ zIndex: 30 }}
            className="relative mt-16 w-full py-10 px-6 flex flex-col items-center justify-center text-center rounded-3xl bg-emerald-50/40"
          >
            {/* Tiga Ikon Ceria Lembut */}
            <div className="flex items-center justify-center gap-5 sm:gap-6 mb-4">
              
              {/* Ikon 1 */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-100/80 text-amber-600 flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2 0h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.143-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>

              {/* Ikon 2 */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Ikon 3 */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-100/80 text-teal-600 flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

            </div>

            {/* Teks Penutup Sederhana */}
            <p className="text-emerald-800 font-extrabold text-xs sm:text-sm uppercase tracking-widest">
              Aktivitas Ceria & Kreatif Siswa
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}