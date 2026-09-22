import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Image from "next/image";
import { NewsWithImages } from "@/app/(admin)/admin/news/types";

const NewsCard = ({ news }: { news: NewsWithImages }) => {
  return (
    <Card className="w-80 h-120 ring-0 p-0 rounded-2xl group cursor-pointer shadow-xm overflow-visible">
      <CardHeader className="p-0">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={news.images[0].url}
            alt={`Image of news ${news.images[0].newsId}`}
            width={500}
            height={500}
            className="top-0 right-0 left-0 h-58 object-cover group-hover:brightness-102 group-hover:scale-110 group-hover:-rotate-2 transition-all"
          />
        </div>
      </CardHeader>
      <div className="h-full flex flex-col justify-between">
        <CardContent>
          <CardTitle>{news.title}</CardTitle>
          <CardDescription>{news.description}</CardDescription>
        </CardContent>
        <CardFooter className="relative">
          <Button className="absolute -top-6 left-0 mx-auto right-0 w-60 rounded-lg h-12">
            <Link href={`/news/${news.id}`} className="flex items-center gap-2">
              مطالعه
              <HiArrowNarrowLeft />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default NewsCard;
