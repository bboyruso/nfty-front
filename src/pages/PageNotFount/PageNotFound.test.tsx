import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

describe("Given a NotFoundPage", () => {
  describe("When it render with a heading text `PAGE NOT FOUND`", () => {
    test("Then it should render correctly with a this heading", () => {
      const expectedText = "PAGE NOT FOUND";

      renderWithProviders(wrapWithRouter(<PageNotFound />));

      const expectedHeading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
