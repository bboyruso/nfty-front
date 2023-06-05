import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";

describe("Given a Main Page", () => {
  describe("When it render with area label `main Page`", () => {
    test("Then it should render correctly", () => {
      const expectedText = "PAGE NOT FOUND";

      renderWithProviders(wrapWithRouter(<PageNotFound />));

      const expectedHeading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
