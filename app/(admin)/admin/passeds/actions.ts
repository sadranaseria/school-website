'use server';

import { prisma } from "@/prisma/client";
import { PassedSchema , creactPassedSchema, updatePassedSchema } from "../../validation";
import { refresh } from "next/cache";

export async function creaetPassed(data: PassedSchema) {
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

export async function updatePassed(passedId: number, data: PassedSchema) {
  const passed = await prisma.passed.findUnique({
    where : { id : passedId }
  })

  if (!passed) throw new Error('This passed does not exist');

  const validation = updatePassedSchema.safeParse(data);

  if (!validation.success) throw new Error('Invalid data');

  const { name, univercity, images } = validation.data;

  await prisma.passed.update({
    where: { id: passedId },
    data: {
      name,
      univercity,
      images: {
        deleteMany: {},
        create : images?.map(({ url , key }) => ({ url , key })),
      }
    }
  })

  refresh();
}