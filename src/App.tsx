import React from "react";
import { ThemeProvider } from 'styled-components'
import theme from "constants/theme";

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <div>
        App is under construction
      </div>
    </ThemeProvider>
  );
}

export default App;
