# Test Framework - Database Integration Guide

## Current Setup
The tests are designed to be easily upgraded when your database integration is complete. Right now they use a mock database system that mimics what the real database operations will look like.

## How to Upgrade to Real Database

### 1. Replace Mock Database with Prisma Client

**Current (Mock):**
```typescript
import { mockDatabase } from './helpers/testUtils';
await mockDatabase.createUser(email, password);
const user = await mockDatabase.findUserByEmail(email);
```

**Future (Real Database):**
```typescript
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
await prisma.user.create({ data: { email, password } });
const user = await prisma.user.findUnique({ where: { email } });
```

### 2. Update Test Database Setup

Add to your `jest.setup.js`:
```javascript
// Set up test database
beforeAll(async () => {
  // Connect to test database
  await prisma.$connect();
});

afterAll(async () => {
  // Clean up and disconnect
  await prisma.$disconnect();
});

beforeEach(async () => {
  // Clear test data before each test
  await prisma.user.deleteMany();
});
```

### 3. Easy Search & Replace

When your database is ready, just find and replace in test files:
- `mockDatabase.createUser` → `prisma.user.create`
- `mockDatabase.findUserByEmail` → `prisma.user.findUnique`
- `mockDatabase.clearUsers` → `prisma.user.deleteMany`

## Test Structure

### Current Tests Cover:
- ✅ Form display and validation
- ✅ User registration flow
- ✅ User login flow
- ✅ Duplicate email prevention
- ✅ Authentication error handling

### Ready to Add When DB is Connected:
- Password hashing verification
- User role checking (admin vs volunteer)
- Database constraint testing
- Real authentication token testing

## Files to Update:

1. **`__tests__/helpers/testUtils.ts`** - Replace mockDatabase with real Prisma client
2. **`__tests__/signup.test.tsx`** - Update database calls
3. **`__tests__/login.test.tsx`** - Update database calls
4. **`jest.setup.js`** - Add database setup/teardown

The framework is designed so you only need to change the database layer - all the test logic stays the same!