import { NextResponse } from "next/server";
import { User } from "../../../../models/user";
import { connectMongo } from "../../../../lib/mongodb";

export async function GET() {
  await connectMongo();
  try {
    const businesses = await User.find({
      role: "user",
    });
    console.log(businesses);
    return NextResponse.json({ businesses, success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: e.message, success: false },
      { status: 500 }
    );
  }
}
