import Navbar from "@/components/layout/Navbar";

import VisiMisiSection from "@/components/sections/VisiMisiSection";
import TentangSection from "@/components/sections/TentangSection";
import SejarahSection from "@/components/sections/SejarahSection";
import SambutanSection from "@/components/sections/SambutanSection";
import LegalitasSection from "@/components/sections/LegalitasSection";



// Import Footer jika ada, misal: import Footer from "@/components/layout/Footer";

export default function TentangPage() {
  return (
    <>
      {/* Jika Navbar Anda tidak dipasang global di layout.tsx, panggil di sini */}
      <Navbar />
      
      {/* Beri pembungkus div dengan padding top (pt-16 atau pt-20) 
          supaya konten tidak tertutup oleh Navbar yang posisinya fixed */}
      <div className="pt-16 md:pt-20">
        <TentangSection />
        <VisiMisiSection />
        <SejarahSection />
        <SambutanSection/>
        <LegalitasSection/>
        {/* Anda bisa menambahkan section lain di bawahnya khusus untuk halaman tentang, 
            misalnya: <VisiMisiSection />, <StrukturOrganisasi />, dll */}
      </div>

      {/* <Footer /> */}
    </>
  );
}