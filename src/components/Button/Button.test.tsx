import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button Component", () => {
  describe("When it receives a text content `Create`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Create";

      renderWithProviders(wrapWithRouter(<Button />));

      expect(expectedText).toBeInTheDocument;
    });
  });
});
