import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.styles";

import { Button } from "./components/Button";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  );
}
