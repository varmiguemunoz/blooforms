interface AuthState {
  user: string | null;
  error: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export type { AuthState };
