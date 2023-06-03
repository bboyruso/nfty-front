import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading Ui Component", () => {
  describe("When it renders", () => {
    test("Then it should render correctly", () => {
      const loadingAnimationLabel = "loading animation";

      renderWithProviders(wrapWithRouter(<Loading />));
      const loadingElement = screen.getByLabelText(loadingAnimationLabel);

      expect(loadingElement).toBeInTheDocument();
    });
  });
});
