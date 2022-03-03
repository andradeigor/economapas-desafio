import React from "react";
import { GlobalStyles } from "style/global";
import { light } from "style/theme/light";
import { ThemeProvider } from "styled-components";
import { Router } from "router";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
