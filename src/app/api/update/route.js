import dbConnect from "@/dbConfig/dbConfig";
import Updates from "@/models/updateSchema";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();

    await Updates.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
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

export async function GET(req, res) {
  try {
    await dbConnect();

    const allUpdate = await Updates.find({}); // Fetch all users from the database

    return NextResponse.json(
      {
        updates: allUpdate,
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
