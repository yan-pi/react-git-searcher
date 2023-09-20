import "react-toastify/dist/ReactToastify.css"; //importando o css do toastify
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset de Estilos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos Globais */
  html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  }

  /* Estilo do body */
  body {
    margin: 0;
    padding: 2rem;
    margin: 0;
    font-family: "Inter", sans-serif;
    background-color: #141a1f; /* substitua pela cor desejada */
  }

  h1, h2, h3, h4, h5 {
  margin: 0;
  font-weight: bold;
  color: #fff;
  }
  p{
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
