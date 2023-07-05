import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";
import { screen } from "@testing-library/react";

describe("Given a Navbar Component", () => {
  describe("When it renders and contains two paths `Create` and `Logout` ", () => {
    test("Navbar should renders with this navigation links correctly", () => {
      const expectedPathOne = "Create";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const link = screen.getByRole("link", {
        name: expectedPathOne,
      });

      expect(link).toBeInTheDocument();
    });
  });
});
