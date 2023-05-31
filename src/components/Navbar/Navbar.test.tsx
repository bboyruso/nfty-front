import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";

describe("Given a Navbar Component", () => {
  describe("When it renders and contains two paths `Create` and `Logout` ", () => {
    test("Navbar should renders with this navigation links correctly", () => {
      const expectedPathOne = "Create";
      const expectedPathTwo = "Home";

      renderWithProviders(wrapWithRouter(<Navbar />));

      expect(expectedPathOne).toBeInTheDocument;
      expect(expectedPathTwo).toBeInTheDocument;
    });
  });
});
