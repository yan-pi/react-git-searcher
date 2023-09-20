/* eslint-disable @typescript-eslint/no-unused-vars */
import { RepoProps } from "../types/repo";

import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function Repos() {
  const { username } = useParams();
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async (username: string) => {
      try {
        setIsLoading(true);

        const res = await axios.get(
          `https://api.github.com/users/${username}/repos`,
        );
        const data = await res.data;
        console.log(data); //apenas parar ver o que está vindo da API

        setIsLoading(false);

        let orderedRepos = data.sort(
          (a: RepoProps, b: RepoProps) =>
            b.stargazers_count - a.stargazers_count,
        );
        orderedRepos = orderedRepos.slice(0, 5);
        setRepos(orderedRepos);

        if (username) {
          loadRepos(username);
        }
      } catch (error) {
        toast.error("Repositorios não encontrados", {});
      }
    };
  }, []);

  if (!repos || isLoading) return <Loader />;

  return (
    <div>
      {repos.map((repo: RepoProps) => (
        <div key={repo.name}>
          <h3>{repo.name}</h3>
          <p>{repo.language}</p>
          <div>
            <p>{repo.stargazers_count}</p>
            <p>{repo.forks_count}</p>
          </div>
          <div>
            <p>{repo.description}</p>
          </div>
          <a href={repo.html_url} target="_blank">
            <span>Ver código</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Repos;
