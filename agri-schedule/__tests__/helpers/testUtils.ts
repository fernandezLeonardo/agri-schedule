// Test utilities that can be easily modified for database integration
// This file contains mock implementations that mirror real database operations

export const mockDatabase = {
  // Mock user storage - replace with real DB calls later
  users: [] as Array<{ id: number; email: string; password: string }>,
  
  // Mock methods that mirror what real DB operations will look like
  async createUser(email: string, password: string) {
    const user = { id: Date.now(), email, password };
    this.users.push(user);
    return user;
  },
  
  async findUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  },
  
  async clearUsers() {
    this.users = [];
  }
};

// API response helpers
export const mockApiResponse = (data: any, status = 200) => ({
  ok: status >= 200 && status < 300,
  status,
  json: () => Promise.resolve(data)
});

// Form data helpers  
export const createTestUser = () => ({
  email: `test${Date.now()}@example.com`,
  password: 'password123'
});

// When database is connected, replace above with:
/*
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const database = {
  async createUser(email: string, password: string) {
    return await prisma.user.create({ 
      data: { email, password } 
    });
  },
  
  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({ 
      where: { email } 
    });
  },
  
  async clearUsers() {
    await prisma.user.deleteMany();
  }
};
*/