import { create } from "zustand";

export const useTransitionStore = create((set) => ({
  trigger: null,
  setTrigger: (value) => set({ trigger: value }),
}));
