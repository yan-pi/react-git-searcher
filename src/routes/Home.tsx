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
    console.log("api request: " + data);
    const [
      avatar_url,
      primaryName,
      bio,
      publicRepos,
      followers,
      following,
      company,
      location,
      email,
      blog,
      twitter_username,
      created_at,
      updated_at,
    ] = data;

    const userData: UserProps ={
      avatar_url,
      primaryName,
      bio,
      publicRepos,
      followers,
      following,
      company,
      location,
      email,
      blog,
      twitter_username,
      created_at,
      updated_at,
    };
    setUser(userData);
    
    }

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
}

export default Home;
