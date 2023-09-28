/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className=" p-8 rounded-lg flex flex-col items-center gap-4 m-4">
    <h2 className="text-black">Busque por um usuário:</h2>
    <p className="text-gray-400">Conheça seus melhores repositórios</p>
    <div className="flex gap-2">
      <Input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite o nome do usuário"
        className="bg-gray-800 p-2 rounded border border-gray-600 text-gray-300"
      />
      <Button variant={"primary"}
        onClick={() => loadUser(userName)}
        className="bg-blue-500 text-blue-900 p-2 rounded cursor-pointer"
      >
        <BsSearch />
      </Button>
    </div>
  </div>
  );
}

export default Search;
