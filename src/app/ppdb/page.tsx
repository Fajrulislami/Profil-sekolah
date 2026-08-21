import PPDBHero from "@/components/pages/ppdb/PPDBHero";
import PPDBJalur from "@/components/pages/ppdb/PPDBJalur";
import PPDBAlur from "@/components/pages/ppdb/PPDBAlur";
import PPDBPersyaratan from "@/components/pages/ppdb/PPDBPersyaratan";
import PPDBJadwalBiaya from "@/components/pages/ppdb/PPDBJadwalBiaya";
import PPDBFAQ from "@/components/pages/ppdb/PPDBFAQ";
import PPDBCTA from "@/components/pages/ppdb/PPDBCTA";

export const metadata = {
  title: "PPDB 2027/2028 | Penerimaan Peserta Didik Baru - Sekolah Madani",
  description: "Informasi resmi pendaftaran peserta didik baru TP 2027/2028 untuk jenjang TK, SD, SMP, dan Pesantren Rabbani. Tersedia beasiswa tahfidz dan jalur prestasi.",
};

export default function PPDBPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <PPDBHero />
      <PPDBJalur />
      <PPDBAlur />
      <PPDBPersyaratan />
      <PPDBJadwalBiaya />
      <PPDBFAQ />
      <PPDBCTA />
    </main>
  );
}
