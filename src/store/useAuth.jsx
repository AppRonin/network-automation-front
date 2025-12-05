import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../services/api";

export const useAuth = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      loading: true,
      error: null,

      clearError: () => set({ error: null }),

      login: async (username, password) => {
        set({ error: null });
        try {
          set({ error: null }); // limpa erros anteriores

          const res = await api.post("/token/", { username, password });

          localStorage.setItem("access", res.data.access);
          localStorage.setItem("refresh", res.data.refresh);

          set({ isAuthenticated: true });
          window.location.href = "/";
        } catch (err) {
          console.error("Login failed:", err);
          set({
            error: "Usuário ou senha incorretos.",
            isAuthenticated: false,
          });
        }
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
          await api.get("/me/");
          set({ isAuthenticated: true });
        } catch {
          set({ isAuthenticated: false });
        } finally {
          set({ loading: false });
        }
      },
    }),
    { name: "auth-store" }
  )
);
