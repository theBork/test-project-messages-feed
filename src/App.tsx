import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "constants/theme";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box }
`;

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <div>
        App is under construction
      </div>
    </ThemeProvider>
  );
}

export default App;
