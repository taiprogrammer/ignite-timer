import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.styles";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </ThemeProvider>
  );
}
