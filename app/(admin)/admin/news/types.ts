import { Prisma } from "@/lib/generated/prisma/client";

const newswithImages = { include: { images: true } } satisfies Prisma.NewsDefaultArgs;

export type NewsWithImages = Prisma.NewsGetPayload<typeof newswithImages>;