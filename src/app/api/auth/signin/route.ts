import { account } from "@appwrite/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const session = await account.createEmailPasswordSession(email, password);

    return NextResponse.json({ session }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
