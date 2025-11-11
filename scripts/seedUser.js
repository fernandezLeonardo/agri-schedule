const { PrismaClient } = require('../agri-schedule/lib/generated/prisma/index.js');

(async () => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.create({
      data: {
        id: 'seed-test-user-1',
        email: 'seed-test@example.com',
        password: 'testpassword',
        role: 'VOLUNTEER'
      }
    });
    console.log('Created user:', user);
  } catch (err) {
    console.error('Error creating user:', err.message || err);
  } finally {
    await prisma.$disconnect();
  }
})();
