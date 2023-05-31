import Button from "./Button";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Button Component", () => {
  describe("When it receives a text content `Create`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Create";

      renderWithProviders(<Button />);

      expect(expectedText).toBeInTheDocument;
    });
  });
});
