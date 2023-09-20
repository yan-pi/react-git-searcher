/* eslint-disable @typescript-eslint/no-unused-vars */
import { RepoProps } from "../types/repo";
import styled from "styled-components";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";


const RepoContainer = styled.div`
  background-color: #0e1129;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #9da5d1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  flex: 1 0 50%;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: #fff;
  border-radius: 3px;
  border: 1px solid #9da5d1;
  padding-right: 0.4rem;
`;

const StarIcon = styled(AiOutlineStar)`
  background-color: #4ed8c7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 2rem;
`;

const RepoButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #9da5d1;
  background-color: #2b3566;
  border-radius: 5px;
  gap: 0.5rem;
`;

function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) {
  return (
    <RepoContainer>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <StatsContainer>
        <StatsItem>
          <StarIcon />
          <span>{stargazers_count}</span>
        </StatsItem>
        <StatsItem>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </StatsItem>
      </StatsContainer>
      <RepoButton href={html_url} target="_blank">
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </RepoButton>
    </RepoContainer>
  );
}
 
export default Repo;
