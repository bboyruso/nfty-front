import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MainPage from "./MainPage";
import { screen } from "@testing-library/react";

describe("Given a Main Page", () => {
  describe("When it render with area label `main Page`", () => {
    test("Then it should render correctly", () => {
      const expectedAriaLabel = "main page";

      renderWithProviders(wrapWithRouter(<MainPage />));

      const mainPage = screen.getByLabelText(expectedAriaLabel);

      expect(mainPage).toBeInTheDocument();
    });
  });
});
