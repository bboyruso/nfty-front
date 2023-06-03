import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given a HeaderComponent", () => {
  describe("When it receives a logo with a text `NFTIFY`", () => {
    test("Then it should show a logo", () => {
      const expectedLogoText = "NFTIFY";

      renderWithProviders(wrapWithRouter(<Header />));

      const logoText = screen.getByRole("link", {
        name: expectedLogoText,
      });

      expect(logoText).toBeInTheDocument();
    });
  });
});
