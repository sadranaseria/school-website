import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuUniversity } from "react-icons/lu";
import { TbSlideshow } from "react-icons/tb";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";

interface Props {
  majors: number;
  images: number;
  news: number;
  passeds: number;
}

const Summery = ({ images, majors, news, passeds }: Props) => {
  const summeryCards: { label: string; value: number; icon: ReactNode , link : string }[] = [
    {
      label: "تعداد رشته ها",
      value: majors,
      icon: <HiOutlineBookOpen className="size-6" />,
      link : '/admin/majors/new',
    },
    {
      label: "تعداد عکس ها",
      value: images,
      icon: <TbSlideshow className="size-6" />,
      link : '/admin/gallery',
    },
    {
      label: "تعداد اخبار",
      value: news,
      icon: <HiOutlineNewspaper className="size-6" />,
      link : '/admin/news/new',
    },
    {
      label: "تعداد قبولی ها",
      value: passeds,
      icon: <LuUniversity className="size-6" />,
      link : '/admin/passeds/new',
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        {summeryCards.map((sumCard, index) => (
          <Card className="w-70 h-40 relative group hover:scale-95 transition-all cursor-pointer" key={index}>
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-bl from-primary/50 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="absolute top-4 right-00 left-0 w-full text-xl flex items-center justify-between group-hover:text-white">
              {sumCard.label}
              <div className="bg-linear-to-bl from-primary/50 to-indigo-400 px-1 py-0.5 rounded-sm group-hover:bg-none group-hover:bg-white text-white group-hover:text-indigo-500">{sumCard.icon}</div>
            </CardHeader>
            <CardContent className="absolute bottom-4 right-0 left-0 w-full flex items-center justify-between">
              <p className="text-3xl group-hover:text-white">
                {sumCard.value}
              </p>
              <Link href={sumCard.link}><HiArrowTopRightOnSquare className="size-6 text-indigo-500 group-hover:text-white p-1 inline-block cursor-pointer border border-indigo-500 group-hover:border-white rounded-sm" /></Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Summery;
