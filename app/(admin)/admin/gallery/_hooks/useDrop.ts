"use client";

import useImage from "@/app/(admin)/store";
import { pinata } from "@/utils/config";
import axios from "axios";
import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";

const useDrop = () => {
  const setImages = useImage((state) => state.setImages);
  const setUploading = useImage((state) => state.setUploading);

  const uploadFile = async (image: File) => {
    try {
      setUploading(image, true);
      const urlRrequest = await axios.get("/api/url");
      const upload = await pinata.upload.public
        .file(image)
        .url(urlRrequest.data.url);
      const files = pinata.files;
      console.log(files);

      toast.success(`عکس ${image.name} با موفقیت آپلود شد`);
      setUploading(image, false, upload.id);
    } catch (error) {
      toast.error("عکس آپلود نشد");
      setUploading(image, false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[] , fileRegection : FileRejection[]) => {
    if (fileRegection) {
        return;
    }
    setImages(acceptedFiles);
    acceptedFiles.forEach(uploadFile);
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
    maxSize: 1024 * 1024 * 5, // 5mb,
    accept: {
      "image/*": [],
    },
  });
};

export default useDrop;
