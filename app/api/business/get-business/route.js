import { NextResponse } from "next/server";
import { User } from "../../../../models/user";
import { connectMongo } from "../../../../lib/mongodb";

export async function POST(req) {
  await connectMongo();
  try {
    const { _id } = await req.json();

    const business = await User.findOne({
      _id,
    });
    console.log(business)
    return NextResponse.json({ business, success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: e.message, success: false },
      { status: 500 }
    );
  }
}
