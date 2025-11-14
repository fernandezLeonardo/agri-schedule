// app/api/signups/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

// ➤ GET all signups for a specific user
//    /api/signups?user=USER_ID
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user");

    if (!userId)
      return NextResponse.json(
        { error: "Missing user ID" },
        { status: 400 }
      );

    const signups = await prisma.shiftSignup.findMany({
      where: { userId },
      include: {
        shift: {
          include: {
            event: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(signups);
  } catch (err) {
    console.error("GET SIGNUPS ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch signups" },
      { status: 500 }
    );
  }
}

// ➤ POST signup for event
//    Body: { userId, shiftId }
export async function POST(req: Request) {
  try {
    const { userId, shiftId } = await req.json();

    if (!userId || !shiftId)
      return NextResponse.json(
        { error: "Missing userId or shiftId" },
        { status: 400 }
      );

    // Create signup
    const signup = await prisma.shiftSignup.create({
      data: {
        userId,
        shiftId,
      },
      include: {
        shift: {
          include: {
            event: true,
          },
        },
      },
    });

    return NextResponse.json(signup);
  } catch (err: any) {
    console.error("POST SIGNUP ERROR:", err);

    // Duplicate signup (unique constraint)
    if (err.code === "P2002") {
      return NextResponse.json(
        { error: "Already signed up for this event" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to sign up" },
      { status: 500 }
    );
  }
}
