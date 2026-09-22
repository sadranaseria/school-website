import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import NewsCard from "./components/NewsCard";

const NewsSection = async () => {
  const news = await prisma.news.findMany({
    include: { images: true },
  });

  return (
    <section className="py-20">
      <ObserverProvider id="news">
        <SectionTitle title="اخبار" href="#news" viewMore={true} viewMoreText="همه اخبار" viewMoreLink="/news" />
        <div className="flex gap-5 my-20">
          {news.map((n) => (
            <NewsCard key={n.id} news={n} />
          ))}
        </div>
      </ObserverProvider>
    </section>
  );
};

{
  /*<Card
  key={n.id}
  className="ring-0 max-w-90 w-full min-h-120 h-full p-0 space-y-4 flex flex-col justify-between relative rounded-4xl hover:cursor-pointer group"
>
  <CardHeader className="p-0">
    <Image
      src={n.images[0].url}
      alt={`Image of news ${n.images[0].newsId}`}
      width={500}
      height={500}
      className="top-0 right-0 left-0 h-58 object-cover"
    />
  </CardHeader>
  <CardContent className="absolute bottom-0 right-0 left-0 top-49 bg-white rounded-t-4xl flex flex-col justify-between p-4 group-hover:top-0 transition-all group-hover:backdrop-blur-3xl group-hover:bg-white/50">
    <div className="p-2 space-y-12">
      <CardTitle className="text-2xl font-normal">{n.title}</CardTitle>
      <CardDescription className="text-gray-700">{n.description}</CardDescription>
    </div>
    <CardFooter className="p-0">
      <Button className="w-full rounded-full">مشاهده بیشتر</Button>
    </CardFooter>
  </CardContent>
</Card>*/
}

export default NewsSection;
