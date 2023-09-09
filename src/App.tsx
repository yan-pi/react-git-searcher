import { Outlet } from "react-router-dom";
import GlobalStyles from "./utils/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Github Searcher</h1>
      <Outlet />
    </>
  );
}

export default App;
