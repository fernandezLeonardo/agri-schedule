// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; // built-in in Next.js edge, but we use lightweight decode

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

    return NextResponse.json({
      id: payload.sub,
      email: payload.email,
      role: payload["cognito:groups"]?.[0] ?? "VOLUNTEER",
    });
  } catch (err) {
    console.log("auth/me error:", err);
    return NextResponse.json({ user: null });
  }
}
