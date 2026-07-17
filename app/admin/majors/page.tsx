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
import { Major } from "@/lib/generated/prisma/client";
import { prisma } from "@/prisma/client";
import Link from "next/link";

const columns: { label: string; value: keyof Major }[] = [
  { label: "عنوان", value: "title" },
  { label: "ساخته شده", value: "cretedAt" },
  { label: "آپدیت شده", value: "updatedAt" },
];

const MajorsPage = async () => {
  const majors = await prisma.major.findMany();
  return (
    <div className="w-400 overflow-y-auto">
      <Button className='mb-5'>
        <Link href="/admin/majors/new">رشته جدید</Link>
      </Button>
      <ScrollArea className="h-100 w-full rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="w-40">
              {columns.map((column) => (
                <TableHead className="text-right" key={column.value}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {majors.map((major) => (
              <TableRow key={major.id}>
                <TableCell>{major.title}</TableCell>
                <TableCell>{major.cretedAt.toDateString()}</TableCell>
                <TableCell>{major.updatedAt.toDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default MajorsPage;
