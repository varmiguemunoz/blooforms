import { createSlice } from "@reduxjs/toolkit";

import { AuthState } from "@/types/auth";

const storedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;

const initialState: AuthState = {
  user: storedUser ? JSON?.parse(storedUser) : null,
  error: "",
  isLoading: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.user = null;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { setUser, setError, setIsLoading, logout } = authSlice.actions;

export default authSlice.reducer;
