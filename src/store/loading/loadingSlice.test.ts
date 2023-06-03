import { loadingReducer, startLoading, stopLoading } from "./loadingSlice";

describe("Given a loading reducer", () => {
  describe("When it receives a action startLoading", () => {
    test("Should handle startLoading and return true", () => {
      const newState = loadingReducer(false, startLoading());

      expect(newState).toStrictEqual(true);
    });

    describe("When it receives a action stopLoading", () => {
      test("Should handle stopLoading and return false", () => {
        const newState = loadingReducer(true, stopLoading());

        expect(newState).toStrictEqual(false);
      });
    });
  });
});
