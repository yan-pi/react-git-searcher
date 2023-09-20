/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserProps } from "../types/user";
import { useState } from "react";

import Search from "../components/Search";
import User from "../components/User";
import Loader from "../components/Loader";

import axios from "axios";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async function (userName: string) {
    setUser(null);
    setIsLoading(true);

    const res = await axios.get(`https://api.github.com/users/${userName}`);
    const data = await res.data;
    console.log(data);

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />

      {user && <User {...user} />}
    </div>
  );
}

export default Home;
