import { create } from "zustand";
import MovieType from "../types/Movie";

interface State {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  search: string;
  setSearch: (search: string) => void;

  activePage: number | 0;
  setActivePage: (activePage: number) => void;

  totalPages: number | 0;
  setTotalPages: (totalPages: number) => void;

  movies: MovieType[];
  setMovies: (movies: MovieType[]) => void;
}

export const useApp = create<State>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  search: "",
  setSearch: (search) => set({ search }),

  activePage: 0,
  setActivePage: (activePage) => set({ activePage }),

  totalPages: 0,
  setTotalPages: (totalPages) => set({ totalPages }),

  movies: [],
  setMovies: (movies) => set({ movies }),
}));
