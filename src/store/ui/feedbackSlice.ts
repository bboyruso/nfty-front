import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeedbackState {
  message: string | null;
}

const initialState: FeedbackState = {
  message: null,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setFeedback: (
      currentState: FeedbackState,
      action: PayloadAction<string>
    ) => {
      currentState.message = action.payload;
    },
    hideFeedback: (currentState: FeedbackState) => {
      currentState.message = null;
    },
  },
});

export const { setFeedback, hideFeedback } = feedbackSlice.actions;

export const feedbackReducer = feedbackSlice.reducer;
