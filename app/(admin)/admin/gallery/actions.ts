"use server";

import { prisma } from "@/prisma/client";
import { pinata } from "@/utils/config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UploadResponse } from "pinata";

export async function deleteImage(imageCid: string) {
  console.log(imageCid)
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) throw new Error("Not authorized");
  try {
    const image = await prisma.image.findUnique({
      where : { cid : imageCid }
    })
    console.log(image?.cid)
    if(!image) throw new Error('This image doesnt exist');
    const response = await pinata.files.public.delete([image.pinataId]);
    console.log(response)
    await prisma.image.delete({
      where : {
        cid : imageCid,
      }
    })
    return { success : true }
  } catch (error) {
    console.log(error);
    return { success : false }
  }
}

export async function postImagesToDb(upload: UploadResponse) {
  console.log(upload);
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) throw new Error("Not authorized");
  try {
    await prisma.image.create({
      data: {
        cid: upload.cid,
        pinataId : upload.id
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getImages() {
  const images = await prisma.image.findMany();
  const result = await Promise.all(
    images.map(async (image) => ({
      cid : image.cid,
      url : await pinata.gateways.private.createAccessLink({
        cid : image.cid,
        expires : 30
      })
    })),
  );
  return result
}
