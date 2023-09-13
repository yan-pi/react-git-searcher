import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
