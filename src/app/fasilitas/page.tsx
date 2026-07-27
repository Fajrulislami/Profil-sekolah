import FasilitasHero from "@/components/sections/FasilitasHero";
import FasilitasCategory from "@/components/sections/FasilitasCategory";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export const metadata = {
  title: "Fasilitas Kami | Nama Sekolah Anda",
  description: "Eksplorasi infrastruktur dan fasilitas pendidikan modern yang kami siapkan untuk mendukung potensi siswa.",
};

export default function FasilitasPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* <Navbar /> */}
      
      {/* Panggil komponen Banner yang barusan kita buat */}
      <FasilitasHero/>
      
      {/* Panggil Komponen Bento Grid yang baru dibuat */}
      <FasilitasCategory />
      
      {/* Nanti komponen rincian fasilitas (Grid/Zig-zag) akan ditaruh di sini */}
      
      {/* <Footer /> */}
    </main>
  );
}