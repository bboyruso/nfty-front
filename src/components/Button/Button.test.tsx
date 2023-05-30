import { render } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import theme from "../../GlobalStyle/theme/theme";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given a Button Component", () => {
  describe("When it receives a text content `Create`", () => {
    test("Then it should render with a text", () => {
      const expectedText = "Create";
      const routes = [
        {
          path: "/",
          element: (
            <ThemeProvider theme={theme}>
              <Button text={expectedText} />
            </ThemeProvider>
          ),
        },
      ];

      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);

      expect(expectedText).toBeInTheDocument;
    });
  });
});
