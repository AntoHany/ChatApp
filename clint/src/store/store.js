import { create } from "zustand";

export const useThemeValue = create((set) => ({
  LightTheme: true,
  changeTheme: () => set((state) => ({LightTheme: !state.LightTheme})),
}));

export const useURL = 'https://chat-app-server-one-rho.vercel.app'