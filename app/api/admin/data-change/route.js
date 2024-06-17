import { NextResponse } from "next/server";
import { User } from "../../../../models/user";
import { connectMongo } from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { firstName, lastName, phoneNumber, userId, oldPassword, newPassword } =
    await req.json();
  try {
    if (!userId) {
      return NextResponse.json(
        { error: "Please provide all required fields", success: false },
        { status: 400 }
      );
    }

    await connectMongo();

    if (!newPassword) {
      const user = await User.findById(userId);
      if (!user) {
        return NextResponse.json(
          { error: "User not found", success: false },
          { status: 404 }
        );
      }

      // update the user data
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { firstName, lastName, phoneNumber },
        { new: true }
      );

      return NextResponse.json(
        { message: "Details updated successfully", success: true },
        { status: 200 }
      );
    } else {
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

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { firstName, lastName, phoneNumber },
        { new: true }
      );

      return NextResponse.json(
        { message: "Details updated successfully", success: true },
        { status: 200 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      { error: e.message, success: false },
      { status: 500 }
    );
  }
}
