'use server';

import { prisma } from "@/prisma/client";
import { cache } from "react";
import { utapi } from "@/server/uploadthing";

export const fetchMajor = cache(async (majorId: number) =>
  prisma.major.findUnique({ where: { id: majorId } }),
);

export async function deleteImage(key: string) {
  try {
    await utapi.deleteFiles([key]);
    return { success : true }
  } catch (error) {
    console.log(error);
    return { success : false , message : 'آپلود انجام نشد' }
  }
  
}