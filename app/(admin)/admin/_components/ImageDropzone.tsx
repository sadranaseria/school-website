"use client";

import { Button } from "@/components/ui/button";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { deleteImage } from "../action";

type ImageType = Array<{ url: string; key: string }>;

interface Props {
  value?: ImageType;
  onChange?: (images: ImageType) => void;
}

const ImageDropzone = ({ onChange, value }: Props) => {
  const [images, setImages] = useState<ImageType>(value ?? []);

  const handleDelete = async (key: string) => {
    const { success, message } = await deleteImage(key);
    if (success)
      setImages(images.filter(img => img.key !== key));
    else
      console.log(message);
  };

  return (
    <>
      <UploadDropzone
        className="hover:border-blue-500 cursor-pointer"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const newImages = res.map((r) => ({ url: r.ufsUrl, key: r.key }));

          setImages((prev) => [...prev, ...newImages]);

          onChange?.([
            ...images.map(({ url, key }) => ({ url, key })),
            ...newImages,
          ]);

          console.log(images);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        content={{
          label: "عکسی را بکشید یا آپلود کنید",
        }}
      />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <div key={image.key} className="relative group">
            <Image
              src={image.url}
              alt="image"
              className="size-40 object-cover rounded-xl"
              width={200}
              height={200}
              loading="eager"
            />
            <Button
              onClick={() => handleDelete(image.key)}
              variant="destructive"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <HiX />
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageDropzone;
