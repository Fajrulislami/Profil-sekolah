"use client";

import { useState, useEffect, useRef } from "react";

const categories = [
  { id: "akademik", label: "Akademik" },
  { id: "olahraga", label: "Olahraga & Kesehatan" },
  { id: "keagamaan", label: "Keagamaan" },
  { id: "kreativitas", label: "Kreativitas & Teknologi" },
  { id: "pendukung", label: "Fasilitas Pendukung" },
];

// Struktur data baru dengan spesifikasi lengkap sesuai request
interface FacilityItem {
  id: number;
  title: string;
  desc: string;
  fungsi: string;
  kapasitas: string;
  lokasi: string;
  digunakanOleh: string;
  image: string;
  category: string;
}

export default function FasilitasCategory() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  
  const [headerInView, setHeaderInView] = useState(false);
  const [tabsInView, setTabsInView] = useState(false);
  const [gridInView, setGridInView] = useState(false);

  // State for facilities fetched from API
  const [facilities, setFacilities] = useState<FacilityItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch facilities from backend
  const fetchFacilities = async () => {
    try {
      const res = await fetch('/api/v1/fasilitas', { cache: 'no-store' });
      if (!res.ok) {
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      const mapped = data.map((item: any) => ({
        id: item.id,
        title: item.nama,
        desc: item.deskripsi,
        fungsi: item.fungsiUtama,
        kapasitas: item.kapasitas,
        lokasi: item.lokasi,
        digunakanOleh: item.pengguna,
        image: item.imageUrl ?? '',
        category: item.category ?? '',
      }));
      setFacilities(mapped);
    } catch (error) {
      console.error('Error fetching fasilitas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedFacility) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedFacility]);

  useEffect(() => {
    const createObserver = (setView: (val: boolean) => void) => {
      return new IntersectionObserver(
        ([entry]) => { setView(entry.isIntersecting); },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
    };

    const headerObs = createObserver(setHeaderInView);
    const tabsObs = createObserver(setTabsInView);
    const gridObs = createObserver(setGridInView);

    if (headerRef.current) headerObs.observe(headerRef.current);
    if (tabsRef.current) tabsObs.observe(tabsRef.current);
    if (gridRef.current) gridObs.observe(gridRef.current);

    return () => {
      headerObs.disconnect();
      tabsObs.disconnect();
      gridObs.disconnect();
    };
  }, []);

  // Safeguard jika data kategori yang diklik kosong/belum diisi data dummy
  const activeItems = isLoading ? [] : facilities.filter(f => f.category === activeTab);

  return (
    <section className="w-full bg-slate-100 py-24 lg:py-32 overflow-visible relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div ref={headerRef} className="text-center mb-16 flex flex-col items-center justify-center">
          <h2 
            className={`text-4xl md:text-5xl font-black text-[#0B1120] tracking-tight mb-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              headerInView ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-12 filter blur-[2px]"
            }`}
          >
            Kategori Fasilitas
          </h2>
          <p 
            className={`text-slate-500 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              headerInView ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-10 filter blur-[1px]"
            }`}
          >
            Infrastruktur berstandar tinggi yang dikelompokkan secara sistematis demi kenyamanan dan efisiensi belajar mengajar.
          </p>
        </div>

        {/* TABS NAVIGATION */}
        <div 
          ref={tabsRef}
          className={`flex justify-center mb-16 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            tabsInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-98"
          }`}
        >
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-sm max-w-full overflow-x-auto hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-6 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === category.id
                    ? "text-white bg-[#0B1120] shadow-md shadow-slate-900/20"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTAINER GRID UTAMA */}
        <div ref={gridRef} className="w-full">
          {activeItems.length > 0 ? (
            <div 
              key={activeTab} 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 animate-tab-fade"
            >
              {activeItems.map((item, index) => (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedFacility(item)}
                  className="group bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl flex flex-col h-full cursor-pointer transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transitionDuration: "1000ms",
                    transitionDelay: gridInView ? `${index * 75}ms` : "0ms",
                    transform: gridInView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.97)",
                    opacity: gridInView ? 1 : 0,
                  }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200 flex items-center justify-center">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-750 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-slate-400 text-sm font-medium">Tidak ada foto</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                  </div>

                  <div className="p-6 flex items-center justify-between bg-white mt-auto">
                    <h3 className="text-base font-bold text-[#0B1120] tracking-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                      {item.title}
                    </h3>
                    <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[#0B1120] font-bold text-xs group-hover:bg-[#0B1120] group-hover:text-white transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 font-medium text-sm">
              {isLoading ? "Memuat data..." : "Belum ada data fasilitas untuk kategori ini."}
            </div>
          )}
        </div>

      </div>

      {/* ========================================================= */}
      {/* JENDELA POP-UP DETAIL FASILITAS BARU DENGAN SPESIFIKASI   */}
      {/* ========================================================= */}
      {selectedFacility && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md animate-backdrop-fade"
          onClick={() => setSelectedFacility(null)}
        >
          <div 
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-modal-scale max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Foto Atas */}
            <div className="relative h-44 sm:h-52 w-full bg-slate-100 flex-shrink-0 overflow-hidden flex items-center justify-center">
              {selectedFacility.image ? (
                <img 
                  src={selectedFacility.image} 
                  alt={selectedFacility.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-slate-400 text-sm font-medium">Tidak ada foto</span>
              )}
              <button 
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center font-bold text-xs hover:bg-slate-900 transition-colors shadow-md z-10"
              >
                ✕
              </button>
            </div>

            {/* Konten Detail Terstruktur */}
            <div className="p-6 sm:p-7 flex flex-col overflow-y-auto style-scrollbar">
              
              {/* 1. Nama Fasilitas */}
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1120] tracking-tight mb-2">
                {selectedFacility.title}
              </h3>

              {/* 2. Deskripsi */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-5">
                {selectedFacility.desc}
              </p>
              
              {/* List Detail Spesifikasi Baru */}
              <div className="space-y-4 border-t border-slate-100 pt-4 text-xs sm:text-sm">
                
                {/* 3. Fungsi */}
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Fungsi Utama
                  </span>
                  <p className="text-slate-700 font-semibold leading-relaxed">
                    {selectedFacility.fungsi}
                  </p>
                </div>

                {/* Grid untuk Kapasitas & Lokasi */}
                <div className="grid grid-cols-2 gap-4">
                  {/* 4. Kapasitas */}
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Kapasitas
                    </span>
                    <p className="text-slate-700 font-bold">
                      {selectedFacility.kapasitas}
                    </p>
                  </div>

                  {/* 5. Lokasi */}
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Lokasi Gedung
                    </span>
                    <p className="text-slate-700 font-bold">
                      {selectedFacility.lokasi}
                    </p>
                  </div>
                </div>

                {/* 6. Digunakan Oleh */}
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Digunakan Oleh
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                    {selectedFacility.digunakanOleh}
                  </span>
                </div>

              </div>
              
              {/* Tombol Aksi Bawah */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex justify-end flex-shrink-0">
                <button 
                  onClick={() => setSelectedFacility(null)}
                  className="px-5 py-2 bg-[#0B1120] text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-md"
                >
                  Tutup Detail
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ENGINE KEYFRAMES */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .style-scrollbar::-webkit-scrollbar { width: 4px; }
        .style-scrollbar::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 4px; }

        .animate-tab-fade {
          animation: tabFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes tabFade {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-backdrop-fade {
          animation: backdropFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes backdropFade {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(12px); }
        }

        .animate-modal-scale {
          animation: modalScale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes modalScale {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </section>
  );
}