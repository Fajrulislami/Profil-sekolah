import { z } from 'zod';

export const createPrestasiSchema = z.object({
  title: z.string().min(1, 'Judul (Nama Prestasi) tidak boleh kosong').max(150, 'Judul maksimal 150 karakter'),
  recipient: z.string().min(1, 'Siswa/Tim peraih prestasi tidak boleh kosong'),
  competitionName: z.string().min(1, 'Nama kompetisi tidak boleh kosong'),
  level: z.string().min(1, 'Tingkat tidak boleh kosong'),
  category: z.string().min(1, 'Kategori bidang tidak boleh kosong'),
  medal: z.string().min(1, 'Medali/Juara tidak boleh kosong'),
  year: z.union([z.string(), z.number()]).transform((val) => parseInt(val as string, 10)),
  imageUrl: z.string().url('URL gambar tidak valid').optional().or(z.literal('')),
  description: z.string().optional().or(z.literal('')),
  isFeatured: z.boolean().optional().default(false),
  status: z.enum(['DRAFT', 'PUBLISHED']).optional().default('PUBLISHED'),
});

export const updatePrestasiSchema = z.object({
  title: z.string().min(1, 'Judul (Nama Prestasi) tidak boleh kosong').max(150, 'Judul maksimal 150 karakter').optional(),
  recipient: z.string().min(1, 'Siswa/Tim peraih prestasi tidak boleh kosong').optional(),
  competitionName: z.string().min(1, 'Nama kompetisi tidak boleh kosong').optional(),
  level: z.string().min(1, 'Tingkat tidak boleh kosong').optional(),
  category: z.string().min(1, 'Kategori bidang tidak boleh kosong').optional(),
  medal: z.string().min(1, 'Medali/Juara tidak boleh kosong').optional(),
  year: z.union([z.string(), z.number()]).transform((val) => parseInt(val as string, 10)).optional(),
  imageUrl: z.string().url('URL gambar tidak valid').optional().or(z.literal('')),
  description: z.string().optional().or(z.literal('')),
  isFeatured: z.boolean().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
});
