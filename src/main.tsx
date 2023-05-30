import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "./GlobalStyle/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./GlobalStyle/theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
