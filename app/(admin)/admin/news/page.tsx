import { Button } from "@/components/ui/button";
import { prisma } from "@/prisma/client";
import Link from "next/link";
import NewsTable from "./_components/NewsTable";

const NewsPage = async () => {
  const news = await prisma.news.findMany({
    include: {
      images: true,
    },
  });

  if (!news) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <Button className="mb-4">
        <Link href="/admin/news/new">جدید</Link>
      </Button>
      <NewsTable news={news} />
    </div>
  );
};

export default NewsPage;
