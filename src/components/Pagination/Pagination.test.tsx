import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Pagination from "./Pagination";
import { vi } from "vitest";

describe("Given a Pagination Component", () => {
  describe("When it renders and receives button with text `Next`", () => {
    test("Then it should render correctly and button should be visible", () => {
      const expectedButtonText = "Next";
      const goNextPage = vi.fn();
      const goPreviousPage = vi.fn();

      renderWithProviders(
        wrapWithRouter(
          <Pagination nextPage={goNextPage} previousPage={goPreviousPage} />
        )
      );

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
