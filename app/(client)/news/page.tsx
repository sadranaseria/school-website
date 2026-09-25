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
      <div className='mx-auto w-fit sm:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10'>
        {news.map((news) => (
            <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsPage;
