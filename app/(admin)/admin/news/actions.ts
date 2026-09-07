"use server";

import { prisma } from "@/prisma/client";
import { refresh } from "next/cache";
import { createNewsShema, NewsShema, updateNewsShema } from "../../validation";

export async function createNews(data: NewsShema) {
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

export async function updateNews(id : number , data : NewsShema) {
  const news = await prisma.news.findUnique({
    where : { id }
  })

  if (!news) throw new Error('This news does not exist');

  const validation = updateNewsShema.safeParse(data);

  if (!validation.success) throw new Error('Invalid data');

  const { title , description , images } = validation.data;
  
  await prisma.news.update({
    where: { id },
    data: {
      title,
      description,
      images: {
        deleteMany: {},
        create : images?.map(img => ({ url : img.url , key : img.key }))
      }
    }
  })
}