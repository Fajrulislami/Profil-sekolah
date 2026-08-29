import { z } from 'zod';

// Karena opsi yang dipilih adalah URL-only (tanpa physical file upload),
// dan kita ingin memvalidasi panjang string secara umum.
export const createBeritaSchema = z.object({
  title: z.string().min(1, 'Judul tidak boleh kosong').max(150, 'Judul maksimal 150 karakter'),
  category: z.string().min(1, 'Kategori tidak boleh kosong'),
  excerpt: z.string().min(1, 'Ringkasan tidak boleh kosong').max(300, 'Ringkasan maksimal 300 karakter'),
  content: z.string().min(1, 'Isi berita tidak boleh kosong'),
  imageUrl: z.string().url('URL gambar tidak valid').optional().or(z.literal('')),
  author: z.string().min(1, 'Penulis tidak boleh kosong'),
  isFeatured: z.boolean().optional().default(false),
  status: z.enum(['DRAFT', 'PUBLISHED']).optional().default('PUBLISHED'),
});

export const updateBeritaSchema = z.object({
  title: z.string().min(1, 'Judul tidak boleh kosong').max(150, 'Judul maksimal 150 karakter').optional(),
  category: z.string().min(1, 'Kategori tidak boleh kosong').optional(),
  excerpt: z.string().min(1, 'Ringkasan tidak boleh kosong').max(300, 'Ringkasan maksimal 300 karakter').optional(),
  content: z.string().min(1, 'Isi berita tidak boleh kosong').optional(),
  imageUrl: z.string().url('URL gambar tidak valid').optional().or(z.literal('')),
  author: z.string().min(1, 'Penulis tidak boleh kosong').optional(),
  isFeatured: z.boolean().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
});
