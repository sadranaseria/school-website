"use client";

import useFile from "@/app/(admin)/store";
import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";

const useDrop = () => {
  const setFiles = useFile((state) => state.setFiles);
  const uploadFile = (file: File[]) => {
    // setFiles((file) =>
    //   prevfile.map((f) => (f.file === file ? { ...f, uploading: true } : f)),
    // );
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles) {
      setFiles(acceptedFiles);
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

  return useDropzone({
    onDrop,
    onDropRejected,
    maxFiles: 5,
    maxSize: 1024 * 1024 * 5, // 5mb
    accept: {
      "image/*": [],
    },
  });
};

export default useDrop;
