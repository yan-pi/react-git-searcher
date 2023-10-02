import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

function User({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="flex">
          <Avatar className="h-20 w-20">
            <AvatarImage src={avatar_url} alt={login} />
            <AvatarFallback>{login[0]}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="flex flex-col">
          <CardTitle className="font-mono text-2xl">{login}</CardTitle>
          <CardDescription className="flex flex-auto">
            <MdLocationPin className="text-xl" />
            <span>{location}</span>
          </CardDescription>
          <div className=" flex flex-row gap-4">
            <div className="flex gap-1">
              <p>Seguidores:</p>
              <p>{followers}</p>
            </div>
            <div className="flex gap-1">
              <p>Seguindo:</p>
              <p>{following}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex">
          <Link to={`/repos/${login}`}>
            <Button>Ver melhores projetos</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default User;
