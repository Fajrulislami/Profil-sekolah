import type { Metadata } from "next";

// 1. PASTIKAN BARIS INI ADA (Untuk mengambil font Inter dari Google)
import { Inter } from "next/font/google"; 

import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; 

// 2. PASTIKAN BARIS INI ADA (Untuk mendefinisikan variabel 'inter')
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sekolah Madani | Generasi Rabbani",
  description: "Website resmi Sekolah Madani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Sekarang Next.js sudah tahu apa itu 'inter.className' */}
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        
        <Navbar />

        <main className="flex-grow"> 
          {children} 
        </main>

        <Footer />
        
      </body>
    </html>
  );
}