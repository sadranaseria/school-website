import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { NewsWithImages } from "./types";
import Markdown from "react-markdown";

const NewsPage = async () => {
  const news = await prisma.news.findMany({
    include: {
      images: true,
    },
  });

  if (!news) return null;

  return (
    <div className="w-4xl">
      <Button className="mb-4">
        <Link href="/admin/news/new">جدید</Link>
      </Button>
      <ScrollArea className="h-100 rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead className={`text-right ${column.className}`} key={column.value}>
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((n) => (
              <TableRow key={n.id}>
                <TableCell className="w-12">{n.id}</TableCell>
                <TableCell className="w-40">
                  <Image
                    src={n.images[0].url}
                    alt={`Image for news ${n.images[0].newsId}`}
                    width={200}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                </TableCell>
                <TableCell><Button variant='link'><Link href={`/admin/news/${n.id}`}>{n.title}</Link></Button></TableCell>
                <TableCell><Markdown>{n.description.substring(0 ,20)}</Markdown></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

const columns: { label: string; value: keyof NewsWithImages , className ?: string }[] = [
  { label: "آی دی", value: "id" },
  { label: "عکس", value: "images" },
  { label: "عنوان", value: "title" },
  { label: "توضیحات", value: "description" , className : 'hidden md:table-cell' },
];

export default NewsPage;
