import { create } from "zustand";

interface FormState {
  email: string;
  setEmail: (email: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  email: "",
  setEmail: (email: string) => set({ email }),
}));
