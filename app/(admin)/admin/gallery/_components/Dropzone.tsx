"use client";

import useImage from "@/app/(admin)/store";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { pinata } from "@/utils/config";
import axios from "axios";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import DeleteButton from "./DeleteButton";
import useDrop from "../_hooks/useDrop";

const Dropzone = () => {
  const { isDragActive, getRootProps, getInputProps } = useDrop();
  const images = useImage((state) => state.images);

  return (
    <>
      <div
        className={cn(
          "border-2 border-dashed cursor-pointer rounded-md p-16 w-full transition-colors hover:border-primary",
          isDragActive
            ? "bg-blue-superlight border-solid border-secondary"
            : "",
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-center">در حال کشیدن</p>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p>برای آپلود عکس، عکسی را بکشید یا دکمه را انتخاب کنید</p>
            <Button>آپلود عکس</Button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map(({ image, isUploading, id }) => (
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

            {!isUploading && <DeleteButton id={id!} imageName={image.name} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropzone;
