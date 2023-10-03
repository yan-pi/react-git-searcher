import { RepoProps } from "../types/repo";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) {
  return (
    <div className="flex justify-center items-center m-7">
      <Card className="w-[550px]">
        <CardHeader className="flex">
          <CardTitle className="font-mono text-2xl">{name}</CardTitle>
          <CardDescription className="flex flex-auto">
            <BsCodeSlash className="text-xl" />
            <span>{language}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div className=" flex flex-row gap-4">
            <div className="flex gap-1">
              <AiOutlineStar className="text-zinc-900 text-2xl" />
              <p>{stargazers_count}</p>
            </div>
            <div className="flex gap-1">
              <AiOutlineFork className="text-zinc-900 text-2xl" />
              <p>{forks_count}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex">
          <a
            href={html_url}
            target="_blank"
            className="flex "
          >
            <Button>
              Ver código
              <RiGitRepositoryLine className="ml-2 text-white text-xl" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Repo;
