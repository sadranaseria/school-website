import { prisma } from "@/prisma/client";
import Image from "next/image";
import Markdown from "react-markdown";
import { HiLink } from "react-icons/hi";
import Link from "next/link";

const NewsDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const news = await prisma.news.findUnique({
    where: { id: parseInt(id) },
    include : { images : true }
  })

  const latestNews = await prisma.news.findMany({
    take: 5,
    
  })

  if (!news) return null;
  
  return (
    <section className="mt-50 mb-20 flex justify-center items-start gap-10">
      <div className="max-w-3xl bg-white p-6 rounded-3xl space-y-5">
        <h1 className="text-xl font-extrabold">{news?.title}</h1>
        <Image src={news?.images[0]?.url} alt="" width={500} height={500} className="w-full object-cover rounded-3xl" />
        <div className="text-justify"><Markdown>{news.description}</Markdown></div>
      </div>
      <div className="bg-white max-w-lg w-full rounded-3xl space-y-2 p-6">
        <p className="flex items-center gap-2 mb-2"><HiLink />جدیدترین اخبار</p>
        {latestNews.map(news => (
          <Link className="block bg-gray-300 p-2 rounded-lg w-full hover:bg-gray-200 transition-colors" key={news.id} href={`/news/${news.id}`}>{news.title}</Link>
        ))}
      </div>
    </section>
  )
}

export default NewsDetailsPage;