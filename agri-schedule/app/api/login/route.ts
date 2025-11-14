// app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "@/lib/cognito";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    );
  }

  const command = new InitiateAuthCommand({
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  });

  try {
    const resp = await cognitoClient.send(command);

    const auth = resp.AuthenticationResult;
    if (!auth?.IdToken) {
      throw new Error("No IdToken returned from Cognito");
    }

    const [, payloadBase64] = auth.IdToken.split(".");
    const payloadJson = Buffer.from(payloadBase64, "base64").toString("utf8");
    const payload = JSON.parse(payloadJson) as { sub: string; email?: string };

    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found in local DB." },
        { status: 404 }
      );
    }

    const res = NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role, // 👈 THIS is what we’ll use on the frontend
      },
    });

    // set cookie so other APIs can use getCurrentUser
    res.cookies.set("idToken", auth.IdToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: auth.ExpiresIn ?? 3600,
    });

    return res;
  } catch (error: any) {
    console.error("LOGIN ERROR:", error);

    if (error.__type === "NotAuthorizedException") {
      return NextResponse.json(
        { error: "Incorrect email or password." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: error.message ?? "Login failed" },
      { status: 401 }
    );
  }
}
