import { BsSearch } from "react-icons/bs";
import { useState } from "react";

type SearchProps = {
  loadUser: (userNames: string[]) => Promise<void>;
};

const [userName, setUserName] = useState("");

function Search(loadUser: SearchProps) {
  return (
    <div>
      <h2>Busque por um usuario:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="digite o nome do usuario"
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
