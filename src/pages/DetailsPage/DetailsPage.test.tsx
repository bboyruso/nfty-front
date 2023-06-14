import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import DetailsPage from "./DetailsPage";

describe("Given a details Page", () => {
  describe("When it render with area label `main Page`", () => {
    test("Then it should render correctly", () => {
      const expectedAriaLabel = "Delete";

      renderWithProviders(wrapWithRouter(<DetailsPage />));

      const button = screen.getByRole("button", {
        name: expectedAriaLabel,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
