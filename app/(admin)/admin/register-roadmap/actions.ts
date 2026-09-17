'use server';

import { prisma } from "@/prisma/client";
import { CreateRoadmapStep, createRoadmapStepSchema } from "./validation";
import { refresh } from "next/cache";

export async function createRoadmapStep(data : CreateRoadmapStep) {
  const validation = createRoadmapStepSchema.safeParse(data);

  if (!validation.success) throw new Error('Invalid data');

  const { title, description } = validation.data;

  await prisma.roadmap.create({
    data: {
      title,
      description,
    }
  })

  refresh();
}