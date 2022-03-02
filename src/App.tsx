import React from "react";
import { GlobalStyles } from "style/global";
import { light } from "style/theme/light";
import { ThemeProvider } from "styled-components";
import { Header } from "components/Header/Header";
import { Main } from "components/Main/Main";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Header />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
