import prisma from '@/lib/prisma';

export type Fasilitas = {
  id: number;
  nama: string;
  deskripsi: string;
  fungsiUtama: string;
  kapasitas: string;
  lokasi: string;
  pengguna: string;
  status: string;
  category: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getAllFasilitas = async (): Promise<Fasilitas[]> => {
  return await prisma.fasilitas.findMany({ orderBy: { id: 'asc' } });
};

export const getFasilitasById = async (id: number): Promise<Fasilitas | null> => {
  return await prisma.fasilitas.findUnique({ where: { id } });
};

export const createFasilitas = async (data: Omit<Fasilitas, 'id' | 'createdAt' | 'updatedAt'>): Promise<Fasilitas> => {
  return await prisma.fasilitas.create({ data });
};

export const updateFasilitas = async (
  id: number,
  data: Partial<Omit<Fasilitas, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Fasilitas> => {
  return await prisma.fasilitas.update({ where: { id }, data });
};

export const deleteFasilitas = async (id: number): Promise<Fasilitas> => {
  return await prisma.fasilitas.delete({ where: { id } });
};
