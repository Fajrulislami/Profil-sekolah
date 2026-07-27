"use client";

import { useEffect } from "react";

export default function FasilitasTK() {
  
  // Intersection Observer untuk animasi masuk (Reveal) yang bersih
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".fade-in-bento");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const facilities = [
    {
      title: "Taman Bermain Outdoor",
      desc: "Area luas dengan alas rumput sintetis yang aman, dilengkapi permainan standar SNI untuk melatih motorik kasar anak.",
      image: "https://images.unsplash.com/photo-1595844730298-b860bac0d601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      colSpan: "md:col-span-2",
    },
    {
      title: "Ruang Kelas Ber-AC",
      desc: "Nyaman, sejuk, dan dilengkapi media pembelajaran audio-visual interaktif.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-1",
    },
    {
      title: "Perpustakaan Mini",
      desc: "Koleksi buku cerita bergambar untuk merangsang minat baca sejak dini.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-1",
    },
    {
      title: "Sentra Kreativitas & Seni",
      desc: "Ruang khusus untuk melukis, membuat kerajinan tangan, dan mengekspresikan imajinasi tanpa batas.",
      image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-1",
    },
    {
      title: "UKS & Area Sanitasi",
      desc: "Fasilitas kesehatan sigap dan wastafel ramah anak untuk membiasakan hidup bersih.",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-1",
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="fade-in-bento flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            
            {/* Badge/Pill Label (Aksen warna berganti ke hijau) */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm shadow-emerald-100 w-max mx-auto lg:mx-0 mb-6 transition-all duration-500 hover:border-emerald-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 tracking-wide uppercase">
                Lingkungan Belajar
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Fasilitas Terbaik Untuk <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                Tumbuh Kembang Anak
              </span>
            </h2>
          </div>
          
          <p className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed pb-2">
            Dirancang khusus dengan mengutamakan standar keamanan, kenyamanan, serta kebersihan untuk mendukung eksplorasi buah hati Anda setiap hari.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[320px]">
          {facilities.map((item, index) => (
            <div 
              key={index}
              className={`fade-in-bento group relative rounded-2xl overflow-hidden cursor-pointer ${item.colSpan}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gambar Background */}
              <div className="absolute inset-0 w-full h-full bg-slate-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay Gelap Halus */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Teks Konten */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 ease-out">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CSS KHUSUS UNTUK ANIMASI CLEAN */}
      <style dangerouslySetInnerHTML={{__html: `
        .fade-in-bento {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-bento.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
    </section>
  );
}