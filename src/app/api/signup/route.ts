import { account, collection, databases, db } from "@appwrite/config";
import { ID } from "appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullName, userName, email, password } = await req.json();

  try {
    const user = await account.create("unique()", email, password, userName);
    const document = await databases.createDocument(db, collection, ID.unique(), {
      fullName,
      userName,
      email,
      password,
      userId: user.$id,
    });

    return NextResponse.json({ user, document }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
