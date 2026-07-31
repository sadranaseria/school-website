"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";

const GalleryPage = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    if (fileRejections.length > 0) {
      const toomanyFiles = fileRejections.find(
        (fileRgection) => fileRgection.errors[0].code === "too-many-files",
      );
      const fileTooLarge = fileRejections.find(
        (fileRegection) => fileRegection.errors[0].code === "file-too-large",
      );

      if (toomanyFiles) toast.error("شما فقط میتوانید 5 عکس را آپلود کنید");
      if (fileTooLarge) toast.error("حداکثر حجم عکس 5 مگابایت است");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    maxFiles: 5,
    maxSize: 1024 * 1024 * 5, // 5mb
    accept: {
      "image/*": [],
    },
  });

  return (
    <div className="text-center">
      <h2 className="mb-5">عکس های هنرستان</h2>
      <Card
        className={cn(
          "p-20 flex flex-col justify-center items-center transition-colors w-full h-full cursor-pointer",
          isDragActive
            ? "border border-primary bg-blue-superlight"
            : "border border-dashed hover:border-primary",
        )}
        {...getRootProps()}
      >
        <CardContent>
          <input {...getInputProps()} />
          <Button>{isDragActive ? "در حال انتخاب فایل" : "آپلود عکس"}</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GalleryPage;
