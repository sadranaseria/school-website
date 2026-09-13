import { Prisma } from "@/lib/generated/prisma/client";

const majorsWithImages = { include: { images: true } } satisfies Prisma.MajorDefaultArgs;

export type MajorsWithImages = Prisma.MajorGetPayload<typeof majorsWithImages>;