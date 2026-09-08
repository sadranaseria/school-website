'use server';

import { prisma } from "@/prisma/client";
import { PassedShema , creactPassedSchema } from "../../validation";

export async function creaetPassed(data: PassedShema) {
  const validation = creactPassedSchema.safeParse(data);

  if (!validation.success) throw new Error('Invalid data');

  const { name, univercity, images } = validation.data;

  await prisma.passed.create({
    data: {
      name,
      univercity,
      images: {
        create : images.map(({ url , key }) => ({ url , key }))
      }
    }
  })
}