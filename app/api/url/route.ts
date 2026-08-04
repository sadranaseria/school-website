import { NextResponse } from "next/server";
import { pinata } from "@/utils/config";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    try {
      const url = await pinata.upload.public.createSignedURL({
        expires: 30, // The only required param
      });
      return NextResponse.json({ url: url }, { status: 200 }); // Returns the signed upload URL
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { text: "Error creating API Key:" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json({ error : 'Not authorize'} , { status : 401 });
  }
}
