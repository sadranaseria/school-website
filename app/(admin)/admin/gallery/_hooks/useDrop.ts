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

  const rejectedFiles = useCallback((fileRejection: FileRejection[]) => {
    if (fileRejection) {
      const tooManyFiles = fileRejection.find(
        (rejection) => rejection.errors[0].code === "too-many-files",
      );
      const fileSizeTooBig = fileRejection.find(
        (rejection) => rejection.errors[0].code === "file-too-large",
      );
      if (tooManyFiles) toast.error("فقط میتوانید 5 عکس آپلود کنید");
      if (fileSizeTooBig)
        toast.error("حجم عکس آپلود شده بیشتر از 5 مگابایت است");
    }
  }, []);

  return useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles) {
        setImages(acceptedFiles);
        acceptedFiles.forEach(uploadFile);
      }
    },
    onDropRejected : rejectedFiles,
    maxFiles: 5,
    maxSize: 1024 * 1024 * 5, // 5mb,
    accept: {
      "image/*": [],
    },
  });
};

export default useDrop;
