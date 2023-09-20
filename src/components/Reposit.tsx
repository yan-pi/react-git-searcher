/* eslint-disable @typescript-eslint/no-unused-vars */
import { RepoProps } from "../types/repo";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div>
        <p>
          <AiOutlineStar />
          {stargazers_count}
        </p>
        <p>
          <AiOutlineFork />
          {forks_count}
        </p>
      </div>
      <a href={html_url} target="_blank">
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
}

export default Repo;
