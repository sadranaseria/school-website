'use server';

import { pinata } from "@/utils/config";

export async function deleteImage(imageCid : string){
    try {
        await pinata.files.public.delete([imageCid]);
    } catch (error) {
        console.log(error);
    }
}