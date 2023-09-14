import { Outlet } from "react-router-dom";
import GlobalStyles from "./utils/GlobalStyles";
import styled from "styled-components";

function App() {

  const Title = styled.h1`
  align-items: center;
  text-align: center;
  display: flex;
  margin: 20px;
  justify-content: center;
  `

  return (
    <>
      <GlobalStyles />
      <Title>Github Searcher</Title>
      <Outlet />
    </>
  );
}

export default App;
