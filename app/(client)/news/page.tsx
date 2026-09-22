import { prisma } from "@/prisma/client";
import NewsCard from "../components/NewsCard";
import NewsPageHeader from "./NewsPageHeader";

const NewsPage = async () => {
  const newsCount = await prisma.news.count();
  const news = await prisma.news.findMany({
    include: { images: true },
  });

  return (
    <section>
      <NewsPageHeader newsCount={newsCount} />
      {news.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </section>
  );
};

export default NewsPage;
