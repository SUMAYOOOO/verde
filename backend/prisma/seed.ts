import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Admin', email: 'admin@sumayo.test', role: 'admin' },
      { name: 'Student', email: 'student@sumayo.test', role: 'student' }
    ]
  });

  const course = await prisma.course.create({
    data: {
      title: 'Introducción a SUMAYÕ',
      description: 'Curso inicial de ejemplo',
      slug: 'introduccion-sumayo',
      orderIndex: 1,
      topics: {
        create: [
          { title: 'Fundamentos', orderIndex: 1, price: 0, isFree: true, description: 'Tema gratuito' },
          { title: 'Tema Premium', orderIndex: 2, price: 9.99, isFree: false, description: 'Tema de pago' }
        ]
      }
    },
    include: { topics: true }
  });

  console.log('Seed complete', course.title);
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
