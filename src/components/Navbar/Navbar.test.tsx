import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../../GlobalStyle/theme/theme";

describe("Given a Navbar Component", () => {
  describe("When it renders and contains two paths `Create` and `Logout` ", () => {
    test("Navbar should renders correctly", () => {
      const expectedPathOne = "Create";
      const expectedPathTwo = "Logout";

      const routes = [
        {
          path: "/",
          element: (
            <ThemeProvider theme={theme}>
              <Navbar />
            </ThemeProvider>
          ),
        },
      ];

      const router = createMemoryRouter(routes);
      render(<RouterProvider router={router} />);

      expect(screen.getByText(expectedPathOne)).toBeInTheDocument();
      expect(screen.getByText(expectedPathTwo)).toBeInTheDocument();
    });
  });
});
