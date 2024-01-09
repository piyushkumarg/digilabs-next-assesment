
import  dbConnect from "@/dbConfig/dbConfig";
import Users from "@/models/userSchema";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();

        await Users.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}


export async function GET(req, res) {
  try {
    await dbConnect();

    const allUsers = await Users.find({}); // Fetch all users from the database

    return NextResponse.json(
      {
        users: allUsers,
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