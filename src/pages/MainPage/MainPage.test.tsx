import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MainPage from "./MainPage";

describe("Given a Main Page", () => {
  describe("When it render with heading text `Main Page`", () => {
    test("Then it should render correctly", () => {
      const expectedText = "Main page";

      renderWithProviders(wrapWithRouter(<MainPage />));

      expect(expectedText).toBeInTheDocument;
    });
  });
});
