"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";

const GalleryPage = () => {
  const [files, setFiles] = useState<
    Array<{
      id: string;
      file: File;
      uploading: boolean;
      progress: number;
      key?: string;
      isDeleting: boolean;
      error: boolean;
      objectUrl?: string;
    }>
  >([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles) {
      setFiles((prevFile) => [
        ...prevFile,
        ...acceptedFiles.map((file) => ({
          id: "sjnda",
          file: file,
          uploading: false,
          progress: 0,
          isDeleting: false,
          error: false,
          objectUrl: URL.createObjectURL(file),
        })),
      ]);
    }
  }, []);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    if (fileRejections) {
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
    <div>
      <h2 className="mb-5">عکس های هنرستان</h2>
      <Card
        className={cn(
          "text-center p-20 flex flex-col justify-center items-center transition-colors w-full h-full cursor-pointer",
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
      <div className="grid grid-col-2 sm:grid-col-3 md:grid-col-4 gap-4">
        {files.map((file) => (
          <div key={file.id}>
            <img src={file.objectUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
