import prisma from '@/lib/prisma';
import { z } from 'zod';
import { createBeritaSchema, updateBeritaSchema } from '@/validations/berita-validation';
import { ApiError } from '@/utils/api-error';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export class BeritaService {
  static async getAll() {
    return await prisma.berita.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getById(id: number) {
    const berita = await prisma.berita.findUnique({
      where: { id },
    });

    if (!berita) {
      throw new ApiError('Berita tidak ditemukan', 404);
    }

    return berita;
  }

  static async getFeatured() {
    return await prisma.berita.findMany({
      where: { isFeatured: true, status: 'PUBLISHED' },
      orderBy: { createdAt: 'desc' },
      take: 4,
    });
  }

  static async getPublished() {
    return await prisma.berita.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { createdAt: 'desc' },
    });
  }

  static async create(payload: z.infer<typeof createBeritaSchema>) {
    const data = createBeritaSchema.parse(payload);
    let baseSlug = generateSlug(data.title);

    // Gunakan transaksi untuk menjamin keamanan (race condition)
    return await prisma.$transaction(async (tx) => {
      // Validate max 4 featured
      if (data.isFeatured) {
        const featuredCount = await tx.berita.count({
          where: { isFeatured: true }
        });
        if (featuredCount >= 4) {
          throw new ApiError("Gagal menyimpan data! Halaman Berita Unggulan sudah mencapai batas maksimum (4 Berita). Harap nonaktifkan status unggulan pada berita lain terlebih dahulu.", 400);
        }
      }

      // Handle slug uniqueness
      let isUnique = false;
      let counter = 1;
      let finalSlug = baseSlug;
      while (!isUnique) {
        const existing = await tx.berita.findUnique({ where: { slug: finalSlug } });
        if (existing) {
          finalSlug = `${baseSlug}-${counter}`;
          counter++;
        } else {
          isUnique = true;
        }
      }

      const newBerita = await tx.berita.create({
        data: {
          title: data.title,
          slug: finalSlug,
          category: data.category,
          excerpt: data.excerpt,
          content: data.content,
          imageUrl: data.imageUrl || null,
          author: data.author,
          isFeatured: data.isFeatured,
          status: data.status,
        },
      });

      return newBerita;
    });
  }

  static async update(id: number, payload: z.infer<typeof updateBeritaSchema>) {
    const data = updateBeritaSchema.parse(payload);
    
    return await prisma.$transaction(async (tx) => {
      const currentBerita = await tx.berita.findUnique({
        where: { id },
      });

      if (!currentBerita) {
        throw new ApiError('Berita tidak ditemukan', 404);
      }

      const dataToUpdate: any = { ...data };
      
      // Update slug if title changed
      if (data.title && data.title !== currentBerita.title) {
        let baseSlug = generateSlug(data.title);
        let isUnique = false;
        let counter = 1;
        let finalSlug = baseSlug;
        while (!isUnique) {
          const existing = await tx.berita.findUnique({ where: { slug: finalSlug } });
          if (existing && existing.id !== id) {
            finalSlug = `${baseSlug}-${counter}`;
            counter++;
          } else {
            isUnique = true;
          }
        }
        dataToUpdate.slug = finalSlug;
      }

      // Validate max 4 featured if changing to true
      if (data.isFeatured && !currentBerita.isFeatured) {
        const featuredCount = await tx.berita.count({
          where: { isFeatured: true }
        });
        if (featuredCount >= 4) {
          throw new ApiError("Gagal memperbarui data! Halaman Berita Unggulan sudah mencapai batas maksimum (4 Berita). Harap nonaktifkan status unggulan pada berita lain terlebih dahulu.", 400);
        }
      }

      return await tx.berita.update({
        where: { id },
        data: dataToUpdate,
      });
    });
  }

  static async delete(id: number) {
    const currentBerita = await prisma.berita.findUnique({
      where: { id },
    });

    if (!currentBerita) {
      throw new ApiError('Berita tidak ditemukan', 404);
    }

    await prisma.berita.delete({
      where: { id },
    });

    return true;
  }
}
