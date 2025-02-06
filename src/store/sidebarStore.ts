import { create } from "zustand";
interface SidebarState {
  //This is a structure of the state
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSideBar: () => void;
}
interface InViewState {
  isInView: boolean;
  setIsInView: (val: boolean) => void;
}
export const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSideBar: () => set(() => ({ isSidebarOpen: false })),
})); //set is a function which is used to update the state here the callback function is returing object with the updated state
export const useInViewStore = create<InViewState>((set) => ({
  isInView: false,
  setIsInView: (inViewValue) => set(() => ({ isInView: inViewValue })),
}));
