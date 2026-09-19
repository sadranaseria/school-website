"use server";

import { prisma } from "@/prisma/client";
import {
  MajorSchema,
  createMajorSchema,
  updateMajorSchema,
} from "@/app/(admin)/validation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { refresh } from "next/cache";

export async function createMajor(data: MajorSchema) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const validation = createMajorSchema.safeParse(data);

  if (!validation.success) return;

  const { title, description, images , students } = validation.data;

  await prisma.major.create({
    data: {
      title,
      description,
      images: {
        create: images.map(({ url, key }) => ({ url, key })),
      },
      students
    },
  });

  refresh();
}

export async function deleteMajor(majorId: number) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const major = await prisma.major.findUnique({
    where: { id: majorId },
  });

  if (!major) throw new Error("The user doesnt exist");

  await prisma.major.delete({
    where: { id: majorId },
  });
}

export async function updateMajor(majorId: number, updatedData: MajorSchema) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const major = await prisma.major.findUnique({
    where: { id: majorId },
  });

  if (!major) throw new Error("Major doesnt exist");

  const validation = updateMajorSchema.safeParse(updatedData);

  if (!validation.success) throw new Error(validation.error.message);

  const { title , description , images } = validation.data;

  await prisma.major.update({
    where: { id: majorId },
    data: {
      title,
      description,
      images: {
        deleteMany: {},
        create : images?.map(({ url , key }) => ({ url , key }))
      }
    },
  });

  refresh();
}
