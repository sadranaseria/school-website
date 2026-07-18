import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { prisma } from "@/prisma/client";
import MarkDown from "react-markdown";
import DeleteMajorButton from "./_components/DeleteMajorButton";

const MajorDetalisPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const major = await prisma.major.findUnique({
    where: { id: parseInt(id) },
  });
  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl h-100">
      <div className="flex justify-between items-center">
        <h1>{major?.title}</h1>
        <DeleteMajorButton majorId={parseInt(id)} />
      </div>
      <Card className="max-w-3xl min-h-100 prose p-4 wrap-anywhere">
        <ScrollArea className="h-100 w-full rounded-md">
          <MarkDown>{major?.description}</MarkDown>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default MajorDetalisPage;
