# Panduan & Spesifikasi Sistem CMS (CMS Guidelines & Specification)

Dokumen ini adalah acuan standar teknis dan fungsional untuk pengembangan **Admin CMS Dashboard** pada website profil sekolah. Panduan ini dirancang untuk memastikan **semua konten pada halaman publik yang sudah ada dapat dikelola secara dinamis** tanpa ada fitur yang hilang (*lost features*) dan tanpa penambahan fitur liar yang tidak diperlukan (*scope creep*).

---

## 1. Prinsip & Ruang Lingkup Utama (Core Scope)

1. **Fokus Tunggal:** Membangun antarmuka administrasi internal (`/admin`) untuk mengelola seluruh data dinamis website profil sekolah.
2. **Kesesuaian 1:1 dengan Landing Page:** Setiap entitas di database dan panel admin harus merepresentasikan komponen visual yang sudah aktif di halaman publik (Beranda, Berita, Prestasi, Fasilitas, Jenjang, Tentang Kami, dan Kontak).
3. **Pemisahan Hak Akses:** Halaman `/admin/*` wajib terlindungi autentikasi sesi admin dan tidak dapat diakses oleh publik.

---

## 2. Pemetaan Modul CMS ke Halaman Publik (Data Mapping)

Berikut adalah pemetaan data yang wajib ada di CMS agar sesuai persis dengan komponen frontend saat ini:

### 📰 A. Modul Berita & Informasi (News Management)
*Menyuplai: `BeritaSection` (Beranda), `BeritaUnggulan`, `DaftarBeritaTerbaru`, dan detail berita.*
* **Field yang Dikelola:**
  - `Judul Berita` (String, max 255 karakter)
  - `Slug URL` (String unik, otomatis dari judul)
  - `Kategori` (Enum: `Kegiatan`, `Prestasi`, `Informasi`, `Pengumuman`)
  - `Ringkasan / Excerpt` (Text, 2-3 kalimat untuk preview kartu)
  - `Konten Lengkap` (Rich Text / Markdown untuk halaman baca artikel)
  - `Foto Sampul / Image URL` (String URL / Path gambar)
  - `Penulis / Author` (String, contoh: "Humas", "Kesiswaan", "Kurikulum")
  - `Waktu Baca` (String, contoh: "4 min baca")
  - `Status Sorotan / isFeatured` (Boolean: jika `true`, masuk ke Bento Grid Berita Unggulan)
  - `Status Publikasi` (Enum: `Draft`, `Published`)
  - `Tanggal Terbit` (DateTime)

---

### 🏆 B. Modul Prestasi & Hall of Fame (Achievements Management)
*Menyuplai: `PrestasiSection` (Beranda), `PrestasiRingkasan`, `PrestasiUnggulan`, `PrestasiDaftar`, `PrestasiGaleri`.*
* **Field yang Dikelola:**
  - `Nama Prestasi / Judul` (String, contoh: "Juara 1 Lomba Robotika Nasional")
  - `Nama Siswa / Tim` (String, contoh: "Muhammad Farhan & Tim")
  - `Nama Ajang / Kompetisi` (String, contoh: "Olimpiade Sains Nasional (OSN)")
  - `Tingkat / Level` (Enum: `Internasional`, `Nasional`, `Provinsi`, `Kota/Kabupaten`)
  - `Kategori Bidang` (Enum: `Akademik`, `Tahfidz & Keagamaan`, `Robotika & Teknologi`, `Olahraga & Seni`)
  - `Jenis Medali / Juara` (Enum: `Emas`, `Perak`, `Perunggu`, `Juara 1`, `Juara 2`, `Juara 3`, `Harapan`)
  - `Tahun Perolehan` (Integer, contoh: 2026)
  - `Foto Dokumentasi / Sertifikat` (String URL gambar)
  - `Deskripsi Singkat` (Text)
  - `Status Unggulan` (Boolean: ditampilkan di card utama/Hall of Fame)

---

