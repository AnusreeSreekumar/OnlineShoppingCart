import { NextResponse } from "next/server";
import db from "../../config/db.js";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {

    const body = await req.json();
    console.log("Received Data:", body);

    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const hashRounds = 10;
    const hashedPassword = await bcrypt.hash(password, hashRounds);

    const query =
      "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
    const values = [firstname, lastname, email, hashedPassword];

    const [result] = db.query(query, values);

    return Response.json(
      {
        success: true,
        message: "User registered successfully",
        userId: result.insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting user:", error);
    return Response.json(
      {
        success: false,
        message: "An error occurred while adding the user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
