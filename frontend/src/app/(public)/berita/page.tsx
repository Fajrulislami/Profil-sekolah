import BeritaHeader from "@/components/pages/berita/BeritaHeader";
import BeritaUnggulan from "@/components/pages/berita/BeritaUnggulan";
import DaftarBeritaTerbaru from "@/components/pages/berita/DaftarBeritaTerbaru";
import BeritaCTA from "@/components/pages/berita/BeritaCTA";

export const metadata = {
  title: "Berita & Informasi | Nama Sekolah Anda",
  description: "Eksplorasi berita terkini, pengumuman resmi, dan dokumentasi kegiatan sekolah.",
};

export default function BeritaPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <BeritaHeader />
      <BeritaUnggulan />
      <DaftarBeritaTerbaru />
      <BeritaCTA />
    </main>
  );
}
