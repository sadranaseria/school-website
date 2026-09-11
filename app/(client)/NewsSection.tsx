import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";

const NewsSection = async () => {
  const news = await prisma.news.findMany({
    include: { images: true },
  });

  return (
    <>
      <ObserverProvider id="news">
        <SectionTitle title="اخبار" href="#news" />
        <ul>
          {news.map((news) => (
            <li key={news.id}>{news.title}</li>
          ))}
        </ul>
      </ObserverProvider>
    </>
  );
};

export default NewsSection;
