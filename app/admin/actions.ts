'use server'

import { prisma } from "@/prisma/client";
import { redirect } from "next/navigation";
import { MajorSchema, createMajorSchema } from "../validation";

export async function createMajor(data : MajorSchema){
    const validation = createMajorSchema.safeParse(data);

    if(!validation.success) return

    await prisma.major.create({
        data
    })
}

export async function deleteMajor(majorId : number){
    const major = await prisma.major.findUnique({
        where : { id : majorId }
    });

    if(!major)
        throw new Error('The user doesnt exist');

    await prisma.major.delete({
        where : { id : majorId }
    })
}