import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Given a Modal feedback Component", () => {
  describe("When it receives a text `Something went wrong`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Something went wrong OK";

      renderWithProviders(
        wrapWithRouter(<Modal text="Something went wrong" />)
      );

      const modal = screen.getByRole("button", {
        name: expectedText,
      });

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When it receives Error and text `Something went wrong`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Something went wrong OK";

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
