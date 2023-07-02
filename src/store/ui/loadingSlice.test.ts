import { hideLoading, showLoading, uiReducer } from "./loadingSlice";

describe("Given a uiReducer", () => {
  describe("When it receives a action showLoading", () => {
    test("Should handle showLoading and return new state true", () => {
      const initialState = { isLoading: false };
      const newState = uiReducer(initialState, showLoading());

      expect(newState.isLoading).toStrictEqual(true);
    });

    describe("When it receives a action hideLoading", () => {
      test("Should handle hideLoading and return new state false", () => {
        const initialState = { isLoading: false };
        const newState = uiReducer(initialState, hideLoading());

        expect(newState.isLoading).toStrictEqual(false);
      });
    });
  });
});
