import prisma from '@/lib/prisma';
import { z } from 'zod';
import { createPrestasiSchema, updatePrestasiSchema } from '@/validations/prestasi-validation';
import { ApiError } from '@/utils/api-error';

export class PrestasiService {
  static async getAll() {
    return await prisma.prestasi.findMany({
      orderBy: [
        { year: 'desc' },
        { date: 'desc' },
      ],
    });
  }

  static async getById(id: number) {
    const prestasi = await prisma.prestasi.findUnique({
      where: { id },
    });

    if (!prestasi) {
      throw new ApiError('Prestasi tidak ditemukan', 404);
    }

    return prestasi;
  }

  static async getFeatured() {
    return await prisma.prestasi.findMany({
      where: { isFeatured: true, status: 'PUBLISHED' },
      orderBy: [
        { year: 'desc' },
        { date: 'desc' },
      ],
      take: 4,
    });
  }

  static async getPublished() {
    return await prisma.prestasi.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [
        { year: 'desc' },
        { date: 'desc' },
      ],
    });
  }

  static async create(payload: z.infer<typeof createPrestasiSchema>) {
    const data = createPrestasiSchema.parse(payload);

    return await prisma.$transaction(async (tx) => {
      // Validate max 4 featured
      if (data.isFeatured) {
        const featuredCount = await tx.prestasi.count({
          where: { isFeatured: true }
        });
        if (featuredCount >= 4) {
          throw new ApiError("Gagal menyimpan data! Halaman Prestasi Unggulan (Hall of Fame) sudah mencapai batas maksimum (4 Prestasi). Harap nonaktifkan status unggulan pada prestasi lain terlebih dahulu.", 400);
        }
      }

      const newPrestasi = await tx.prestasi.create({
        data: {
          title: data.title,
          recipient: data.recipient,
          competitionName: data.competitionName,
          level: data.level,
          category: data.category,
          medal: data.medal,
          year: data.year,
          date: new Date(data.year, 0, 1), // Menyimpan tanggal dummy berdasarkan tahun
          imageUrl: data.imageUrl || null,
          description: data.description || null,
          isFeatured: data.isFeatured,
          status: data.status,
        },
      });

      return newPrestasi;
    });
  }

  static async update(id: number, payload: z.infer<typeof updatePrestasiSchema>) {
    // Bersihkan nilai undefined sebelum parse agar validasi Zod optional() bekerja
    const cleanPayload = { ...payload };
    Object.keys(cleanPayload).forEach(key => 
      cleanPayload[key as keyof typeof cleanPayload] === undefined ? delete cleanPayload[key as keyof typeof cleanPayload] : {}
    );

    const data = updatePrestasiSchema.parse(cleanPayload);
    
    return await prisma.$transaction(async (tx) => {
      const currentPrestasi = await tx.prestasi.findUnique({
        where: { id },
      });

      if (!currentPrestasi) {
        throw new ApiError('Prestasi tidak ditemukan', 404);
      }

      const dataToUpdate: any = { ...data };
      
      // Perbarui tanggal jika tahun diubah
      if (data.year && data.year !== currentPrestasi.year) {
        dataToUpdate.date = new Date(data.year, 0, 1);
      }

      // Validate max 4 featured if changing to true
      if (data.isFeatured && !currentPrestasi.isFeatured) {
        const featuredCount = await tx.prestasi.count({
          where: { isFeatured: true }
        });
        if (featuredCount >= 4) {
          throw new ApiError("Gagal memperbarui data! Halaman Prestasi Unggulan (Hall of Fame) sudah mencapai batas maksimum (4 Prestasi). Harap nonaktifkan status unggulan pada prestasi lain terlebih dahulu.", 400);
        }
      }

      return await tx.prestasi.update({
        where: { id },
        data: dataToUpdate,
      });
    });
  }

  static async delete(id: number) {
    const currentPrestasi = await prisma.prestasi.findUnique({
      where: { id },
    });

    if (!currentPrestasi) {
      throw new ApiError('Prestasi tidak ditemukan', 404);
    }

    await prisma.prestasi.delete({
      where: { id },
    });

    return true;
  }
}
