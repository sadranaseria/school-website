import { Prisma } from "@/lib/generated/prisma/client";

const passedwithImages = { include: { images: true } } satisfies Prisma.PassedDefaultArgs;

export type PassedWithImages = Prisma.PassedGetPayload<typeof passedwithImages>;