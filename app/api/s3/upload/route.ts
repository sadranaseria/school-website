import { S3 } from "@/lib/s3Client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const uploadFileSchema = z.object({
  fileName: z.string(),
  contentType: z.string(),
  size: z.number(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = uploadFileSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(
        { error: "Invalid body request" },
        { status: 400 },
      );

    const { fileName, contentType, size } = validation.data;

    const uniqueKey = `${uuidv4()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: uniqueKey,
      ContentType: contentType,
      ContentLength: size,
    });

    const presignedUrl = await getSignedUrl(S3, command, {
      expiresIn: 360, // 6 min
    });

    const response = { presignedUrl , key : uniqueKey };

    return NextResponse.json(response , { status : 200 });
  } catch {
    NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
