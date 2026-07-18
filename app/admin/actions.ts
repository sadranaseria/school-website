'use server'

import { prisma } from "@/prisma/client";
import { redirect } from "next/navigation";
import { MajorSchema, createMajorSchema, updateMajorSchema } from "../validation";

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

export async function updateMajor(majorId : number , updatedData : MajorSchema){
    const validation = updateMajorSchema.safeParse(updatedData);

    if(!validation.success)
        throw new Error(validation.error.message);

    const major = await prisma.major.findUnique({
        where : { id : majorId }
    })

    if(!major)
        throw new Error('Major doesnt exist');

    await prisma.major.update({
        where : { id : majorId },
        data : updatedData
    })
}