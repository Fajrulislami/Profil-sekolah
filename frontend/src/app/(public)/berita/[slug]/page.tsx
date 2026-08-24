import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Dummy data generator berdasarkan slug
const getBeritaBySlug = (slug: string) => {
  return {
    title: "Prestasi Membanggakan: Juara 1 Olimpiade Sains Nasional 2026",
    category: "Prestasi",
    author: "Tim Humas",
    date: "20 Agustus 2026",
    readTime: "4 Menit Baca",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop",
    content: `
      <p>Prestasi membanggakan kembali ditorehkan oleh siswa-siswi terbaik kita. Dalam ajang Olimpiade Sains Nasional (OSN) tingkat Nasional tahun 2026 yang diselenggarakan di Jakarta, kontingen sekolah kita berhasil meraih Medali Emas untuk bidang Fisika Terapan.</p>
      
      <p>Kompetisi bergengsi tahunan ini diikuti oleh ribuan peserta dari seluruh provinsi di Indonesia. Persaingan yang sangat ketat tidak menyurutkan semangat tim perwakilan kita. Setelah melalui babak penyisihan, semifinal yang menguras tenaga, hingga babak final yang menegangkan, siswa kita membuktikan kualitas dan kedalaman pemahaman materi sains mereka.</p>
      
      <p><strong>Dedikasi dan Persiapan Matang</strong></p>
      <p>Keberhasilan ini tentunya bukan diraih dalam semalam. Persiapan intensif telah dilakukan sejak enam bulan lalu di bawah bimbingan guru-guru ahli. Program karantina khusus, simulasi ujian, hingga dukungan penuh dari pihak sekolah dan orang tua menjadi pilar utama kesuksesan ini.</p>
      
      <blockquote>
        "Ini adalah bukti nyata bahwa dengan tekad yang kuat, fasilitas laboratorium yang memadai, dan sistem pengajaran yang tepat, anak-anak kita mampu bersaing di level tertinggi," ujar Bapak Kepala Sekolah saat menyambut kedatangan tim juara.
      </blockquote>
      
      <p>Kami berharap pencapaian luar biasa ini dapat menjadi motivasi dan inspirasi bagi seluruh siswa lainnya untuk terus menggali potensi diri, tidak mudah menyerah, dan berani bermimpi besar. Sekolah akan terus berkomitmen menyediakan wadah terbaik bagi pengembangan bakat akademik maupun non-akademik siswa.</p>
    `
  };
};

export default function DetailBeritaPage({ params }: { params: { slug: string } }) {
  const berita = getBeritaBySlug(params.slug);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link 
              href="/berita"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Daftar Berita
            </Link>
          </div>

          {/* Header Artikel */}
          <header className="mb-10 space-y-6 text-center">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              {berita.category}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              {berita.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 pt-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{berita.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{berita.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{berita.readTime}</span>
              </div>
            </div>
          </header>

          {/* Gambar Hero */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img 
              src={berita.image} 
              alt={berita.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Isi Konten */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-12">
            <div 
              className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:text-slate-900 prose-a:text-emerald-600 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: berita.content }}
            />
          </div>

          {/* Footer Artikel & Share (Opsional) */}
          <div className="flex items-center justify-between py-6 border-t border-slate-200">
            <p className="text-sm font-medium text-slate-500">Bagikan artikel ini:</p>
            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-300 transition-colors shadow-sm">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
}
