import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";

describe("Given a HeaderComponent", () => {
  describe("When it receives a logo with a text `NFTIFY`", () => {
    test("Then it should show a logo", () => {
      const expectedText = "NFTIFY";

      renderWithProviders(wrapWithRouter(<Header />));

      expect(expectedText).toBeInTheDocument;
    });
  });
});
