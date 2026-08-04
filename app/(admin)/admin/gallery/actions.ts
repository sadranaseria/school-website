'use server';

import { pinata } from "@/utils/config";

export async function deleteImage(imageId : string){
    try {
        await pinata.files.public.delete([imageId]);
    } catch (error) {
        console.log(error);
    }
}