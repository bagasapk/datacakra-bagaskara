import { create } from "zustand";
import type { StoreInterface } from "../constants/interface";

export const useStore = create<StoreInterface>((set) => {
  return {
    user: {
      username: "",
      email: "",
    },
    setUser: (user) => set({ user }),
  };
});
