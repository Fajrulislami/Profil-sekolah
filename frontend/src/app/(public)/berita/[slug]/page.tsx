import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function DetailBeritaPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const berita = await prisma.berita.findUnique({
    where: { slug: resolvedParams.slug, status: 'PUBLISHED' }
  });

  if (!berita) {
    notFound();
  }

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
                <span>{new Date(berita.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
            </div>
          </header>

          {/* Gambar Hero */}
          {berita.imageUrl && (
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg bg-slate-200 flex items-center justify-center">
              <img 
                src={berita.imageUrl} 
                alt={berita.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Isi Konten */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-12">
            <div 
              className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:text-slate-900 prose-a:text-emerald-600 prose-img:rounded-xl whitespace-pre-wrap"
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
