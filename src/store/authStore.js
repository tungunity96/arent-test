import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const AuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (val) =>
        set({
          isLoggedIn: val,
        }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
