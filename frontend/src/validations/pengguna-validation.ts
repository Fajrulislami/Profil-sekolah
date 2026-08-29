import { z } from 'zod';

export const createPenggunaSchema = z.object({
  name: z.string().min(1, 'Nama tidak boleh kosong'),
  email: z.string().email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter').optional()
    .or(z.literal('').transform(() => undefined)),
  role: z.enum(['SuperAdmin', 'AdminHumas', 'AdminPPDB']).optional().default('AdminHumas'),
  isActive: z.boolean().optional().default(true),
});

export const updatePenggunaSchema = z.object({
  name: z.string().min(1, 'Nama tidak boleh kosong').optional(),
  email: z.string().email('Format email tidak valid').optional(),
  password: z.string().min(6, 'Password minimal 6 karakter').optional()
    .or(z.literal('').transform(() => undefined)),
  role: z.enum(['SuperAdmin', 'AdminHumas', 'AdminPPDB']).optional(),
  isActive: z.boolean().optional(),
});
