import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "@/lib/cognito";
import bcrypt from "bcrypt"; // ⬅️ NEW

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = body.email;
  const password = body.password;

  // use Cognito with plaintext password (it will hash internally)
  const command = new SignUpCommand({
    ClientId: process.env.CLIENT_ID,
    Username: email,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }],
  });

  try {
    const register = await cognitoClient.send(command);

    if (!register.UserSub) {
      throw new Error("No CognitoID returned. Error 500.");
    }

    // 🔐 hash password *before* saving to your DB
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        id: register.UserSub,
        email,
        password: hashedPassword, // ⬅️ store hash, not plain text
      },
    });

    return NextResponse.json({ message: "Registration successful!" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.message ?? "Registration failed" },
      { status: 500 }
    );
  }
}
