import { create } from "zustand";

interface FormState {
  name: string;
  setName: (name: string) => void;
  company: string;
  setCompany: (company: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  clear: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),
  company: "",
  setCompany: (company: string) => set({ company }),
  phone: "",
  setPhone: (phone: string) => set({ phone }),
  email: "",
  setEmail: (email: string) => set({ email }),
  clear: () => set({ name: "", company: "", phone: "", email: "" }),
}));
