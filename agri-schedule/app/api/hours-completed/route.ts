// app/api/hours-completed/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

// GET hoursCompleted for a specific user
//    /api/hours-completed?user=USER_ID
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user");

    if (!userId)
      return NextResponse.json(
        { error: "Missing user ID" },
        { status: 400 }
      );

    const hoursCompleted = await prisma.user.findUnique({
      where: { id: userId },
      select: { hoursCompleted: true }
    });

    return NextResponse.json(hoursCompleted);
  } catch (err) {
    console.error("GET HOURSCOMPLETED ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch hoursCompleted" },
      { status: 500 }
    );
  }
}
