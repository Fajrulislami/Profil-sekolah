"use client";

import { useEffect, useRef, useState } from "react";

export default function StrukturOrganisasi() {
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

  // Data Pimpinan
  const leader = {
    name: "Ustadz Ahmad, S.Pd.I",
    role: "Kepala Sekolah",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  };

  // Data 10 Tenaga Pendidik
  const teamMembers = [
    {
      id: 1,
      name: "Ustadzah Aisyah, S.Pd",
      role: "Wali Kelas 1A",
      type: "wali-kelas",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      position: { top: "8%", left: "50%" }
    },
    {
      id: 2,
      name: "Ustadz Budi, S.Or",
      role: "Guru PJOK",
      type: "guru-mapel",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      position: { top: "20%", left: "76%" }
    },
    {
      id: 3,
      name: "Ustadzah Fatimah, S.Pd",
      role: "Wali Kelas 2A",
      type: "wali-kelas",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      position: { top: "42%", left: "82%" }
    },
    {
      id: 4,
      name: "Ustadz Umar, Al-Hafidz",
      role: "Guru Tahfidz",
      type: "guru-mapel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      position: { top: "68%", left: "76%" }
    },
    {
      id: 5,
      name: "Ustadzah Khadijah, M.Pd",
      role: "Wali Kelas 3A",
      type: "wali-kelas",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=200&auto=format&fit=crop",
      position: { top: "88%", left: "58%" }
    },
    {
      id: 6,
      name: "Ustadz Ali, S.Hum",
      role: "Guru Bahasa Arab",
      type: "guru-mapel",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      position: { top: "88%", left: "32%" }
    },
    {
      id: 7,
      name: "Ustadzah Maryam, S.Si",
      role: "Guru IPA",
      type: "guru-mapel",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop",
      position: { top: "68%", left: "18%" }
    },
    {
      id: 8,
      name: "Ustadz Hasan, S.Pd",
      role: "Wali Kelas 4A",
      type: "wali-kelas",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      position: { top: "42%", left: "12%" }
    },
    {
      id: 9,
      name: "Ustadzah Zainab, S.Pd",
      role: "Wali Kelas 5A",
      type: "wali-kelas",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      position: { top: "20%", left: "22%" }
    },
    {
      id: 10,
      name: "Ustadz Ibrahim, S.T",
      role: "Guru Komputer",
      type: "guru-mapel",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
      position: { top: "48%", left: "48%" }
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-24 bg-[#0B1120] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          
          {/* ========================================================= */}
          {/* KOLOM KIRI (PIMPINAN & LEGENDA)                            */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            {/* Kapsul Header */}
            <div className={`w-max inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-400 shadow-sm mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-amber-500 tracking-wide uppercase">
                Tenaga Pendidik
              </span>
            </div>

            {/* Judul Utama Gradient Emas/Kuning */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Struktur Organisasi <br />
              <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                SD Islam Cordova
              </span>
            </h2>
            
            <p className="text-slate-400 text-sm mb-10 leading-relaxed">
              Dewan guru dan staf profesional yang berdedikasi tinggi membimbing siswa-siswi.
            </p>

            {/* Main Profile Card (Pimpinan) */}
            <div className="mb-8">
              <div className="w-48 h-56 sm:w-52 sm:h-60 rounded-2xl overflow-hidden bg-slate-900 mb-4 shadow-2xl border border-slate-800">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                {leader.name}
              </h3>
              <p className="text-amber-400 font-semibold text-sm mt-1">
                {leader.role}
              </p>
            </div>

            {/* Legenda Indikator Warna */}
            <div className="space-y-3 border-t border-slate-800/80 pt-6 mt-2 max-w-[260px]">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.4)]"></span>
                <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Wali Kelas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></span>
                <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Guru Mata Pelajaran</span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* KOLOM KANAN (ORBIT DESKTOP - TEKS FLEKSIBEL CEGAH POTONG) */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 hidden lg:flex items-center justify-center relative min-h-[680px] w-full px-4">
            
            {/* Garis Orbit Konsentris */}
            <div className="absolute w-[580px] h-[580px] rounded-full border border-slate-800/60 pointer-events-none"></div>
            <div className="absolute w-[380px] h-[380px] rounded-full border border-slate-800/60 pointer-events-none"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full border border-slate-800/60 pointer-events-none"></div>

            {/* Render Node Guru */}
            {teamMembers.map((member) => {
              const isRightSide = parseInt(member.position.left) > 50;

              return (
                <div 
                  key={member.id}
                  className={`absolute flex items-center gap-3 group cursor-pointer z-10 ${
                    isRightSide ? "flex-row-reverse text-right" : "flex-row text-left"
                  }`}
                  style={{ 
                    top: member.position.top, 
                    left: member.position.left,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Foto Profil Melingkar & Dot Indikator */}
                  <div className="relative shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover grayscale group-hover:grayscale-0 border-2 border-slate-800 group-hover:border-amber-400 transition-all duration-300 shadow-md"
                    />
                    <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-slate-950 ${
                      member.type === 'wali-kelas' ? 'bg-amber-400' : 'bg-gradient-to-r from-emerald-400 to-teal-500'
                    }`}></span>
                  </div>

                  {/* Teks Nama & Role */}
                  <div className="flex flex-col">
                    <span className="text-slate-100 text-sm font-bold tracking-tight whitespace-nowrap group-hover:text-amber-300 transition-colors duration-300">
                      {member.name}
                    </span>
                    <span className="text-slate-400 text-xs font-medium whitespace-nowrap">
                      {member.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* KOLOM KANAN (GRID CLEAN - MOBILE / TABLET)                */}
          {/* ========================================================= */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="flex items-center gap-3.5 p-2 rounded-xl group"
              >
                <div className="relative shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 border-2 border-slate-800"
                  />
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-slate-950 ${
                    member.type === 'wali-kelas' ? 'bg-amber-400' : 'bg-emerald-500'
                  }`}></span>
                </div>

                <div className="flex flex-col">
                  <span className="text-slate-100 text-sm font-bold">
                    {member.name}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}