import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Given a Modal feedback Component", () => {
  describe("When it receives a text `Welcome`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Welcome";

      renderWithProviders(wrapWithRouter(<Modal text="Welcome" />));

      const modal = screen.getByRole("button", {
        name: expectedText,
      });

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When it receives isError property and text `Something went wrong`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Something went wrong";

      renderWithProviders(
        wrapWithRouter(<Modal isError text="Something went wrong" />)
      );

      const modalError = screen.getByRole("button", {
        name: expectedText,
      });

      expect(modalError).toBeInTheDocument();
    });
  });
});
