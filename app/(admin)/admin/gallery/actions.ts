"use server";

import { prisma } from "@/prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { refresh } from "next/cache";

export async function deleteImage(imageId: number) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) throw new Error("Not authorized");
  await prisma.gallery.delete({
    where: { id: imageId },
  });
  refresh();
}

export async function createImage(url: string, key: string) {
  await prisma.gallery.create({
    data: {
      url,
      key,
    },
  });

  refresh();
}
