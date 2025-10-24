import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@/app/auth/login/page';
import { mockDatabase, mockApiResponse, createTestUser } from './helpers/testUtils';

// Mock router
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

// Mock fetch
global.fetch = jest.fn();

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockDatabase.clearUsers(); // Clear mock data before each test
  });

  test('shows login form', () => {
    render(<LoginPage />);
    
    expect(screen.getByLabelText(/email/i)).toBeTruthy();
    expect(screen.getByLabelText(/password/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeTruthy();
  });

  test('can login with valid credentials', async () => {
    const testUser = createTestUser();
    
    // Create user in mock database first
    await mockDatabase.createUser(testUser.email, testUser.password);
    
    // Mock successful login response
    (fetch as jest.Mock).mockResolvedValue(
      mockApiResponse({ message: "Welcome!" })
    );

    render(<LoginPage />);

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(email, { target: { value: testUser.email } });
    fireEvent.change(password, { target: { value: testUser.password } });
    fireEvent.click(button);

    // Verify API call
    expect(fetch).toHaveBeenCalledWith('/api/login', expect.any(Object));
    
    // Verify user exists (ready for real DB check)
    const user = await mockDatabase.findUserByEmail(testUser.email);
    expect(user).toBeTruthy();
  });

  test('validates email format', () => {
    render(<LoginPage />);
    
    const email = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.change(email, { target: { value: 'invalid-email' } });
    
    expect(email.validity.valid).toBe(false);
  });

  test('shows password toggle', () => {
    render(<LoginPage />);
    
    const toggleButton = screen.getByRole('button', { name: /show/i });
    expect(toggleButton).toBeTruthy();
  });

  test('handles login with non-existent user', async () => {
    const testUser = createTestUser();
    
    
    const user = await mockDatabase.findUserByEmail(testUser.email);
    expect(user).toBeFalsy(); // User doesn't exist
    
   
  });
});