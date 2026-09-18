"use server";

import { prisma } from "@/prisma/client";
import {
  CreateRoadmapStep,
  createRoadmapStepSchema,
  UpadateRoadmapStep,
  updateRoadmapStepSchema,
} from "./validation";
import { refresh } from "next/cache";

export async function createRoadmapStep(data: CreateRoadmapStep) {
  const validation = createRoadmapStepSchema.safeParse(data);

  if (!validation.success) throw new Error("Invalid data");

  const { title, description } = validation.data;

  await prisma.roadmap.create({
    data: {
      title,
      description,
    },
  });

  refresh();
}

export async function deleteRoadmapStep(id: number) {
  const step = prisma.roadmap.findUnique({
    where: { id },
  });

  if (!step) throw new Error("This step doesn not exist");

  await prisma.roadmap.delete({
    where: { id },
  });

  refresh();
}

export async function updateRoadmapStep(id: number, data: UpadateRoadmapStep) {
  const step = await prisma.roadmap.findUnique({
    where: { id },
  });

  if (!step) throw new Error("This step does not exist");

  const validation = updateRoadmapStepSchema.safeParse(data);

  if (!validation.success) throw new Error("Invalid data");

  const { title, description } = validation.data;

  await prisma.roadmap.update({
    where: { id },
    data: { title, description },
  });

  refresh();
}
