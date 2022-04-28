import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "constants/theme";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <Router>
        <MessagesPage path="/" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
