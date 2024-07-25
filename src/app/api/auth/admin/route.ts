import { account, databases, dbId, ID } from "@appwrite/config";
import { Query } from "appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    // const session = account.createSession("2", ID.unique());
    // const list = await databases.listDocuments(dbId, collectionId, [Query.equal("userName", "test")]);
    // const newUser = list.documents[0].fullName;
    // const updatedDB = await databases.updateDocument(dbId, collectionId, "66a0aa95003ab046c867", {
    //   fullName: "Bayram",
    // });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
