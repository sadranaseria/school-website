import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useImage from "../../../store";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const ImageTable = () => {
  const images = useImage((state) => state.images);
  return (
    <ScrollArea>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead className="text-right" key={column.value}>
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {images.map(({ image, id }) => (
            <TableRow key={image.name}>
              <TableCell>
                <Image
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  width={200}
                  height={200}
                  className="size-36 object-cover"
                />
              </TableCell>
              <TableCell>{image.name}</TableCell>
              <TableCell>{image.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

const columns: { label: string; value: string }[] = [
  { label: "عکس", value: "image" },
  { label: "نام عکس", value: "imageName" },
  { label: "نوع عکس", value: "uploadedAt" },
];

export default ImageTable;
