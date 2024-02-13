import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height:100%;
}

body {
    justify-content:center;
    display:flex;
    margin:0;
    padding:0;
    background-color:black;
    color:white;
}

* {
    box-sizing: border-box;
    font-family:'Catamaran', sans-serif;

}


`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
