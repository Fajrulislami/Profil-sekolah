import HeroSection from "@/components/sections/HeroSection";
import JenjangSection from "@/components/sections/JenjangSection";
import MottoSection from "@/components/sections/MottoSection";
import ContactSection from "@/components/sections/ContactSection";
import ProfilSection from "@/components/sections/ProfilSection";
import FasilitasSection from "@/components/sections/FasilitasSection";
import PrestasiSection from "@/components/sections/PrestasiSection";
import BeritaSection from "@/components/sections/BeritaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* 1. Komponen Hero Section (Paling Atas) */}
      <HeroSection />

      {/* 2. Komponen Moto Sekolah (Tepat di bawah Hero) */}
      <MottoSection />

      {/* 3. Komponen profil singkat (Tepat di bawah Hero) */}
      <ProfilSection/>

      {/* 3. Komponen Jenjang Sekolah (Di bawah Moto) */}
      <JenjangSection />

      {/* 4. Komponen Fasilitas (Di bawah Jenjang) */}
      <FasilitasSection />

      {/* 5. Komponen Prestasi (Di bawah Fasilitas) */}
      <PrestasiSection />

      {/* 6. Komponen Berita (Di bawah Prestasi) */}
      <BeritaSection />

      {/* 7. Komponen Kontak (Paling Bawah) */}
      <ContactSection />  
      

      
    </main>
  );
}