import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import DeleteButton from "./DeleteButton";

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const news = await prisma.news.findUnique({
    where: { id: parseInt(id) },
    include: { images: true },
  });
  if (!news) return null;

  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader className="w-4xl mx-auto my-14 flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <CardTitle className="text-3xl">{news.title}</CardTitle>
          <div className="flex gap-4 items-center mt-4">
            <DeleteButton newsId={news.id} />
            <Button className="bg-violet-400 hover:bg-violet-500">
              <Link href={`/admin/news/${news.id}/edit`}>ویرایش</Link>
            </Button>
          </div>
        </div>
        <div>
          {news.images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt={`Image for news ${image.newsId}`}
              width={500}
              height={500}
              className="w-100 object-cover rounded-4xl"
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="w-5xl mx-auto">
        <Markdown>{news.description}</Markdown>
      </CardContent>
    </Card>
  );
};

export default NewsDetailsPage;
