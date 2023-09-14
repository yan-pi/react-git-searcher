import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const SearchContainer = styled.div`
    background-color: #2b3566;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  `;
  return (
    <SearchContainer>
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
    </SearchContainer>
  );
}

export default Search;
