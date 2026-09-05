"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

type ImageType = Array<{ url: string; key: string }>;

interface Props {
  value?: ImageType;
  onChange?: (images: ImageType) => void;
}

const ImageDropzone = ({ onChange, value }: Props) => {
  const [images, setImages] = useState<ImageType>(value ?? []);

  return (
    <>
      <UploadDropzone
        className="hover:border-blue-500 cursor-pointer"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const newImages = res.map(r => ({ url: r.ufsUrl, key: r.key }));
          
          setImages((prev) => ([...prev, ...newImages]));

          onChange?.([
            ...images.map(({ url, key }) => ({ url, key })),
            ...newImages
          ])
          
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
          <Image
            key={image.key}
            src={image.url}
            alt="image"
            className="size-40 object-cover rounded-xl"
            width={200}
            height={200}
            loading="eager"
          />
        ))}
      </div>
    </>
  );
};

export default ImageDropzone;
