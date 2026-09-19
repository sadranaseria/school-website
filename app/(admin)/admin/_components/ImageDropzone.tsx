"use client";

import { Button } from "@/components/ui/button";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { deleteImage } from "../action";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { createImage } from "../gallery/actions";
import { actionAsyncStorage } from "next/dist/server/app-render/action-async-storage.external";

type ImageType = Array<{ url: string; key: string; deletting?: boolean }>;

interface Props {
  value?: ImageType;
  onChange?: (images: ImageType) => void;
  action?: boolean;
}

const ImageDropzone = ({ onChange, value , action }: Props) => {
  const [images, setImages] = useState<ImageType>(value ?? []);

  console.log(value);

  const handleDelete = async (key: string) => {
    setImages((prev) =>
      prev.map((img) => (img.key === key ? { ...img, deletting: true } : img)),
    );
    const { success, message } = await deleteImage(key);
    const deletedImage = images.filter(img => img.key !== key);
    if (success !== undefined) {
      setImages(deletedImage);
      onChange?.(deletedImage);
      console.log(images.filter((img) => img.key !== key));
      toast.success("عکس با موفقیت پاک شد");
      console.log(value);
    } else {
      toast.error(message);
      setImages((prev) =>
        prev.map((img) =>
          img.key === key ? { ...img, deletting: false } : img,
        ),
      );
    }
  };

  return (
    <>
      <UploadDropzone
        className="hover:border-blue-500 cursor-pointer"
        endpoint="imageUploader"
        onClientUploadComplete={async (res) => {
          const newImages = res.map((r) => ({ url: r.ufsUrl, key: r.key }));

          setImages((prev) => [...prev, ...newImages]);

          onChange?.([
            ...images.map(({ url, key }) => ({ url, key })),
            ...newImages,
          ]);

          if (action) {
            await Promise.all(
              newImages.map(img => createImage(img.url, img.key))
            )
          }

          toast.success('عکس با موفقیت آپلود شد')
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          toast.error('عکس با آپلود نشد');
        }}
        content={{
          label: "عکسی را بکشید یا آپلود کنید",
        }}
      />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!action && images.map((image) => (
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
              {image.deletting ? <Spinner /> : <HiX />}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageDropzone;
