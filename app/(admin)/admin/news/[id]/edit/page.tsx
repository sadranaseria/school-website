import { prisma } from "@/prisma/client";
import NewsForm from "../../_components/NewsForm";

const EditNewsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const news = await prisma.news.findUnique({
    where: { id: parseInt(id) },
    include : { images : true }
  })
  if (!news) return null;
  return (
    <div className="max-w-3xl mx-auto">
      <NewsForm news={news} />
    </div>
  )
}

export default EditNewsPage;