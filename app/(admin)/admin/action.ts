'use server';

import { prisma } from "@/prisma/client";
import { cache } from "react";

export const fetchMajor = cache((majorId: number) =>
  prisma.major.findUnique({ where: { id: majorId } }),
);