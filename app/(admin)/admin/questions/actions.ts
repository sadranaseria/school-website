'use server';

import { prisma } from "@/prisma/client";
import { questionSchema, QuestionSchema } from "./validation";
import { refresh } from "next/cache";

export async function createQuestion(data : QuestionSchema) {
  const validation = questionSchema.safeParse(data);

  if (!validation.success) throw new Error('Invalid data');

  const { title, anwser } = validation.data;

  await prisma.question.create({
    data: {
      title,
      anwser,
    }
  })

  refresh();
}

export async function deleteQuestion(id : number) {
  const question = await prisma.question.findUnique({
    where : { id }
  })

  if (!question) throw new Error('This question does not exist');

  await prisma.question.delete({
    where : { id }
  })

  refresh();
}