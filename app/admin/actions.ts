'use server'

import { prisma } from "@/prisma/client";
import { redirect } from "next/navigation";
import { CreateFormData, createMajorSchema } from "../validation";

export async function createMajor(data : CreateFormData){
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