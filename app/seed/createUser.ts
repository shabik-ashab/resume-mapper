const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clean(model: string) {
  await prisma[model].deleteMany({});
}

async function createUser() {
  await clean('user');
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
      },
    });

    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();