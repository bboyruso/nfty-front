import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  message: string | null;
}

const initialState: ErrorState = {
  message: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (currentState: ErrorState, action: PayloadAction<string>) => {
      currentState.message = action.payload;
    },
    clearError: (currentState: ErrorState) => {
      currentState.message = null;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
