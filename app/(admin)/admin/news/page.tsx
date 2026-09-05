import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { NewsWithImages } from "./types";

const NewsPage = () => {
  return (
    <div className="w-6xl">
      <Button className='mb-4'>
        <Link href="/admin/news/new">جدید</Link>
      </Button>
      <ScrollArea className="h-100 rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead className="text-right" key={column.value}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
        </Table>
      </ScrollArea>
    </div>
  );
};

const columns: { label: string; value: keyof NewsWithImages }[] = [
  { label: "آی دی", value: "id" },
  { label: "عکس", value: "images" },
  { label: "عنوان", value: "title" },
  { label: "توضیحات", value: "description" },
];

export default NewsPage;
