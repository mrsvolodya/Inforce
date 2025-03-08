import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  isFormOpen: boolean;
  isEditForm: boolean;
}

const initialState: FormState = {
  isFormOpen: false,
  isEditForm: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setIsFormOpen(state, action: PayloadAction<boolean>) {
      state.isFormOpen = action.payload;
    },
    setIsEditForm(state, action: PayloadAction<boolean>) {
      state.isEditForm = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { setIsFormOpen, setIsEditForm } = formSlice.actions;
