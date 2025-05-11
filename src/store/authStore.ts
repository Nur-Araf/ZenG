import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  clearAuth: () => set({ isAuthenticated: false }),
}));
