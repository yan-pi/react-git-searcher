/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserProps } from "../types/user";
import { useState } from "react";
import Search from "../components/Search";
import axios from "axios";
import styled from "styled-components";

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async function (userName: string) {
    setUser(null);
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

  const UserName = styled.p`
    color: #fff;
    text-align: center;
  `;
  
  return (
    <div>
      <Search loadUser={loadUser} />

      {user && <UserName>{user.login}</UserName>}
    </div>
  );
}

export default Home;
