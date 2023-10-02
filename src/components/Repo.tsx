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
    <div className="bg-blue-900 p-8 rounded-lg border-2 border-blue-300 flex flex-col items-start gap-4 flex-1">
      <h3 className="text-white">{name}</h3>
      <p className="flex items-center text-white">
        <BsCodeSlash className="mr-2" />
        {language}
      </p>
      <div className="flex gap-4">
        <div className="flex items-center justify-center gap-2 text-white border border-blue-300 rounded-md pr-4">
          <span className="bg-green-500 p-1 rounded-md">
            <AiOutlineStar className="text-white text-2xl" />
          </span>
          <span>{stargazers_count}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-white border border-blue-300 rounded-md">
          <AiOutlineFork className="text-white text-2xl" />
          <span>{forks_count}</span>
        </div>
      </div>
      <a
        href={html_url}
        target="_blank"
        className="flex items-center py-2 px-4 text-white bg-blue-700 rounded-md hover:bg-blue-800"
      >
        <span>Ver código</span>
        <RiGitRepositoryLine className="ml-2 text-white text-xl" />
      </a>
    </div>
  );
}

export default Repo;
