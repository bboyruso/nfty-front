import { render } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import theme from "../../GlobalStyle/theme/theme";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given a HeaderComponent", () => {
  describe("When it receives a logo with a text `NFTIFY`", () => {
    test("Then it should show a logo", () => {
      const expectedText = "NFTIFY";
      const routes = [
        {
          path: "/",
          element: (
            <ThemeProvider theme={theme}>
              <Header />
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
