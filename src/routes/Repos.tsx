/* eslint-disable @typescript-eslint/no-unused-vars */
import { RepoProps } from "../types/repo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";


import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import Repo from "../components/Repo";

function Repos() {
  const { username } = useParams();
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadrepos = async function (username: string) {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await res.data;
      console.log(data); //apenas parar ver o que está vindo da API

      setIsLoading(false);

      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 10);
      setRepos(orderedRepos);
    };

    if (username) {
      loadrepos(username);
    }
  });

  if (!repos && isLoading) return <Loader />;

  return (
    <div>
      <BackBtn />
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Repos;
