import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import CreatePage from "./CreatePage";

describe("Given a Create page", () => {
  describe("When it receives a heading text `Add your artwork`", () => {
    test("Then it should render correctly with a text", () => {
      const expectedText = "Add your artwork";

      renderWithProviders(wrapWithRouter(<CreatePage />));

      const expectedElement = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
