"use client";

import { useEffect } from "react";

export default function KegiatanTK() {
  
  // Logic Intersection Observer untuk mendeteksi scroll tiap-tiap kartu
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika elemen masuk ke layar, tambahkan class 'is-visible'
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Jika elemen keluar dari layar, hapus class (agar bisa dianimasikan lagi saat di-scroll balik)
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { 
        threshold: 0.15, // Memicu animasi ketika 15% elemen terlihat
        rootMargin: "0px 0px -50px 0px" // Animasi terpicu sedikit sebelum menyentuh bawah layar
      } 
    );

    // Pasang observer ke semua elemen dengan class 'reveal-on-scroll'
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      title: "Outbound",
      desc: "Melatih motorik kasar, keberanian, dan kerjasama tim anak di alam terbuka yang menyenangkan.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Market Day",
      desc: "Simulasi jual-beli ceria untuk menumbuhkan jiwa wirausaha, keberanian berkomunikasi, dan mengenal angka.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Pentas Seni",
      desc: "Ajang unjuk bakat menyanyi, menari, atau berpuisi untuk membangun rasa percaya diri tampil di depan umum.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: "Cooking Class",
      desc: "Eksplorasi bahan makanan sehat dan melatih kemandirian motorik anak melalui resep koki cilik yang aman.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
    },
    {
      title: "Field Trip",
      desc: "Petualangan edukatif di luar lingkungan sekolah untuk belajar langsung dari dunia nyata bersama teman-teman.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Kegiatan Keagamaan",
      desc: "Menanamkan karakter, nilai moral, dan cinta ibadah sejak dini dengan pendekatan yang mudah dipahami anak.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    }
  ];

  return (
    <section className="w-full py-24 bg-slate-50 relative overflow-hidden font-sans">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION - Dibuat ikut reveal animation */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            Eksplorasi Seru Melalui <br className="hidden md:block" />
            <span className="text-emerald-600">
              Kegiatan Rutin Kami
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Bukan hanya belajar di kelas, kami mengajak anak-anak berpetualang dan menemukan hal baru melalui berbagai aktivitas interaktif.
          </p>
        </div>

        {/* TIMELINE JALUR PETUALANGAN */}
        <div className="relative py-10">
          
          {/* Garis Petualangan dengan Animasi Bergerak */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 animated-timeline-line"></div>

          <div className="flex flex-col gap-10 md:gap-14 relative">
            {activities.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={index}
                  /* Menggunakan class .reveal-on-scroll untuk animasi scroll atas-bawah */
                  className={`reveal-on-scroll relative flex items-center w-full justify-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  
                  {/* Titik Pusat Jalur (Node) Clean Design */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 z-10">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-slate-50 shadow-sm"></div>
                  </div>

                  {/* Kartu Kegiatan - Desain Clean & Minimalis */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-emerald-200">
                      
                      <div className={`flex flex-col sm:flex-row gap-5 items-start sm:items-center ${isLeft ? "md:flex-row-reverse text-left md:text-right" : "text-left"}`}>
                        
                        {/* Ikon dengan warna solid lembut (tidak bertabrakan) */}
                        <div className="shrink-0 w-14 h-14 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors duration-300">
                          {item.icon}
                        </div>
                        
                        {/* Teks dengan warna kontras standar (tidak menggunakan gradien berlebihan) */}
                        <div>
                          <h3 className="text-lg font-bold text-slate-800 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS KHUSUS UNTUK ANIMASI SCROLL & GARIS */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Animasi Scroll Atas & Bawah */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Animasi Garis Timeline Berjalan (Seperti jejak langkah) */
        .animated-timeline-line {
          background-image: linear-gradient(to bottom, #10b981 50%, rgba(255,255,255,0) 0%);
          background-position: right;
          background-size: 2px 20px;
          background-repeat: repeat-y;
          animation: moveLine 1s linear infinite;
        }

        @keyframes moveLine {
          0% { background-position: 0 0; }
          100% { background-position: 0 20px; }
        }
      `}} />

    </section>
  );
}