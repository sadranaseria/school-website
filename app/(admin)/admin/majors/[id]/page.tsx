import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import MarkDown from "react-markdown";
import { fetchMajor } from "../../action";
import DeleteMajorButton from "./_components/DeleteMajorButton";

const MajorDetalisPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const major = await fetchMajor(parseInt(id));
  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl h-100">
      <div className="flex justify-between items-center">
        <h1>{major?.title}</h1>
        <div className="flex items-center gap-4">
          <DeleteMajorButton majorId={parseInt(id)} />
          <Button className="bg-violet-200 hover:bg-violet-300">
            <Link href={`/admin/majors/${id}/edit`} className="text-violet-600">
              ویرایش
            </Link>
          </Button>
        </div>
      </div>
      <Card className="max-w-3xl min-h-100 prose p-4 wrap-anywhere">
        <ScrollArea className="h-100 w-full rounded-md">
          <MarkDown>{major?.description}</MarkDown>
        </ScrollArea>
      </Card>
    </div>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const major = await fetchMajor(parseInt(id));

  return {
    title: major?.title,
    description: `This page for admin and just admin can enter it. And this page is about ${major?.id}`,
  };
}

export default MajorDetalisPage;
