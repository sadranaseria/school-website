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
import { PassedWithImages } from "./types";
import { HiTrash } from "react-icons/hi2";
import DeletePassedButton from "./_components/DeletePassedButton";

const PassUnivercityPage = async () => {
  const passeds = await prisma.passed.findMany({
    include: { images: true },
  });

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <Button>
        <Link href="/admin/passeds/new">جدید</Link>
      </Button>
      <ScrollArea className="h-100 rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  className={`text-right ${column.className}`}
                  key={column.value}
                >
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="text-right">عملیات ها</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {passeds.map((passed) => (
              <TableRow key={passed.id}>
                <TableCell>{passed.id}</TableCell>
                <TableCell>
                  <Image
                    src={passed.images[0].url}
                    alt={`Image of passed ${passed.images[0].passedId}`}
                    width={500}
                    height={500}
                    className="w-30 rounded-lg"
                  />
                </TableCell>
                <TableCell>{passed.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {passed.univercity}
                </TableCell>
                <TableCell>
                  <DeletePassedButton passedId={passed.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

const columns: {
  label: string;
  value: keyof PassedWithImages;
  className?: string;
}[] = [
  { label: "آی دی", value: "id" },
  { label: "عکس", value: "images" },
  { label: "نام هنرجو", value: "name" },
  { label: "دانشگاه", value: "univercity", className: "hidden md:table-cell" },
];

export default PassUnivercityPage;
