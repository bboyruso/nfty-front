import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar Component", () => {
  describe("When it renders and contains two paths `Create` and `Logout` ", () => {
    test("Navbar should renders with this navigation links correctly", () => {
      const expectedPathOne = "Create";
      const expectedPathTwo = "Logout";

      renderWithProviders(<Navbar />);

      expect(expectedPathOne).toBeInTheDocument;
      expect(expectedPathTwo).toBeInTheDocument;
    });
  });
});
