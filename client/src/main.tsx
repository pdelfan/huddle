import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import { theme } from "./theme/theme";
import App from "./App";
import { Auth0ProviderWithConfig } from "./auth/auth0-provider-with-config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithConfig>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Auth0ProviderWithConfig>
  </React.StrictMode>
);
