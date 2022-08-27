import React from "react";
import { ThemeProvider } from "styled-components";
import { customViewports } from "./customViewports";
import { theme } from "../src/theme/theme";
import { GlobalStyle } from "../src/theme/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
