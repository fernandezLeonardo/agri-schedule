import { NextRequest } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

type IdTokenPayload = {
  sub: string;
  email?: string;
  [key: string]: any;
};

export async function getCurrentUser(req: NextRequest) {
  const token = req.cookies.get("idToken")?.value;
  if (!token) return null;

  try {
    const [, payloadBase64] = token.split(".");
    const payloadJson = Buffer.from(payloadBase64, "base64").toString("utf8");
    const payload = JSON.parse(payloadJson) as IdTokenPayload;

    if (!payload.sub) return null;

    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
    });

    return user; // { id, email, role, ... } or null
  } catch (err) {
    console.error("getCurrentUser decode error:", err);
    return null;
  }
}
