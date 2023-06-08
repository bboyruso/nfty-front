import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { fireEvent, screen } from "@testing-library/react";
import CreatePage from "./CreatePage";
import userEvent from "@testing-library/user-event";

describe("Given a Create page", () => {
  describe("When it receives a heading text `Add your artwork` and button Submit was clicked", () => {
    test("Then it should render correctly with a text", async () => {
      const expectedText = "Add your artwork";

      renderWithProviders(wrapWithRouter(<CreatePage />));

      const expectedElement = screen.getByRole("heading", {
        name: expectedText,
      });

      const button = screen.getByRole("button", { name: "Submit" });
      fireEvent.click(button);

      await userEvent.click(button);

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
