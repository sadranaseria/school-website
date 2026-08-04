"use server";

import { prisma } from "@/prisma/client";
import { pinata } from "@/utils/config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";

export async function deleteImage(imageCid: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    try {
      await pinata.files.public.delete([imageCid]);
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new Error("Not authorized");
  }
}

export async function UploadImages(image: File) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    try {
      if (image) {
        const urlRrequest = await axios.get("/api/url");
        const upload = await pinata.upload.public
          .file(image)
          .url(urlRrequest.data.url);
        await prisma.image.create({
          data: {
            id: upload.cid,
            name: upload.name,
            type: upload.mime_type,
          },
        });

        return {
          upload,
          success: true,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  } else {
    throw new Error("Not authorized");
  }
}
