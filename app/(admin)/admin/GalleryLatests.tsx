import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/prisma/client";
import Image from "next/image";
import DeleteButton from "@/app/(admin)/admin/_components/DeleteButton";
import { HiUpload } from "react-icons/hi";
import Link from "next/link";
const GalleryLatests = async () => {
  const images = await prisma.gallery.findMany({
    take: 5,
  });

  return (
    <Card className="w-full xl:max-w-1/2">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-[18px]">عکس های اخیر</h2>
        <Button variant="outline">
          <Link href='/admin/gallery' className="flex items-center gap-2"><HiUpload /> آپلود عکس</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-50 sm:w-full">
          {images.map((image) => (
            <div key={image.id} className="relative col-span-1 group">
              <Image
                src={image.url}
                alt={`Image of index ${image.id}`}
                className="object-cover rounded-2xl w-60 h-30"
                width={500}
                height={500}
              />
              <DeleteButton imageId={image.id} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryLatests;
