import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { sendWelcomeEmail } from '@/lib/email';
import { z } from 'zod';
import { createPenggunaSchema, updatePenggunaSchema } from '@/validations/pengguna-validation';
import { ApiError } from '@/utils/api-error';

export class PenggunaService {
  static async getAll() {
    return await prisma.pengguna.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        lastLogin: true,
      },
      orderBy: { id: 'asc' },
    });
  }

  static async getById(id: number) {
    const pengguna = await prisma.pengguna.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        lastLogin: true,
      },
    });

    if (!pengguna) {
      throw new ApiError('Pengguna tidak ditemukan', 404);
    }

    return pengguna;
  }

  static async create(payload: z.infer<typeof createPenggunaSchema>) {
    const data = createPenggunaSchema.parse(payload);

    // Gunakan transaksi agar cek email + cek SuperAdmin + buat user bersifat atomic
    const newUser = await prisma.$transaction(async (tx) => {
      // Business rule: Email must be unique
      const existingUser = await tx.pengguna.findUnique({
        where: { email: data.email },
      });
      if (existingUser) {
        throw new ApiError('Email sudah terdaftar', 409);
      }

      // Business rule: Only one SuperAdmin allowed
      if (data.role === 'SuperAdmin') {
        const existingSuperAdmin = await tx.pengguna.findFirst({
          where: { role: 'SuperAdmin' },
        });
        if (existingSuperAdmin) {
          throw new ApiError('Hanya boleh ada 1 Super Admin di sistem.', 409);
        }
      }

      let hashedPassword = null;
      if (data.password) {
        hashedPassword = await bcrypt.hash(data.password, 10);
      }

      return await tx.pengguna.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword,
          role: data.role,
          isActive: data.isActive,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });
    });

    // Kirim email selamat datang — di luar transaksi agar kegagalan email
    // tidak membatalkan pembuatan user
    try {
      await sendWelcomeEmail({
        to: data.email,
        name: data.name,
        role: data.role,
        isGoogleOnly: !data.password,
        password: data.password, 
      });
    } catch (emailError) {
      console.error('Gagal mengirim email selamat datang:', emailError);
      // Tidak throw — user sudah terbuat, email gagal bukan masalah fatal
    }

    return newUser;
  }

  static async update(id: number, payload: z.infer<typeof updatePenggunaSchema>, currentUserRole: string) {
    const data = updatePenggunaSchema.parse(payload);

    // Gunakan transaksi agar cek + update bersifat atomic
    return await prisma.$transaction(async (tx) => {
      const targetUser = await tx.pengguna.findUnique({
        where: { id },
      });

      if (!targetUser) {
        throw new ApiError('Pengguna tidak ditemukan', 404);
      }

      // Business rules for SuperAdmin protection
      if (targetUser.role === 'SuperAdmin') {
        if (data.role && data.role !== 'SuperAdmin') {
          throw new ApiError('Tidak dapat mengubah role dari Super Admin', 403);
        }
        if (data.isActive === false) {
          throw new ApiError('Tidak dapat menonaktifkan Super Admin', 403);
        }
      } else {
        if (data.role === 'SuperAdmin') {
          const existingSuperAdmin = await tx.pengguna.findFirst({
            where: { role: 'SuperAdmin' },
          });
          if (existingSuperAdmin) {
            throw new ApiError('Hanya boleh ada 1 Super Admin di sistem.', 409);
          }
        }
      }

      const dataToUpdate: any = {};
      if (data.name) dataToUpdate.name = data.name;
      
      if (data.email && data.email !== targetUser.email) {
        const existingUser = await tx.pengguna.findUnique({
          where: { email: data.email },
        });
        if (existingUser) {
          throw new ApiError('Email sudah terdaftar untuk akun lain', 409);
        }
        dataToUpdate.email = data.email;
      }

      if (data.role) dataToUpdate.role = data.role;
      if (data.isActive !== undefined) dataToUpdate.isActive = data.isActive;
      
      if (data.password) {
        dataToUpdate.password = await bcrypt.hash(data.password, 10);
      }

      return await tx.pengguna.update({
        where: { id },
        data: dataToUpdate,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isActive: true,
          updatedAt: true,
        },
      });
    });
  }

  static async delete(id: number, currentUserRole: string) {
    const targetUser = await prisma.pengguna.findUnique({
      where: { id },
    });

    if (!targetUser) {
      throw new ApiError('Pengguna tidak ditemukan', 404);
    }

    if (targetUser.role === 'SuperAdmin') {
      throw new ApiError('Akun Super Admin tidak dapat dihapus', 403);
    }

    await prisma.pengguna.delete({
      where: { id },
    });

    return true;
  }
}
