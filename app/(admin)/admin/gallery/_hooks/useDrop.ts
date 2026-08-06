"use client";

import useImage from "@/app/(admin)/admin/gallery/store";
import { prisma } from "@/prisma/client";
import { pinata } from "@/utils/config";
import axios from "axios";
import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { postImagesToDb } from "../actions";

const useDrop = () => {
  const uploadImages = useImage((state) => state.uploadImages);
  const setUploading = useImage((state) => state.setUploading);

  const uploadFile = async (image: File) => {
    try {
      setUploading(image, true);

      const urlRrequest = await axios.get("/api/url");
      const upload = await pinata.upload.public
        .file(image)
        .url(urlRrequest.data.url);
      postImagesToDb(upload);
      toast.success(`عکس ${image.name} با موفقیت آپلود شد`);
      console.log(upload.cid)
      setUploading(image, false, upload.cid);
    } catch (error) {
      console.log(error);
      toast.error("عکس آپلود نشد");
      setUploading(image, false);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRegection: FileRejection[]) => {
      if (fileRegection.length > 0) {
        return;
      }

      uploadImages(acceptedFiles);
      acceptedFiles.forEach(uploadFile);
    },
    [],
  );

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
