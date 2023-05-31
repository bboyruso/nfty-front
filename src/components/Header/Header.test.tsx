import Header from "./Header";
import renderWithProviders from "../../utils/testUtils";

describe("Given a HeaderComponent", () => {
  describe("When it receives a logo with a text `NFTIFY`", () => {
    test("Then it should show a logo", () => {
      const expectedText = "NFTIFY";

      renderWithProviders(<Header />);

      expect(expectedText).toBeInTheDocument;
    });
  });
});
