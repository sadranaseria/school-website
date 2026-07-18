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

const MajorsTable = ({ majors }: { majors: Major[] }) => {
  return (
    <ScrollArea className="h-100 w-full rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="w-40">
            {columns.map((column) => (
              <TableHead className={`text-right ${column.className}`} key={column.value}>
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {majors.map((major) => (
            <TableRow key={major.id}>
              <TableCell>
                <Link href={`/admin/majors/${major.id}`}>{major.title}</Link>
              </TableCell>
              <TableCell className='hidden md:table-cell'>{major.cretedAt.toDateString()}</TableCell>
              <TableCell className='hidden md:table-cell'>{major.updatedAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

const columns: { label: string; value: keyof Major , className ?: string }[] = [
  { label: "عنوان", value: "title" },
  { label: "ساخته شده", value: "cretedAt" , className : 'hidden md:table-cell' },
  { label: "آپدیت شده", value: "updatedAt" , className : 'hidden md:table-cell' },
];

export default MajorsTable;
