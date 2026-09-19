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
import Link from "next/link";
import { MajorsWithImages } from "../types";
import Image from "next/image";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

const MajorsTable = ({ majors }: { majors: MajorsWithImages[] }) => {
  return (
    <ScrollArea className="h-100 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="w-20">
            {columns.map((column) => (
              <TableHead
                className={`text-right ${column.className}`}
                key={column.value}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {majors.map((major) => (
            <TableRow key={major.id}>
              <TableCell>{major.id}</TableCell>
              <TableCell>
                <Image
                  src={major.images[0].url}
                  alt={`Image of major ${major.images[0].majorId}`}
                  width={500}
                  height={500}
                  className="w-30 rounded-lg"
                />
              </TableCell>
              <TableCell>
                <Button variant="link">
                  <Link href={`/admin/majors/${major.id}`}>{major.title}</Link>
                </Button>
              </TableCell>
              <TableCell>{major.students}</TableCell>
              <TableCell>
                <Markdown>{major.description}</Markdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

const columns: {
  label: string;
  value: keyof MajorsWithImages;
  className?: string;
}[] = [
  { label: "آی دی", value: "id" },
  { label: "عکس", value: "images" },
  { label: "عنوان", value: "title" },
  { label: "تعداد هنرجویان", value: "students" },
  { label: "توضیحات", value: "description" },
];

export default MajorsTable;
