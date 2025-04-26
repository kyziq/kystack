import { create } from "zustand";

interface CatStore {
	cat: number;
	increaseCat: (amount: number) => void;
}

export const useCatStore = create<CatStore>((set) => ({
	cat: 0,
	increaseCat: (amount) => set((state) => ({ cat: state.cat + amount })),
}));
