// import { avatarId, storage, ID } from "@libs/appwrite/config";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const product = await req.json();
//   const file = product?.file;

// console.log(product);

//   try {
//    const response = await storage.createFile(avatarId, ID.unique(), file);
//     return NextResponse.json({ response }, { status: 200 });

//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }






import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}



