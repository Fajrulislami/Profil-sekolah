# Panduan Sistem Desain UI/UX (Design Guidelines)

Dokumen ini berisi standar aturan visual untuk memastikan konsistensi desain di seluruh halaman website, mencakup tipografi, struktur judul, pewarnaan bergantian (selang-seling), tombol CTA, dan ikonografi.

## 1. Tipografi (Font)
Secara keseluruhan, website menggunakan gaya font **Sans-Serif** yang modern, bersih, dan tegas.
* **Judul Utama (Headings):** Gunakan ketebalan ekstra (`font-black`), jarak antar huruf yang rapat (`tracking-tighter`), dan jarak antar baris yang padat (`leading-[1.1]` atau `leading-tight`).
* **Teks Paragraf (Body):** Gunakan font reguler atau medium dengan ukuran yang mudah dibaca (`text-base` atau `text-lg`) dan jarak baris yang nyaman (`leading-relaxed`).

## 2. Struktur Judul & Badge Kapsul (Wajib)
Setiap awal bagian utama (*section*) **wajib diawali dengan elemen Badge Kapsul** tepat di atas judul utama. 
* Kapsul ini berfungsi sebagai label penanda (*eyebrow text*) dari section tersebut.
* **Aturan Desain Kapsul:** Bentuk melengkung penuh (`rounded-full`), berisi titik/indikator kecil (opsional beranimasi `animate-pulse`), dan teks berhuruf kapital (`uppercase`) dengan ukuran kecil (`text-xs` atau `text-sm`).
* Warna badge ini harus selalu mengikuti aturan tema warna latar belakang (lihat bagian 3).

## 3. Aturan Latar Belakang & Tema Warna (Selang-seling)
Untuk memberikan ritme visual yang dinamis antar bagian (*section*), gunakan pola selang-seling antara tema Terang dan Gelap dengan aturan warna yang ketat:

### A. Tema Terang (Light Section)
Gunakan tema ini secara bergantian dengan tema gelap.
* **Background Utama:** Putih murni (`bg-white`).
* **Badge Kapsul (Awal Judul):** Tema Hijau. Background putih (`bg-white`), border hijau (`border-emerald-300`), dan teks hijau (`text-emerald-700`).
* **Warna Teks Judul (Gradien):** Gunakan gradien Hijau ke Teal.
  * *Class Tailwind:* `bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500`
* **Warna Teks Paragraf:** Abu-abu gelap (`text-slate-600`).

### B. Tema Gelap (Dark Section)
Gunakan tema ini sebagai penyelang (pemisah) antar bagian terang.
* **Background Utama:** Abu-abu sangat gelap atau navy pekat (`bg-slate-900` atau `bg-slate-950`).
* **Badge Kapsul (Awal Judul):** Tema Kuning/Emas. Background gelap (`bg-slate-950/80`), border kuning/emas (`border-amber-400/40`), dan teks kuning (`text-amber-400`).
* **Warna Teks Judul (Gradien):** Gunakan gradien Kuning ke Emas (Amber).
  * *Class Tailwind:* `bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500`
* **Warna Teks Paragraf:** Abu-abu terang (`text-slate-300`).

## 4. Tombol Call to Action (CTA)
Desain tombol harus terlihat tegas dan langsung pada intinya tanpa elemen visual yang tidak perlu.
* **TIDAK ADA Ikon Panah:** Dilarang menggunakan ikon panah (arah kanan/kiri/dsb) di dalam tombol CTA.
* **Fokus pada Teks:** Gunakan copywriting yang jelas dan tebal (`font-bold` atau `font-black`).
* **Contoh Desain:** Tombol hijau (`bg-emerald-500`) dengan teks gelap (`text-slate-950`).
* **Efek Interaksi:** Gunakan efek hover sederhana seperti perubahan skala perlahan (`hover:-translate-y-0.5`) dan bayangan (`shadow-xl`).

## 5. Aturan Ikonografi
Ikon digunakan untuk memperjelas konteks, bukan untuk sekadar dekorasi.
* **TIDAK ADA Ikon AI:** Dilarang menggunakan ikon yang merepresentasikan "Kecerdasan Buatan" (seperti ikon *sparkles* ✨, bintang sihir, otak robotik, atau tongkat sulap).
* **Fungsional & Kontekstual:** Gunakan ikon yang relevan dengan dunia pendidikan dan fitur sekolah (misalnya: buku, piala, toga, kalender, gedung, dsb).
* **Konsistensi Ketebalan:** Gunakan gaya ikon bergaris (*outline stroke*) dengan ketebalan 2px (`stroke-width="2"`).