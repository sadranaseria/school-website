'use server';

import { prisma } from "@/prisma/client";
import { createNewsShema, CreateNewsShema } from "../../validation";
import { refresh } from "next/cache";
import { redirect } from "next/navigation";

export async function createNews(data :CreateNewsShema) {
  const validation = createNewsShema.safeParse(data);

  if (!validation.success) throw new Error('Invalid data');

  const { title , description , images } = validation.data;

  await prisma.news.create({
    data: {
      title,
      description,
      images: {
        create : images.map(img => ({ url : img.url , key : img.key }))
      }
    }
  })

  refresh();
  redirect('/admin/news');
}