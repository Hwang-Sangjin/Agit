import { create } from "zustand";

export const useNameState = create((set) => ({
  name: "",
  setName: (value) => set({ name: value }),
}));