### 🏢 C. Modul Fasilitas Sekolah (Facilities Management)
*Menyuplai: `FasilitasSection` (Beranda), `FasilitasCategory` (Halaman Fasilitas), `FasilitasSD`, `FasilitasSMP`.*
* **Field yang Dikelola:**
  - `Nama Fasilitas` (String, contoh: "Laboratorium Komputer & AI", "Asrama Putra Rabbani")
  - `Kategori Fasilitas` (Enum: `Akademik & Kelas`, `Laboratorium & Riset`, `Olahraga & Seni`, `Asrama & Ibadah`, `Penunjang & Medis`)
  - `Deskripsi Fasilitas` (Text)
  - `Foto Utama & Galeri` (String URL gambar)
  - `Spesifikasi / Keunggulan` (Array of Strings / JSON, contoh: ["Kapasitas 40 Siswa", "Full AC", "Internet 1 Gbps"])
  - `Status Aktif` (Boolean)

---

### 📊 D. Modul Data Profil & Statistik Sekolah (School Profile & Counters)
*Menyuplai: Counter angka di `HeroSection`, `PrestasiRingkasan`, `ProfilSection`, `SambutanSection`.*
* **Field yang Dikelola:**
  - `Statistik Utama`:
    - Total Siswa Aktif (Number, contoh: 1250)
    - Total Prestasi / Penghargaan (Number, contoh: 340)
    - Guru & Tenaga Pendidik (Number, contoh: 85)
    - Nilai Akreditasi (String, contoh: "A (Unggul)")
  - `Sambutan Kepala Sekolah`: Nama, Gelar, Foto, Teks Sambutan.
  - `Visi & Misi`: Teks Visi, Daftar Butir Misi.

---

### 📬 E. Modul Pesan Masuk & Konsultasi (Inbox & Consultation Leads)
*Menampung input dari: `ContactSection` (Beranda), `BeritaCTA`, `PrestasiCTA`, dan form konsultasi PPDB.*
* **Field yang Dikelola:**
  - `Nama Pengirim` (String)
  - `Email` (String)
  - `Nomor WhatsApp / HP` (String)
  - `Subjek / Tipe Layanan` (Enum: `Konsultasi PPDB`, `Pertanyaan Umum`, `Konfirmasi Berita/Humas`, `Langganan Buletin`)
  - `Isi Pesan` (Text)
  - `Status Baca / isRead` (Boolean)
  - `Waktu Dikirim` (DateTime)

---

### 🟢 G. Modul PPDB (Penerimaan Peserta Didik Baru)
*Menyuplai: `PPDBHero`, `PPDBJalur`, `PPDBAlur`, `PPDBPersyaratan`, `PPDBJadwalBiaya`, `PPDBFAQ`, `PPDBCTA`.*
* **Field yang Dikelola:**
  - **Jalur Pendaftaran** (array of objects):
    - `label` (Enum: `TK`, `SD`, `SMP`, `Pesantren`)
    - `title` (String)
    - `imageUrl` (String URL)
    - `ageRequirement` (String, contoh: "Usia minimal 4 tahun …")
    - `info` (String, deskripsi singkat proses seleksi – bebas tekanan)
    - `documents` (Array of Strings, urutan nomor dokumen yang harus dipersiapkan)
    - `pdfFile` (String URL ke file `/downloads/syarat-ppdb-*.pdf`)
    - `waMessage` (String, template pesan WhatsApp untuk pertanyaan lanjutan)
  - **Alur Pendaftaran** (rich text / markdown yang dapat di‑edit, menampilkan tahapan timeline).
  - **Persyaratan Umum** (text block yang dapat di‑update, termasuk syarat usia, info proses, dll.).
  - **Jadwal & Biaya** (struktur data):
    - `waves` (array of objects) – setiap gelombang memiliki `name`, `period`, `status`, `statusColor`, `benefit`.
    - `feeComponents` (array) – nama komponen biaya dan catatan.
  - **FAQ** (array of `{q:string, a:string}`) – pertanyaan umum PPDB.
  - **CTA Form Registrasi Awal** (field yang ada di `PPDBCTA`):
    - `studentName`, `jenjang`, `parentName` (opsional), `whatsapp`.
    - **Status Kirim** (boolean) untuk menandai pengiriman.
  - **Download Brosur Biaya** (PDF) – link ke `/downloads/brosur-biaya.pdf`.

