/* eslint-disable @typescript-eslint/no-unused-vars */
import { RepoProps } from "../types/repo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import Repo from "../components/Repo";

const Text = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`
const RepoContainer = styled.div`
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`
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

      orderedRepos = orderedRepos.slice(0, 5);
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
      <Text>Explore os repositórios do usuário: {username}</Text>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <RepoContainer>
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </RepoContainer>
      )}
    </div>
  );
}

export default Repos;
