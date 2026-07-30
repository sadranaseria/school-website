import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Major } from "@/lib/generated/prisma/client";
import ExpendableText from "./components/ExpandableText";
import ObserverProvider from "./components/ObserverProvider";

const MajorCard = ({ major }: { major: Major }) => {
  return (
    <ObserverProvider id="majors">
      <Card className="p-4 ring-0">
        <CardTitle className="text-6xl text-primary">{major.title}</CardTitle>
        <CardDescription>
          <ExpendableText>{major.description}</ExpendableText>
        </CardDescription>
      </Card>
    </ObserverProvider>
  );
};

export default MajorCard;