**Catatan Hak Akses:** 
- Tambahkan peran baru `AdminPPDB` pada **Modul Pengguna Admin** (lihat bagian F). Pengguna dengan peran ini dapat **CRUD** semua data di modul G, namun tidak memiliki akses ke modul B (Prestasi) atau C (Fasilitas) kecuali diberikan peran tambahan.

---

### 👤 F. Modul Pengguna Admin (Admin User Management)
* **Field yang Dikelola:**
  - `Nama Admin` (String)
  - `Email` (String, unique)
  - `Password` (Hashed bcrypt)
  - `Role` (Enum: `SuperAdmin`, `AdminHumas`, `AdminPPDB`)
  - `Status Aktif` (Boolean)
  - `Terakhir Login` (DateTime)

---

## 3. Aturan Desain & UI/UX Admin Dashboard

Agar konsisten dengan identitas visual website profil sekolah, antarmuka admin wajib mengikuti panduan visual berikut:

1. **Struktur Layout Admin:**
   - **Sidebar Navigasi (Kiri):** Logo sekolah, badge status admin, daftar menu modul dengan ikon outline 2px, tombol Logout.
   - **Top Navbar:** Indikator Breadcrumb rute aktif, preview tombol "Lihat Website Publik", notifikasi pesan masuk baru, dan avatar admin.
   - **Main Content Area:** Kartu statistik ringkasan, tabel data, filter, dan tombol aksi (*action buttons*).
2. **Standar Tabel Data (Data Tables):**
   - Wajib memiliki bilah pencarian instan (*real-time search*).
   - Filter dropdown sesuai kategori modul.
   - Pagination yang jelas (*Page 1 of N*).
   - Kolom aksi: **Preview**, **Edit** (Modal/Halaman), dan **Hapus** (Wajib dengan modal konfirmasi peringatan).
3. **Standar Form Tambah / Edit (CRUD Forms):**
   - Validasi input wajib (*required fields*) dengan pesan error yang jelas.
   - Input gambar dengan fitur **Image URL Preview** instan.
   - Tombol simpan dengan indikator loading (*loading state*).
4. **Palet Warna Dashboard:**
   - Latar belakang: `bg-slate-900` / `bg-slate-950` untuk panel navigasi gelap atau `bg-slate-50` untuk area kerja terang.
   - Aksen Tombol Utama: Hijau Zamrud (`bg-emerald-600 hover:bg-emerald-500`) dan Aksen Peringatan Emas (`text-amber-400`).
   - Aksen Hapus/Bahaya: Merah tegas (`bg-rose-600 hover:bg-rose-500`).

---

## 4. Aturan Keamanan & Teknis (Security & Architecture)

1. **Otentikasi Aman (Auth Guard):**
   - Password wajib di-hash menggunakan `bcryptjs` (minimal 10 salt rounds).
   - Sesi login disimpan dalam **HTTP-only Secure Cookie** menggunakan token terenkripsi.
   - Seluruh route `/admin/*` (kecuali `/admin/login`) wajib diproteksi oleh **Next.js Middleware**.
2. **Database & ORM:**
   - Menggunakan **Prisma ORM** dengan schema declarative di [`prisma/schema.prisma`](file:///c:/Users/acer/OneDrive/Documents/proyek%201/profil-sekolah/prisma/schema.prisma).
   - Driver database disiapkan menggunakan `SQLite` (file `dev.db`) untuk kemudahan pengembangan lokal tanpa dependensi server, dan kompatibel 100% untuk dialihkan ke `PostgreSQL` saat produksi.
3. **Data Seeder Otomatis (`seed.ts`):**
   - Wajib menyediakan script seeder yang memuat seluruh data statis yang saat ini sudah ada di frontend ke dalam database, sehingga saat CMS aktif, tidak ada konten yang kosong.

---

## 5. Batasan Ketat (Non-Goals / Scope Boundaries)

Untuk menghindari pembengkakan fitur (*scope creep*) dan menjaga performa website:
- ❌ **DILARANG** menambahkan sistem e-commerce, pembayaran gateway online, atau toko merchandise (di luar kebutuhan profil sekolah).
- ❌ **DILARANG** mengubah atau menghapus layout publik yang sudah disetujui tanpa alasan sinkronisasi data CMS.
- ❌ **DILARANG** menggunakan library eksternal yang terlalu berat yang dapat memperlambat *build time* Next.js.
