// app/api/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "@/lib/cognito";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email: string = body.email;
  const password: string = body.password;

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

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

    const hashedPassword = await bcrypt.hash(password, 10);

    // --- ROLE LOGIC USING ADMIN_EMAILS ---
    // ADMIN_EMAILS in .env, e.g.
    // ADMIN_EMAILS=lili@gmail.com,chris@gmail.com,leo@gmail.com
    const adminEmailsEnv = process.env.ADMIN_EMAILS ?? "";
    const adminEmails = adminEmailsEnv
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    const isAdmin = adminEmails.includes(email.toLowerCase());

    await prisma.user.create({
      data: {
        id: register.UserSub,   // Cognito sub
        email,
        password: hashedPassword,
        role: isAdmin ? "ADMIN" : "VOLUNTEER",
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
