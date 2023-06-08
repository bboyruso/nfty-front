import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Form from "./Form";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const handleSubmit = vi.fn();

describe("Given a Form Component", () => {
  describe("When it renders and contains a heading text`Form heading`", () => {
    test("Form should renders with this heading correctly", () => {
      const expectedHeading = "Form heading";

      renderWithProviders(
        wrapWithRouter(
          <Form
            onFormSubmit={() => {
              handleSubmit;
            }}
            headingText="Form heading"
          />
        )
      );

      const expectedElement = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(expectedElement).toBeInTheDocument();
    });
  });

  describe("When is rendered and the user fills the form and submits", () => {
    test("Then it should call the received submit handler function", async () => {
      const buttonText = "Submit";
      const inputText = "New Nft";

      renderWithProviders(
        <Form headingText="Create" onFormSubmit={handleSubmit} />
      );

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      const input = screen.getByRole("textbox", {
        name: "Title",
      });

      await userEvent.click(button);
      await userEvent.type(input, inputText);

      expect(input).toHaveValue(inputText);
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
