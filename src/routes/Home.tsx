/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserProps } from "../types/user";
import { useState } from "react";
import Search from "../components/Search";
import axios from "axios";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const loadUser = async function (userName: string) {
    setUser(null);
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    const data = await res.data;
    console.log(data);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
}

export default Home;
