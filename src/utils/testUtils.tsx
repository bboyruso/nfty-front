import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyle/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import theme from "../GlobalStyle/theme/theme";
import { render } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={testStore}>{children}</Provider>;
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
