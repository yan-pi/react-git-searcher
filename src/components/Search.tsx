/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

//types
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

// Defina estilos para o seu componente Search usando styled-components
const SearchContainer = styled.div`
  background-color: #2c3a46;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 15px 450px;

  h2 {
    color: #ffffff;
  }
`;

const Description = styled.p`
  color: #9da5d1;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  input,
  button {
    padding: 0.6rem;
    border-radius: 3px;
    border: none;
    color: #80a8c9;
  }

  button {
    background-color: #171f25;
    cursor: pointer;
  }
`;

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <SearchContainer>
      <h2>Busque por um usuário:</h2>
      <Description>Conheça seus melhores repositórios</Description>
      <InputContainer>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite o nome do usuário"
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </InputContainer>
    </SearchContainer>
  );
}

export default Search;
