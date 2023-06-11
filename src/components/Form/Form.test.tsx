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
      const buttonText = "Create";
      const description = "New Nft and come description";
      const title = "Best NFT";

      renderWithProviders(
        <Form headingText="Create" onFormSubmit={handleSubmit} />
      );

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      const inputTitle = screen.getByRole("textbox", {
        name: "Title",
      });

      const inputDescription = screen.getByRole("textbox", {
        name: "Description",
      });

      await userEvent.type(inputTitle, title);
      await userEvent.type(inputDescription, description);

      await userEvent.click(button);

      expect(inputTitle).toHaveValue(title);
      expect(inputDescription).toHaveValue(description);
    });
  });
});
