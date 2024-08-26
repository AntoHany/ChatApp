import { create } from "zustand";

export const useThemeValue = create((set) => ({
  LightTheme: true,
  changeTheme: () => set((state) => ({LightTheme: !state.LightTheme})),
}));