'use server'

import { prisma } from "@/prisma/client";
import { redirect } from "next/navigation";
import { CreateFormData, createMajorSchema } from "./validation";

export async function createMajor(data : CreateFormData){
    const validation = createMajorSchema.safeParse(data);

    if(!validation.success)
        throw new Error('...');

    await prisma.major.create({
        data
    })

    redirect('/admin/majors');
}