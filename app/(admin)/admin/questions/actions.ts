'use server';

import { prisma } from "@/prisma/client";
import { questionSchema, QuestionSchema } from "./validation";

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
}