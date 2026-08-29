"use client";

import { useState, useEffect } from "react";
export default function PrestasiGaleri() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<any | null>(null);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const res = await fetch('/api/v1/prestasi?public=true', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          // Hanya ambil prestasi yang memiliki foto
          const itemsWithImage = data.filter((item: any) => item.imageUrl);
          setGalleryItems(itemsWithImage);
        }
      } catch (error) {
        console.error("Gagal mengambil data prestasi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrestasi();
  }, []);

  const tabs = [
    { id: "all", label: "Semua Momen" },
    { id: "Akademik", label: "Sains & Akademik" },
    { id: "Robotika & Teknologi", label: "Robotika & Teknologi" },
    { id: "Tahfidz & Keagamaan", label: "Tahfidz & Keagamaan" },
    { id: "Olahraga & Seni", label: "Olahraga & Seni" },
  ];

  const filteredGallery =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="w-full py-24 lg:py-32 bg-white relative overflow-hidden font-sans border-b border-slate-200/70">
      
      {/* Background Soft Emerald Glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[300px] bg-emerald-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-emerald-300 shadow-sm w-max mb-6 transition-all duration-500">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase">
              Momen Bersejarah & Dokumentasi
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-6">
            Potret Kebanggaan di <br />
            <span className="inline-block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent font-black italic pb-1">
              Podium Kemenangan
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Menyimpan kenangan perjuangan tak ternilai, rasa syukur mendalam, dan rasa bangga atas setiap keringat yang terbayar lunas.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault(); // Mencegah behavior default jika ada
                  setActiveTab(tab.id);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-105"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 
          CONTAINER PENGUNCI TINGGI DITAMBAHKAN DI SINI 
          min-h-[800px] akan menahan layout agar tidak kolaps 
          saat filter hanya menampilkan 1 atau 2 gambar
        */}
        <div className="min-h-[800px] w-full">
          {filteredGallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-800 backdrop-blur-md shadow-sm">
                      {item.competitionName}
                    </span>
                  </div>

                  {/* Bottom Caption & Expand Icon */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs font-bold text-amber-300 mb-1">
                      Tahun {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Center Zoom Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center text-lg shadow-xl">
                      🔍
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500 font-medium">
              Tidak ada foto pada kategori ini.
            </div>
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in-up"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="relative h-96 sm:h-[450px] w-full bg-black">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                  {activeImage.competitionName}
                </span>
                <span className="text-xs text-slate-400">
                  Tahun {activeImage.year}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{activeImage.title}</h3>
              <p className="text-sm text-slate-300">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}