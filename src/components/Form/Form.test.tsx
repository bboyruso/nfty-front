import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Form from "./Form";
import { screen } from "@testing-library/react";

describe("Given a Navbar Component", () => {
  describe("When it renders and contains two paths `Create` and `Logout` ", () => {
    test("Navbar should renders with this navigation links correctly", () => {
      const expectedHeading = "Form heading";

      renderWithProviders(wrapWithRouter(<Form headingText="Form heading" />));

      const firstLink = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(firstLink).toBeInTheDocument();
    });
  });
});
