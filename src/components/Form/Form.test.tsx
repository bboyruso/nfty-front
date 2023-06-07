import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Form from "./Form";
import { screen } from "@testing-library/react";

describe("Given a Form Component", () => {
  describe("When it renders and contains a heading text`Form heading`", () => {
    test("Form should renders with this heading correctly", () => {
      const expectedHeading = "Form heading";

      renderWithProviders(wrapWithRouter(<Form headingText="Form heading" />));

      const expectedElement = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
