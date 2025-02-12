import { create } from "zustand";

interface InViewState {
  isInView: boolean;
  setIsInView: (val: boolean) => void;
}
export const useInViewStore = create<InViewState>((set) => ({
  isInView: false,
  setIsInView: (inViewValue) => set(() => ({ isInView: inViewValue })),
}));
interface ThemeState {
  CurrentTheme: string;
  setTheme: () => void;
}
export const useToggleThemeStore = create<ThemeState>((set) => ({
  CurrentTheme: "light",
  setTheme: () =>
    set((state) => ({
      CurrentTheme: state.CurrentTheme === "dark" ? "light" : "dark",
    })),
}));
