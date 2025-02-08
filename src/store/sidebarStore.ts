import { create } from "zustand";

interface InViewState {
  isInView: boolean;
  setIsInView: (val: boolean) => void;
}
export const useInViewStore = create<InViewState>((set) => ({
  isInView: false,
  setIsInView: (inViewValue) => set(() => ({ isInView: inViewValue })),
}));
