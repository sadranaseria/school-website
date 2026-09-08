'use server';

import { prisma } from "@/prisma/client";
import { PassedShema , creactPassedSchema } from "../../validation";
import { refresh } from "next/cache";

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

  refresh();
}

export async function deletePassed(passedId: number) {
  const passed = await prisma.passed.findUnique({
    where : { id : passedId }
  })

  if (!passed) throw new Error('This passed does not exist');

  await prisma.passed.delete({
    where : { id : passedId }
  })

  refresh();
}