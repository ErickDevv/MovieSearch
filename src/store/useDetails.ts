import { create } from "zustand";

interface State {
  title: string | null;
  showDetails: boolean;
  setTitle: (title: string) => void;
  toggleDetails: () => void;
}

export const useDetails = create<State>((set) => ({
  title: null,
  showDetails: false,
  setTitle: (title) => set({ title }),
  toggleDetails: () => set((state) => ({ showDetails: !state.showDetails })),
}));
