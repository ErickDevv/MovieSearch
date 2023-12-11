import { create } from "zustand";

/**
 *
 *        @DESCRIPTION
 * * This is the store for the movie details, it contains the title of the movie, a boolean to toggle the details
 * * and the setter functions for both.
 *
 */

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
