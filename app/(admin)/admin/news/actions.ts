"use server";

import { prisma } from "@/prisma/client";
import { refresh } from "next/cache";
import { createNewsShema, CreateNewsShema } from "../../validation";

export async function createNews(data: CreateNewsShema) {
  const validation = createNewsShema.safeParse(data);

  if (!validation.success) throw new Error("Invalid data");

  const { title, description, images } = validation.data;

  await prisma.news.create({
    data: {
      title,
      description,
      images: {
        create: images.map((img) => ({ url: img.url, key: img.key })),
      },
    },
  });

  refresh();
}

export async function deleteNews(id: number) {
  const news = await prisma.news.findUnique({
    where: { id },
  });

  if (!news) throw new Error("This news does not exist");

  await prisma.news.delete({
    where: { id },
  });

  refresh();
}
