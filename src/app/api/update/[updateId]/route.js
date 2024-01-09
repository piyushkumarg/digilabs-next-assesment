import dbConnect from "@/dbConfig/dbConfig";
import Updates from "@/models/updateSchema";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
  const {updateId} = params

  const {logo, buttonText} = await req.json();

  try {
    const updates = await Updates.findById(updateId);

    updates.logo = logo;
    updates.buttonText = buttonText;

    const updatedUser = await updates.save();

    return NextResponse.json(
      {
        message: "Updated successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
