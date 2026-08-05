"use server";

import { prisma } from "@/prisma/client";
import { pinata } from "@/utils/config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios, { AxiosResponse } from "axios";
import { UploadResponse } from "pinata";

export async function deleteImage(imageCid: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) throw new Error("Not authorized");
  try {
    await pinata.files.public.delete([imageCid]);
  } catch (error) {
    console.log(error);
  }
}

export async function uploadImages(image: File) {
  console.log("Somthing");
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) throw new Error("Not authorized");
  try {
    // console.log(urlRrequest.data.url)
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
      cid : upload.cid
    };
  } catch (error) {
    console.log(error);
  }
}
