import { create } from "zustand"
export const useStore = create((set) => ({    
    title: "",
    price: 0,
    id: null,
    open: false,
    results: [],
    setResults: (results) => set({ results }),
    setTitle:(title)=>set({title}),
    setPrice:(price)=>set({price}),
    setID: (id) => set({ id }),
    setOpen: (open) => set({ open }),
}));