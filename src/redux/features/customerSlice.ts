import { InitialCustomerState } from "@/types/customer";

import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialCustomerState = {
  customers: {
    id: 0,
    name: "",
    email: "",
    phone: "",
  },
  error: "",
  isLoading: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setError, setCustomers, setIsLoading } = formSlice.actions;

export default formSlice.reducer;
