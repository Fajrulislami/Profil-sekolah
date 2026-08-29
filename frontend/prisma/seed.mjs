import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (!adminEmail || !adminPassword) {
    throw new Error("❌ Variabel ADMIN_EMAIL atau ADMIN_PASSWORD belum diatur di file .env!");
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  
  const user = await prisma.pengguna.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword },
    create: {
      name: 'Super Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'SuperAdmin',
      isActive: true,
    },
  });

  console.log('✅ Akun SuperAdmin berhasil dibuat/diperbarui!');
  console.log('Email');
  console.log('Password');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
