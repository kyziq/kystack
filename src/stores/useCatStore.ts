import { create } from "zustand";

interface CatStore {
	cats: number;
	increaseCats: (amount: number) => void;
}

export const useCatStore = create<CatStore>((set) => ({
	cats: 0,
	increaseCats: (amount) => set((state) => ({ cats: state.cats + amount })),
}));
