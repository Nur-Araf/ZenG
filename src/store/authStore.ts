import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  refreshToken: string | null;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  refreshToken: null,
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setRefreshToken: (refreshToken) => set({ refreshToken }),
  clearAuth: () => set({ isAuthenticated: false, refreshToken: null }),
}));
