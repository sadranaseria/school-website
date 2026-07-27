import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Major } from "@/lib/generated/prisma/client";
import Markdown from "react-markdown";
import ExpendableText from "./components/ExpandableText";

const MajorCard = ({ major }: { major: Major }) => {
  return (
    <Card className="p-4 ring-0">
      <CardTitle className="text-6xl text-primary">{major.title}</CardTitle>
      <CardDescription>
        <ExpendableText>{major.description}</ExpendableText>
      </CardDescription>
    </Card>
  );
};

export default MajorCard;
