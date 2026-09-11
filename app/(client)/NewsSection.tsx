import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NewsSection = async () => {
  const news = await prisma.news.findMany({
    include: { images: true },
  });

  return (
    <>
      <ObserverProvider id="news">
        <SectionTitle title="اخبار" href="#news" />
        <div className="flex gap-5">
          {news.map(n => (
            <Card key={n.id} className="max-w-100 w-full p-4 space-y-4">
              <CardHeader>
                <Image src={n.images[0].url} alt={`Image of news ${n.images[0].newsId}`} width={500} height={500} className="w-full object-cover rounded-xl" />
              </CardHeader>
              <div className="p-2">
                <CardTitle>{n.title}</CardTitle>
                <CardDescription>{n.description}</CardDescription>
              </div>
              <CardFooter><Button className='w-full'>مشاهده بیشتر</Button></CardFooter>
            </Card>
          ))}
        </div>
      </ObserverProvider>
    </>
  );
};

export default NewsSection;
