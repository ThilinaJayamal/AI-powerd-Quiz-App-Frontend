import { create } from 'zustand'
import { api } from "../lib/api"
import toast from 'react-hot-toast'

export const useAuthStore = create((set) => ({
  user: null,
  isFetching: true,
  isLogging: false,

  login: async (email, password) => {
    try {
      set({ isLogging: true })
      const { data } = await api.post("auth/login", { email, password });
      set({ user: data })
      set({ isLogging: true })
    } catch (error) {
      set({ user: null })
      set({ isLogging: false })
      toast.error(error?.response?.data || "Login failed")
    }
  },

  logout: async () => {
    try {
      const { data } = await api.post("auth/logout");
      set({ user: null })
    } catch (error) {
      set({ user: null })
      toast.error(error?.response?.data || "Logout failed")
    }
  },

  register: async (email, password, name) => {
    try {
      set({ isLogging: true })
      const { data } = await api.post("auth/register", { email, password, name });
      set({ user: data })
      set({ isLogging: true })
    } catch (error) {
      set({ user: null })
      console.log(error)
      set({ isLogging: false })
      toast.error(error?.response?.data || "Registration failed")
    }
  },

  loadUser: async () => {
    try {
      set({ isFetching: true })
      const { data } = await api.get("auth/me");
      set({ user: data })
      set({ isFetching: false })
    } catch (error) {
      set({ user: null })
      set({ isFetching: false })
    }
  }
}))