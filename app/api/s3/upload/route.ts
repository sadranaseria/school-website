import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { v4 as uuidv4 } from "uuid";

const uploadFileSchema = z.object({
    fileName : z.string(),
    contentType : z.string(),
    size : z.number()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = uploadFileSchema.safeParse(body);

    if(!validation.success) return NextResponse.json({ error : 'Invalid body request'} , { status : 400 });

    const { fileName , contentType , size } = validation.data;

    const uiqueKey = `${uuidv4()}-${fileName}`;

    
  } catch {
    NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
