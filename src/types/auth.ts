interface AuthState {
  user: string | null;
  error: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthUser {
  email: string;
  password: string;
}

export type { AuthState, AuthUser };
