import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="flex">
          <Skeleton className="w-[100px] h-[100px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[200px] h-[20px] rounded-full" />
        </CardHeader>
        <CardContent className="flex flex-col">
          <CardTitle className="font-mono text-2xl"></CardTitle>
          <CardDescription className="flex flex-auto gap-2">
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          </CardDescription>
        </CardContent>
        <CardFooter className="flex">
          <Skeleton className="w-[240px] h-[42px] rounded-full" />
        </CardFooter>
      </Card>
    </div>
  );
}

export default Loader;
