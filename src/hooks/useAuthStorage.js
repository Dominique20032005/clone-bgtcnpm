import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStorage = create(
  persist(
    (set, get) => ({
      accessToken: null,
      setAccessToken: (token) => set({ accessToken: token }),
      isLoggedIn: () => get().accessToken != null,
      decode: () => jwtDecode(get().accessToken) 
    }),
    {
      name: "access-token",
    }
  )
);
