import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import UpdatePage from "./UpdatePage";

describe("Given a Update Page", () => {
  describe("When it render with a button inside with text `Update`", () => {
    test("Then the page should render correctly", () => {
      const expectedAriaLabel = "Update";

      renderWithProviders(wrapWithRouter(<UpdatePage />));

      const button = screen.getByRole("button", {
        name: expectedAriaLabel,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
