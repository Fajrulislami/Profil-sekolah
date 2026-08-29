import { z } from 'zod';
 
 export const createPendaftarSchema = z.object({
   fullName: z.string().min(3, 'Nama lengkap minimal 3 karakter').max(100),
   gradeLevel: z.enum(['TK', 'SD', 'SMP', 'Pesantren']),
   parentName: z.string().min(3, 'Nama orang tua minimal 3 karakter').max(100),
   phone: z.string().regex(/^[0-9]+$/, 'Nomor WhatsApp yang Anda ketik harus berupa angka').min(5, 'Nomor HP terlalu pendek').max(20),
 });
 
 export const updatePendaftarStatusSchema = z.object({
   status: z.enum(['PENDING', 'VERIFIED', 'REJECTED', 'ACCEPTED']).optional(),
   isRead: z.boolean().optional(),
 }); 
