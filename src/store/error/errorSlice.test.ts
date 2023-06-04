import errorReducer, { setError, clearError } from "./errorSlice";

describe("Given a error reducer", () => {
  const initialState = {
    message: null,
  };
  describe("When it receives a new state with a message `Something went wrong`", () => {
    test("should handle setError and return a new state", () => {
      const expectedErrorMessage = "Something went wrong";

      const action = setError(expectedErrorMessage);
      const newState = errorReducer(initialState, action);

      expect(newState).toStrictEqual({ message: expectedErrorMessage });
    });
  });

  describe("Given a error reducer", () => {
    test("should handle clearError return a new state", () => {
      const expectedMessageValue = null;
      const currentState = {
        message: "Something went wrong",
      };

      const action = clearError();
      const newState = errorReducer(currentState, action);

      expect(newState).toStrictEqual({ message: expectedMessageValue });
    });
  });
});
