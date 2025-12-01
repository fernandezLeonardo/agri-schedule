// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
// import jwt from "jsonwebtoken"; // built-in in Next.js edge, but we use lightweight decode

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    // Read cookies
    const cookie = req.headers.get("cookie") ?? "";
    const match = cookie.match(/idToken=([^;]+)/);

    if (!match) {
      return NextResponse.json({ user: null });
    }

    const token = decodeURIComponent(match[1]);

    // Decode token (no verify needed for this use-case)
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString("utf8")
    );

    const getRole = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: { role: true }
    });

    if (getRole == null){
      throw new Error("User not found in database");
    }

    return NextResponse.json({
      id: payload.sub,
      email: payload.email,
      role: getRole.role,
    });

  } catch (err) {
    console.log("auth/me error:", err);
    return NextResponse.json({ user: null });
  }
}
