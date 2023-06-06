import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/inter-latin-400-normal-0364d368.woff2') format('woff2');
  font-display: swap;
  }
  
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
  
  
  body {
    margin: 20px;
    font-family: 'Inter';
    min-height: 100vh;
  }
  
  h1,
  h2,
  h3,
  h4
  {
    margin: 0;
    font : inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  input {
    font-family: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

  img{
    max-width: 100%;
    padding: 0;
  }
  

    @media only screen and (max-width: 380px) {
  body {
    margin: 10px;
  }
  }


`;

export default GlobalStyle;
