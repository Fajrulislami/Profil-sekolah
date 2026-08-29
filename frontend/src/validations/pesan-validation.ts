import { z } from 'zod';

export const createPesanSchema = z.object({
  senderName: z.string().min(3, 'Nama pengirim minimal 3 karakter').max(100),
  email: z.string().email('Format email tidak valid'),
  phone: z.string().regex(/^[0-9]*$/, 'Nomor telepon hanya boleh berisi angka').optional().or(z.literal('')),
  subject: z.string().min(3, 'Subjek minimal 3 karakter').max(150),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
  type: z.string().optional(),
});

export const updatePesanSchema = z.object({
  isRead: z.boolean(),
});
