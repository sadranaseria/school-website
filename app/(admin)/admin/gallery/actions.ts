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

export async function uploadImages(upload: UploadResponse) {
  console.log(upload);
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) throw new Error("Not authorized");
  try {
    // console.log(urlRrequest.data.url)
    await prisma.image.create({
      data : {
        id : upload.cid,
        name : upload.name,
        type : upload.mime_type
      }
    })
  } catch (error) {
    console.log(error);
  }
}
