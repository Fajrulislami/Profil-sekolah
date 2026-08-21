"use client";

import { useEffect, useRef } from "react";

export default function GuruTenagaPendidik() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Efek animasi fade-up saat di-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-up-element");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Data Dummy (Lebih dari 10 orang)
  // Ganti link gambar dengan foto asli saat sudah tersedia
  const teachers = [
    {
      name: "Siti Aminah, S.Pd",
      role: "Kepala Sekolah",
      education: "S1 Pendidikan Guru PAUD",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rina Kusuma, S.Psi",
      role: "Wali Kelas TK A",
      education: "S1 Psikologi Anak",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dewi Lestari, S.Pd",
      role: "Wali Kelas TK B",
      education: "S1 Pendidikan Guru PAUD",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ahmad Fauzi, S.Pd.I",
      role: "Guru Pendidikan Agama",
      education: "S1 Pendidikan Agama Islam",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Nisa Salsabila, S.Sn",
      role: "Guru Kesenian & Tari",
      education: "S1 Seni Tari",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Budi Santoso, M.Pd",
      role: "Koordinator Outbound",
      education: "S2 Pendidikan Jasmani",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Fitri Handayani, S.Pd",
      role: "Guru Pendamping TK A",
      education: "S1 Pendidikan Luar Biasa",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Laila Fitriani, S.Pd",
      role: "Guru Pendamping TK B",
      education: "S1 Pendidikan Guru PAUD",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Maya Sari, A.Md.Keb",
      role: "Staf UKS / Kesehatan",
      education: "D3 Kebidanan",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Andi Pratama, S.Kom",
      role: "Staf Administrasi & Tata Usaha",
      education: "S1 Sistem Informasi",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ratna Dwi, S.Pd",
      role: "Pustakawan & Sentra Membaca",
      education: "S1 Ilmu Perpustakaan",
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Hasan Basri",
      role: "Staf Keamanan & Fasilitas",
      education: "SMA/Sederajat",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#0B1120] relative overflow-hidden font-sans">
      
      {/* Pendaran Cahaya Halus di Latar Belakang (Konsisten dengan bagian sebelumnya) */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full filter blur-[150px] -translate-x-1/2 pointer-events-none"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up-element">
          {/* KAPSUL IDENTIK (Perbaikan: Ditambahkan w-max & disesuaikan untuk Dark Mode) */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-sm w-max mb-6 transition-all duration-500 hover:border-amber-500/50"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-400 tracking-wide uppercase">
                Tim Kami
              </span>
            </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Berkenalan dengan <br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent italic">
              Guru & Tenaga Pendidik
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
            Didedikasikan penuh cinta dan kesabaran, tim pendidik kami adalah para profesional yang siap membimbing langkah pertama buah hati Anda.
          </p>
        </div>

        {/* GRID PROFIL GURU (4 Kolom di Desktop, 2 di Tablet, 1 di HP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teachers.map((person, index) => (
            <div 
              key={index}
              className="fade-up-element group relative bg-[#121A2A] border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.08)] flex flex-col h-full"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              
              {/* Wadah Foto dengan rasio 4:5 yang profesional */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-800">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Efek Gradasi di atas foto agar teks tidak bertabrakan jika fotonya terang */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121A2A] via-[#121A2A]/20 to-transparent opacity-90"></div>
              </div>

              {/* Area Teks (Nama, Jabatan, Pendidikan) ditarik sedikit ke atas menimpa gradasi foto */}
              <div className="relative p-5 md:p-6 flex flex-col flex-grow -mt-10">
                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {person.name}
                </h3>
                
                {/* Jabatan menggunakan warna Gradient Accent */}
                <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-3">
                  {person.role}
                </span>

                {/* Pendidikan menggunakan warna redup (slate-400) dan diposisikan paling bawah */}
                <div className="mt-auto pt-4 border-t border-slate-800/60 flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <p className="text-xs font-light text-slate-400 tracking-wide line-clamp-1">
                    {person.education}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* CSS KHUSUS UNTUK ANIMASI */}
      <style dangerouslySetInnerHTML={{__html: `
        .fade-up-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up-element.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

    </section>
  );
}