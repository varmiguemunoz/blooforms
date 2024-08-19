import { FormState } from "@/types/form";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FormState = {
  form: {
    id: 0,
    titulo: "",
    formulario: [],
  },
  error: "",
  isLoading: false,
  isCreating: false
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setIsCreating: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setError, setForm, setIsLoading, setIsCreating } = formSlice.actions;

export default formSlice.reducer;
