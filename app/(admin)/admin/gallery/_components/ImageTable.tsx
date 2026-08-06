"use client";

import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import useImage from "../../../store";
import { getImages } from "../actions";
import DeleteButton from "./DeleteButton";

const ImageTable = () => {
  const images = useImage((state) => state.images);
  const setImages = useImage((state) => state.setImages);
  useEffect(() => {
    let isMounted = true;
    async function fetchImages() {
      const result = await getImages();
      if (isMounted) setImages(result);
    }
    fetchImages();
    return () => {
      isMounted = false;
    };
  }, [setImages]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {images.map(({ image, cid, isUploading, url }) => (
        <div
          key={cid || url || image.name + Date.now()}
          className="relative group cursor-pointer"
        >
          <div className="relative">
            <Image
              src={url ? url : URL.createObjectURL(image)}
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
          {!isUploading && <DeleteButton cid={cid} imageName={image.name} />}
        </div>
      ))}
    </div>
  );
};

export default ImageTable;
