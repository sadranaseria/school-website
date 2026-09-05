import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import Image from "next/image";
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
    <Card className="w-7xl h-full">
      <CardHeader className="w-4xl mx-auto my-14 flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <CardTitle className="text-3xl">{news.title}</CardTitle>
          <DeleteButton newsId={news.id} />
        </div>
        <div>
          {news.images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt={`Image for news ${image.newsId}`}
              width={200}
              height={200}
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
