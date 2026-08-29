import { z } from 'zod';

// Skema untuk Tab Jalur Pendaftaran
export const jalurSchema = z.array(
  z.object({
    id: z.any().optional(), // ID bisa number dari Date.now() di frontend
    title: z.string().min(1, 'Nama Jalur wajib diisi'),
    subtitle: z.string().optional().default(""),
    badge: z.string().optional().default(""),
    desc: z.string().optional().default(""),
    points: z.array(z.string()).default([]),
    imageUrl: z.string().optional().default(""),
    isFeatured: z.boolean().optional().default(false),
  })
);

// Skema untuk Tab Jadwal & Biaya
export const jadwalBiayaSchema = z.object({
  waves: z.array(
    z.object({
      id: z.any().optional(),
      name: z.string().min(1, 'Nama Gelombang wajib diisi'),
      period: z.string().min(1, 'Periode Tanggal wajib diisi'),
      benefit: z.string().optional().default(""),
    })
  ).default([]),
  feeItems: z.array(
    z.object({
      id: z.any().optional(),
      name: z.string().min(1, 'Nama Komponen Biaya wajib diisi'),
      note: z.string().optional().default(""),
    })
  ).default([]),
});

// Skema untuk Tab Persyaratan
export const persyaratanSchema = z.array(
  z.object({
    label: z.string().min(1, 'Label Jenjang wajib diisi'),
    title: z.string().min(1, 'Judul Lengkap wajib diisi'),
    age: z.string().optional().default(""),
    info: z.string().optional().default(""),
    docs: z.array(z.string()).default([]),
    pdfFile: z.string().optional().default(""),
    wa: z.string().optional().default(""),
    image: z.string().optional().default(""),
  })
);

// Skema untuk Tab Alur
export const alurSchema = z.array(
  z.object({
    id: z.any().optional(),
    num: z.string().optional().default(""),
    title: z.string().min(1, 'Judul Langkah wajib diisi'),
    desc: z.string().optional().default(""),
    icon: z.string().optional().default(""),
  })
);

// Skema untuk Tab FAQ
export const faqSchema = z.array(
  z.object({
    id: z.any().optional(),
    q: z.string().min(1, 'Pertanyaan wajib diisi'),
    a: z.string().min(1, 'Jawaban wajib diisi'),
  })
);

export const validatePPDBSetting = (section: string, data: any) => {
  switch (section) {
    case 'jalur':
      return jalurSchema.parse(data);
    case 'jadwal':
      return jadwalBiayaSchema.parse(data);
    case 'persyaratan':
      return persyaratanSchema.parse(data);
    case 'alur':
      return alurSchema.parse(data);
    case 'faq':
      return faqSchema.parse(data);
    default:
      throw new Error('Section tidak valid');
  }
};
