'use server';

import { prisma } from "@/prisma/client";
import { cache } from "react";
import { utapi } from "@/server/uploadthing";

export const fetchMajor = cache(async (majorId: number) =>
  prisma.major.findUnique({ where: { id: majorId } , include : { images : true } }),
);

export async function deleteImage(key: string , fromDB : boolean = false) {
  try {
    await utapi.deleteFiles([key]);
    if(fromDB) {
      await prisma.gallery.delete({
        where : { key }
      })
    }
    return { success : true }
  } catch (error) {
    console.log(error);
    return { success : false , message : 'عکس پاک نشد' }
  }
  
}