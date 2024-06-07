import { NextResponse } from "next/server";
import { connectMongo } from "../../../../../lib/mongodb";
import { User } from "../../../../../models/user";
export async function POST(req) {
  const { userId, oldPassword, newPassword } = await req.json();

  try {
    if (!userId || !oldPassword || !newPassword) {
      return NextResponse.json(
        { error: "Please provide all required fields", success: false },
        { status: 400 }
      );
    }

    await connectMongo();

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return NextResponse.json(
        { error: "User not found", success: false },
        { status: 404 }
      );
    }

    const isValid = await bcrypt.compare(oldPassword, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid password", success: false },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();

    return NextResponse.json(
      { message: "Password changed successfully", success: true },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: e.message, success: false },
      { status: 500 }
    );
  }
}
