"use client";

import { useState, useMemo, useEffect } from "react";
export default function PrestasiDaftar() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [selectedLevel, setSelectedLevel] = useState<string>("semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [allAchievements, setAllAchievements] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const res = await fetch('/api/v1/prestasi?public=true', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setAllAchievements(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data prestasi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrestasi();
  }, []);

  const categories = [
    { id: "semua", label: "Semua Kategori", icon: "≡" },
    { id: "Sains & Riset", label: "Sains & Riset", icon: "🔬" },
    { id: "Tahfidz & Agama", label: "Tahfidz & Agama", icon: "📖" },
    { id: "Olahraga & Silat", label: "Olahraga & Silat", icon: "⚡" },
    { id: "Seni & Robotika", label: "Seni & Robotika", icon: "🎨" },
  ];

  const levels = [
    { id: "semua", label: "Semua Tingkat" },
    { id: "Internasional", label: "Internasional" },
    { id: "Nasional", label: "Nasional" },
    { id: "Provinsi", label: "Provinsi" },
    { id: "Kota/Kabupaten", label: "Kota / Daerah" },
  ];

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allAchievements.filter((item) => {
      const matchCategory = selectedCategory === "semua" || item.category === selectedCategory;
      const matchLevel = selectedLevel === "semua" || item.level === selectedLevel;
      const matchSearch = !query || 
                          (item.title && item.title.toLowerCase().includes(query)) || 
                          (item.recipient && item.recipient.toLowerCase().includes(query));
      return matchCategory && matchLevel && matchSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery, allAchievements]);

  return (
    <section className="w-full bg-[#0A101E] text-white min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === HEADER / JUDUL DIKEMBALIKAN === */}
        <div className="text-center flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-transparent mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="text-xs font-bold text-yellow-500 tracking-wider">
              DIREKTORI & ARSIP JUARA
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Daftar Prestasi & <br />
            <span className="text-yellow-500 italic">Rekam Jejak Kejuaraan</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Gunakan filter kategori, tingkat kejuaraan, atau pencarian langsung untuk menelusuri ratusan rekam jejak juara siswa dan santri kami.
          </p>
        </div>
        {/* ================================== */}

        {/* Search & Filter Section */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-yellow-500">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari prestasi, nama siswa, atau lomba..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0F1629] border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3 mb-6 border-b border-slate-800/60 pb-6">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all border ${
                    isActive
                      ? "bg-transparent text-yellow-400 border-yellow-400"
                      : "bg-[#0F1629] text-slate-400 border-transparent hover:border-slate-700"
                  }`}
                >
                  <span className={isActive ? "text-yellow-400" : "text-yellow-500"}>{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Levels & Counter */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-yellow-500 font-bold text-sm mr-2 uppercase">Tingkat:</span>
              {levels.map((lvl) => {
                const isActive = selectedLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id)}
                    className={`px-4 py-1.5 rounded-lg text-sm transition-all border ${
                      isActive
                        ? "bg-transparent text-yellow-400 border-yellow-400"
                        : "bg-[#0F1629] text-slate-400 border-transparent hover:bg-slate-800"
                    }`}
                  >
                    {lvl.label}
                  </button>
                );
              })}
            </div>
            <div className="text-yellow-500 font-bold text-sm">
              Menampilkan {filteredData.length} Prestasi
            </div>
          </div>
        </div>

        {/* 
          CARD CONTAINER (FIX UNTUK LAYAR MELOMPAT)
          min-h-[800px] akan mengunci area ini sehingga saat datanya 
          hanya sisa sedikit (misal 3 kartu), layar bagian bawah 
          tidak akan tiba-tiba tertarik ke atas.
        */}
        <div className="min-h-[800px] w-full pt-4">
          {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-[#121B2D] rounded-2xl border border-slate-800 overflow-hidden flex flex-col animate-pulse">
                <div className="relative h-56 w-full bg-slate-700" />
                <div className="p-6 flex-1 flex flex-col space-y-3">
                  <div className="h-4 w-3/4 bg-slate-600 rounded" />
                  <div className="h-3 w-1/2 bg-slate-600 rounded" />
                  <div className="h-3 w-full bg-slate-600 rounded" />
                  <div className="h-3 w-2/3 bg-slate-600 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#121B2D] rounded-2xl border border-slate-800 overflow-hidden flex flex-col"
                >
                  <div className="relative h-56 w-full bg-slate-800">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title || "Prestasi"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-[#0F1629]">
                        <span className="text-sm font-medium">Tanpa Gambar</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-[#6B4B18]/90 text-yellow-100 px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1 border border-yellow-600/50">
                      {item.medal}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#0F1629]/90 text-yellow-400 px-3 py-1 rounded-md text-xs font-bold uppercase border border-slate-700">
                      {item.level}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-yellow-500 text-xs font-bold mb-3 flex items-center gap-2">
                      <span>📄</span> Tahun {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              Tidak ada prestasi yang cocok dengan pencarian Anda.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}