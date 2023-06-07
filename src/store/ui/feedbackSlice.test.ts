import { feedbackReducer } from "./feedbackSlice";

import { setFeedback, hideFeedback } from "./feedbackSlice";

describe("Given a error reducer", () => {
  const initialState = {
    message: null,
  };
  describe("When it receives a new state with a message `Something went wrong`", () => {
    test("should handle setError and return a new state", () => {
      const expectedErrorMessage = "Something went wrong";

      const action = setFeedback(expectedErrorMessage);
      const newState = feedbackReducer(initialState, action);

      expect(newState).toStrictEqual({ message: expectedErrorMessage });
    });
  });

  describe("When the initial state with a error message is `Something went wrong`", () => {
    test("should handle clearError return a new state without a message", () => {
      const expectedMessageValue = null;
      const currentState = {
        message: "Something went wrong",
      };

      const action = hideFeedback();
      const newState = feedbackReducer(currentState, action);

      expect(newState).toStrictEqual({ message: expectedMessageValue });
    });
  });
});
