import React from "react";
import Homescreen from "./components/Homescreen/Homescreen";
import { GlobalStyle, Wrapper } from "./App.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Homescreen />
      </Wrapper>
    </>
  );
}

export default App;
