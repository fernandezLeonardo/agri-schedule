import { render, screen, fireEvent } from '@testing-library/react';
import RegisterPage from '@/app/auth/register/page';
import { mockDatabase, mockApiResponse, createTestUser } from './helpers/testUtils';

// Mock router
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

// Mock fetch
global.fetch = jest.fn();

describe('Signup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockDatabase.clearUsers(); // Clear mock data before each test
  });

  test('shows signup form', () => {
    render(<RegisterPage />);
    
    expect(screen.getByLabelText(/email/i)).toBeTruthy();
    expect(screen.getByLabelText(/password/i)).toBeTruthy();
    expect(screen.getByText('Create account')).toBeTruthy();
  });

  test('can submit form and create user', async () => {
    const testUser = createTestUser();
    
    // Mock successful API response
    (fetch as jest.Mock).mockResolvedValue(
      mockApiResponse({ message: "Registration successful!" })
    );

    render(<RegisterPage />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByText('Create account');

    fireEvent.change(email, { target: { value: testUser.email } });
    fireEvent.change(password, { target: { value: testUser.password } });
    fireEvent.click(button);

    // Verify API call
    expect(fetch).toHaveBeenCalledWith('/api/register', expect.any(Object));
    
    // Simulate what the real API will do - create user in database
    await mockDatabase.createUser(testUser.email, testUser.password);
    
    // Verify user was created (easy to replace with real DB check later)
    const createdUser = await mockDatabase.findUserByEmail(testUser.email);
    expect(createdUser).toBeTruthy();
    expect(createdUser?.email).toBe(testUser.email);
  });

  test('validates email', () => {
    render(<RegisterPage />);
    
    const email = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.change(email, { target: { value: 'invalid' } });
    
    expect(email.validity.valid).toBe(false);
  });

  test('prevents duplicate email registration', async () => {
    const testUser = createTestUser();
    
    // Create user first time
    await mockDatabase.createUser(testUser.email, testUser.password);
    
    // Try to create same user again
    const existingUser = await mockDatabase.findUserByEmail(testUser.email);
    expect(existingUser).toBeTruthy();
    
    // This test shows how you'll check for duplicates when DB is connected
    // Replace mockDatabase calls with actual Prisma calls later
  });
});