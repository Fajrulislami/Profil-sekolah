import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@madani.sch.id';
  const adminPassword = process.env.ADMIN_PASSWORD || 'rahasia123';

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.pengguna.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Super Admin',
      email: adminEmail,
      password: passwordHash,
      role: 'SuperAdmin',
      isActive: true,
    },
  });

  console.log('Seeding finished.');
  console.log('Admin Email:', admin.email);
  console.log('Admin Password:', adminPassword);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
