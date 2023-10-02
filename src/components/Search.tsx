import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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
    <div className="container flex flex-row justify-center items-center mt-56 mb-4">
      <div className="rid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">UserName</Label>
        <div className="flex  gap-2 flex-row">
          <Input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a user"
            className="w-full"
          />
          <Button
            onClick={() => loadUser(userName)}
            className="bg-gray-200 hover:bg-gray-300"
          >
            <BsSearch className="text-slate-950" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Search;
