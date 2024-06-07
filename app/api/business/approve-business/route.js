import { NextResponse } from "next/server";
import { User } from "../../../../models/user";

export async function POST(req) {
  const { userId, businessUserId, approve } = await req.json();
  console.log(userId,businessUserId,approve,"Backend request ");
  try {
    const admin = await User.findById(userId);
    if (!admin) {
      return NextResponse.json(
        { error: "User not found", success: false },
        { status: 404 }
      );
    }

    if (admin.role !== "admin") {
      return NextResponse.json(
        { error: "User is not an admin", success: false },
        { status: 403 }
      );
    }

    const business = await User.findById(businessUserId);

    if (!business) {
      return NextResponse.json(
        { error: "Business not found", success: false },
        { status: 404 }
      );
    }

    business.isProfileApproved = approve;

    await business.save();

    return NextResponse.json(
      {
        success: true,
        message: `Business ${business.businessName} has been ${approve ? "approved" : "unapproved"} successfully.`,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: e.message, success: false },
      { status: 500 }
    );
  }
}
