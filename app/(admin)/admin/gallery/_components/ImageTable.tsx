import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useImage from "../../../store";
import DeleteButton from "./DeleteButton";

const ImageTable = () => {
  const images = useImage((state) => state.images);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {images.map(({ image, isUploading, cid }) => (
        <div key={image.name} className="relative group cursor-pointer">
          <div className="relative">
            <Image
              src={URL.createObjectURL(image)}
              alt={image.name}
              width={200}
              height={200}
              className={cn(
                isUploading ? "opacity-50" : "",
                "rounded-lg size-36 object-cover",
              )}
            />
            {isUploading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-500 truncate">{image.name}</p>

          {!isUploading && <DeleteButton cid={cid!} imageName={image.name} />}
        </div>
      ))}
    </div>
  );
};

const columns: { label: string; value: string }[] = [
  { label: "عکس", value: "image" },
  { label: "نام عکس", value: "imageName" },
  { label: "نوع عکس", value: "uploadedAt" },
];

export default ImageTable;
