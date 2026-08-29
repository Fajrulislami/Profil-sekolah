import type { Metadata } from "next";
import PrestasiHero from "@/components/pages/prestasi/PrestasiHero";
import PrestasiRingkasan from "@/components/pages/prestasi/PrestasiRingkasan";
import PrestasiUnggulan from "@/components/pages/prestasi/PrestasiUnggulan";
import PrestasiDaftar from "@/components/pages/prestasi/PrestasiDaftar";
import PrestasiGaleri from "@/components/pages/prestasi/PrestasiGaleri";
import PrestasiCTA from "@/components/pages/prestasi/PrestasiCTA";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Galeri & Rekam Jejak Prestasi | Sekolah Madani & Pesantren Rabbani",
  description:
    "Eksplorasi rekam jejak juara siswa dan santri Sekolah Madani dalam bidang sains, tahfidz Al-Qur'an, robotika, olahraga, dan seni di tingkat daerah, nasional, hingga internasional.",
};

export default function PrestasiPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero / Header (Background: Putih / Terang) */}
      <PrestasiHero />

      {/* 2. Ringkasan Prestasi / Pilar Pembinaan (Background: Gelap) */}
      <PrestasiRingkasan />

      {/* 3. Prestasi Unggulan / Spotlight (Background: Terang) */}
      <PrestasiUnggulan />

      {/* 4. Filter & Daftar Prestasi Lengkap (Background: Gelap) */}
      <PrestasiDaftar />

      {/* 5. Dokumentasi / Galeri Foto Momen Juara (Background: Terang) */}
      <PrestasiGaleri />

      {/* 6. CTA / Penutup & Informasi Beasiswa (Background: Gelap / Emerald Gradient) */}
      <PrestasiCTA />
    </main>
  );
}
