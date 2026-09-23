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
                <TableCell>{n.id.toLocaleString('fa-IR')}</TableCell>
                <TableCell className='size-15'>
                  <Image src={n.images[0].url} alt={`Image of news ${n.images[0].newsId}`} width={500} height={500} className="size-full object-cover rounded-md" />
                </TableCell>
                <TableCell><Button className='bg-white text-primary hover:bg-gray-100/10 hover:underline underline-offset-4'><Link href={`/admin/news/${n.id}`}>{n.title}</Link></Button></TableCell>
                <TableCell className='flex items-center'><Markdown>{n.description.substring(0 , 10)}</Markdown>{n.description.length >= 10 && '...'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default NewsLatest;
