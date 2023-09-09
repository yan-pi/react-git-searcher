import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset de Estilos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  /* Estilo do body */
  body {
    margin: 0;
    padding: 2rem;
    font-family: Arial, sans-serif; /* ou a fonte que você preferir */
    background-color: #141a1f; /* substitua pela cor desejada */
  }

  a {
    text-decoration: none;
  }
  
`;

export default GlobalStyles;
