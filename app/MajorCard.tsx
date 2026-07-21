import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Major } from "@/lib/generated/prisma/client";
import Markdown from "react-markdown";
import ShowMaoreLess from "./components/ShowMaoreLess";

const MajorCard = ({ major }: { major: Major }) => {
  return (
    <Card className="p-4 ring-0">
      <CardTitle className="text-6xl text-primary">{major.title}</CardTitle>
      <CardDescription className="prose">
          <ShowMaoreLess text={major.description} />
      </CardDescription>
    </Card>
  );
};

export default MajorCard;
