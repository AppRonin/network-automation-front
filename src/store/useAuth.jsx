import { create } from "zustand";
import api from "../services/api";

export const useAuth = create((set) => ({
  isAuthenticated: false,
  loading: true,

  login: async (username, password) => {
    const res = await api.post("/token/", { username, password });
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    set({ isAuthenticated: true });
    window.location.href = "/";
  },

  logout: () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    set({ isAuthenticated: false });
    window.location.href = "/login";
  },

  checkAuth: async () => {
    const access = localStorage.getItem("access");
    if (!access) {
      set({ loading: false, isAuthenticated: false });
      return;
    }

    try {
      await api.get("/me/"); // protected test endpoint
      set({ isAuthenticated: true });
    } catch {
      set({ isAuthenticated: false });
    } finally {
      set({ loading: false });
    }
  },
}));
