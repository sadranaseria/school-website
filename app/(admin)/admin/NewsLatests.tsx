import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import { columns } from "./varaibles";
import { TbCirclePlus } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";

const NewsLatest = async () => {
  const news = await prisma.news.findMany({
    take: 5,
    include: { images: true },
  });

  return (
    <Card className="w-1/2">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-[18px]">اخبار های جدید</h2>
        <Button variant="outline">
          <Link href="/admin/news/new" className="flex items-center gap-2"><TbCirclePlus />ساخت خبر</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map(column => (
                <TableHead key={column.value} className={`text-right ${column.className}`}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map(n => (
              <TableRow key={n.id}>
                <TableCell>{n.id}</TableCell>
                <TableCell>
                  <Image src={n.images[0].url} alt={`Image of news ${n.images[0].newsId}`} width={500} height={500} className="w-25 rounded-lg object-cover" />
                </TableCell>
                <TableCell><Button variant="link"><Link href={`/admin/news/${n.id}`}>{n.title}</Link></Button></TableCell>
                <TableCell><Markdown>{n.description}</Markdown></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default NewsLatest;
