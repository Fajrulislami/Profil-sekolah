import prisma from '@/lib/prisma';
import { createPesanSchema, updatePesanSchema } from '@/validations/pesan-validation';
import type { Pesan } from '@prisma/client';

export class PesanService {
  static async getAll(): Promise<Pesan[]> {
    return await prisma.pesan.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getById(id: number): Promise<Pesan | null> {
    return await prisma.pesan.findUnique({
      where: { id },
    });
  }

  static async create(data: any): Promise<Pesan> {
    const validatedData = createPesanSchema.parse(data);
    return await prisma.pesan.create({
      data: validatedData,
    });
  }

  static async updateStatus(id: number, data: any): Promise<Pesan> {
    const validatedData = updatePesanSchema.parse(data);
    
    // Check if exists
    const existing = await prisma.pesan.findUnique({ where: { id } });
    if (!existing) {
      throw new Error('Pesan tidak ditemukan');
    }

    return await prisma.pesan.update({
      where: { id },
      data: {
        isRead: validatedData.isRead,
      },
    });
  }

  static async delete(id: number): Promise<void> {
    const existing = await prisma.pesan.findUnique({ where: { id } });
    if (!existing) {
      throw new Error('Pesan tidak ditemukan');
    }

    await prisma.pesan.delete({
      where: { id },
    });
  }
}
