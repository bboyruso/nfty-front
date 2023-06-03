import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Button from "./Button";
import { screen } from "@testing-library/react";

describe("Given a Button Component", () => {
  describe("When it receives a text content `Create`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Create";

      renderWithProviders(wrapWithRouter(<Button text="Create" />));

      const button = screen.getByRole("button", {
        name: expectedText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
