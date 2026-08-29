import prisma from '@/lib/prisma';
import { z } from 'zod';
import { createPendaftarSchema, updatePendaftarStatusSchema } from '@/validations/pendaftar-validation';
import { ApiError } from '@/utils/api-error';

export class PendaftarService {
  static async getAll() {
    return await prisma.pendaftarPPDB.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getById(id: number) {
    const pendaftar = await prisma.pendaftarPPDB.findUnique({
      where: { id },
    });

    if (!pendaftar) {
      throw new ApiError('Data pendaftar tidak ditemukan', 404);
    }

    return pendaftar;
  }

  static async create(payload: z.infer<typeof createPendaftarSchema>) {
    const data = createPendaftarSchema.parse(payload);
    
    // Generate a unique registration number: PPDB-YEAR-RANDOM
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4 digit random
    const registrationNumber = `PPDB-${year}-${randomNum}`;

    return await prisma.pendaftarPPDB.create({
      data: {
        registrationNumber,
        fullName: data.fullName,
        gradeLevel: data.gradeLevel,
        parentName: data.parentName,
        phone: data.phone,
        status: 'PENDING',
      },
    });
  }

  static async updateStatus(id: number, payload: z.infer<typeof updatePendaftarStatusSchema>) {
    const data = updatePendaftarStatusSchema.parse(payload);
    
    const existing = await prisma.pendaftarPPDB.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new ApiError('Data pendaftar tidak ditemukan', 404);
    }

    return await prisma.pendaftarPPDB.update({
      where: { id },
      data: {
        ...(data.status !== undefined && { status: data.status }),
        ...(data.isRead !== undefined && { isRead: data.isRead }),
      },
    });
  }

  static async delete(id: number) {
    const existing = await prisma.pendaftarPPDB.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new ApiError('Data pendaftar tidak ditemukan', 404);
    }

    await prisma.pendaftarPPDB.delete({
      where: { id },
    });

    return true;
  }
}
