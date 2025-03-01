import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.user.deleteMany();
  await prisma.jobTitle.deleteMany();

  // Create job titles
  await prisma.jobTitle.createMany({
    data: [
      { id: 1, title: 'Developer' },
      { id: 2, title: 'Designer' },
      { id: 3, title: 'ProductManager' },
      { id: 4, title: 'QA' }
    ],
  });

  // Create users
  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com', jobTitleId: 1 },
      { name: 'Bob', email: 'bob@example.com', jobTitleId: 2 },
      { name: 'Charlie', email: 'charlie@example.com', jobTitleId: 3 },
      { name: 'Dave', email: 'dave@example.com' }, // Example of user without jobTitle
    ],
  });

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
