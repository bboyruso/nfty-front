import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it receives a Header component with a logo text `NFTIFY`", () => {
    test("Then it should renders correctly", () => {
      const expectedLogoText = "NFTIFY";

      renderWithProviders(wrapWithRouter(<Layout />));

      const logoText = screen.getByRole("link", {
        name: expectedLogoText,
      });

      expect(logoText).toBeInTheDocument();
    });
  });
});
