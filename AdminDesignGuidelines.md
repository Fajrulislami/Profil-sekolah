# Panduan Desain & UI/UX Halaman Admin (CMS)

Dokumen ini berisi aturan baku untuk merancang dan membangun antarmuka (User Interface) pada halaman Admin (CMS Dashboard) website profil sekolah. 

Tujuan utama dari desain admin ini adalah menciptakan antarmuka yang **bersih (clean), modern, simpel, dan sangat fungsional** tanpa ornamen yang mengganggu fokus pengguna saat mengelola data.

---

## 1. Prinsip Desain Utama
- **Fungsionalitas di atas segalanya**: Desain harus memudahkan admin membaca data panjang dan mengisi formulir dengan cepat.
- **Minimalis & Bersih**: Hindari elemen dekoratif yang tidak perlu.
- **Konsistensi**: Gunakan pola yang sama untuk setiap tabel, form, dan tombol di seluruh modul.

---

## 2. Aturan Visual & Tata Letak

### A. Tipografi (Font)
- **Font Family**: Wajib menggunakan **Inter**. Font ini memberikan kesan modern, rapi, dan tingkat keterbacaan yang sangat tinggi untuk data tabular dan formulir.
- **Warna Teks**: Gunakan warna abu-abu gelap ke hitam (contoh: `text-slate-800` untuk teks utama, `text-slate-500` untuk teks sekunder/bantuan). Hindari teks hitam pekat `#000000`.

### B. Warna Latar Belakang (Background)
- **Background Utama (Area Kerja)**: Wajib menggunakan warna putih bersih (`bg-white` atau `#FFFFFF`). Ini adalah instruksi ketat untuk menjaga kesederhanaan.
- **Background Sekunder (Pemisah)**: Jika membutuhkan pemisah antara area konten dan sidebar/navbar, gunakan abu-abu sangat terang (contoh: `bg-slate-50`).
- **TIDAK ADA DARK MODE**: Halaman admin akan dikunci pada mode terang (Light Mode) untuk menjaga konsistensi penginputan data.

### C. Ikonografi
- **Standar Ikon**: Gunakan ikon garis lurus dan sederhana seperti **Lucide Icons** atau **Heroicons** (outline).
- **Larangan**: ❌ **DILARANG KERAS** menggunakan ikon-ikon bertema AI (seperti robot, percikan/sparkles, dll) atau ikon ilustratif yang rumit. Ikon harus murni representasi aksi (contoh: ikon pensil untuk Edit, ikon tempat sampah untuk Hapus).

### D. Interaksi & Animasi
- **Hover Efek**: ❌ **DILARANG** menggunakan efek hover yang berlebihan (seperti tombol yang membesar tiba-tiba, animasi melompat, atau transisi warna yang lambat).
- **Aturan Hover**: Efek hover hanya boleh berupa perubahan warna sedikit lebih gelap/terang pada background tombol, atau penambahan efek *shadow* (bayangan) yang sangat halus.
- Transisi harus cepat dan tegas.

### E. Prinsip Aksesibilitas Awam (Foolproof UI)
- **Bahasa Manusia (Tanpa Jargon)**: Dilarang keras menggunakan istilah teknis IT (seperti "Slug", "Query", "Render", "Boolean"). Gunakan bahasa sehari-hari (contoh: "Tautan URL", "Simpan Teks").
- **Teks Bantuan (Helper Text) Wajib**: Setiap kotak input formulir wajib memiliki penjelasan kecil di bawahnya mengenai apa yang harus diisi dan batasannya (contoh: *Format JPG/PNG, maksimal 2MB*).
- **Hierarki Aksi Jelas**: Dalam satu tampilan, hanya boleh ada **SATU tombol aksi utama** yang paling mencolok (misal: tombol Hijau "Simpan"). Tombol aksi sekunder (misal: "Batal") harus berupa teks pudar atau sekadar bergaris luar (outline) agar pengguna awam tidak bingung harus klik yang mana.
- **Konfirmasi Hapus Deskriptif**: Tombol hapus harus selalu memunculkan pop-up konfirmasi yang menyebutkan secara spesifik apa yang akan dihapus (contoh: "Apakah Anda yakin ingin menghapus berita 'Juara OSN' ini secara permanen?").

---

## 3. Fitur Utama Halaman Admin

Struktur CMS Admin akan terdiri dari fitur-fitur wajib berikut:

1. **Autentikasi (Sistem Login)**
   - Halaman form login yang aman (Email & Password).
   - Terlindungi dari akses publik.

2. **Dashboard Utama (Overview)**
   - Menampilkan ringkasan data penting secara cepat (misal: jumlah berita aktif, total pendaftar PPDB, pesan belum dibaca).

3. **Manajemen Konten (CRUD - Create, Read, Update, Delete)**
   - Antarmuka tabel data dan formulir untuk mengelola modul:
     - **Berita & Informasi**
     - **Prestasi Siswa**
     - **Fasilitas Sekolah**
     - **PPDB (Jalur, Persyaratan, Jadwal, FAQ, dll)**

4. **Manajemen Pesan Masuk (Inbox)**
   - Tabel sederhana untuk membaca pesan dari pengunjung website (form kontak & konsultasi).

5. **Pengaturan Akun (User Management)**
   - Pengelolaan akses staf/admin lainnya (Tambah akun, reset password).

---

## 4. Standar Komponen Antarmuka (UI Components)

Untuk menjaga keseragaman, komponen berikut harus memiliki desain tunggal yang digunakan berulang-ulang (Reusable):

- **Sidebar Navigasi**: Sisi kiri layar, berlatar putih atau abu-abu sangat terang. Menampilkan menu modul dan tombol logout di bawah.
- **Tabel Data (Data Table)**:
  - Header tabel yang jelas dengan background abu-abu sangat terang (`bg-slate-50`).
  - Harus ada fitur pencarian (Search Bar).
  - Kolom "Aksi" berisi ikon sederhana untuk Edit dan Hapus.
- **Formulir (Forms)**:
  - Label input yang jelas.
  - Validasi error dengan teks merah (`text-red-500`) di bawah kotak input.
  - Tanda asterisk (*) untuk kolom yang wajib diisi.
- **Modal (Dialog Pop-up)**:
  - Digunakan untuk konfirmasi kritis, seperti "Apakah Anda yakin ingin menghapus data ini?".
  - Background layar belakang digelapkan (`backdrop-blur` atau overlay hitam transparan).
