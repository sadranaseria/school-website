import { prisma } from "@/prisma/client";
import Image from "next/image";
import DeleteButton from "../../_components/DeleteButton";

const ImageTable = async () => {
  const images = await prisma.gallery.findMany();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {images.map((image) => (
        <div key={image.id} className="relative group cursor-pointer">
          <div className="relative">
            <Image
              src={image.url}
              alt={`Image of index ${image.id}`}
              width={200}
              height={200}
              className="size-40 w-full object-cover hover:scale-107 transition-transform  rounded-lg"
              loading="eager"
            />
          </div>
          <DeleteButton imageId={image.id} />
        </div>
      ))}
    </div>
  );
};

export default ImageTable;
