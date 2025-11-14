import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: any) {
  try {
    const eventId = params.id;

    const shift = await prisma.shift.findFirst({
      where: { eventId },
      select: { id: true },
    });

    if (!shift)
      return NextResponse.json(
        { error: "No shifts for this event" },
        { status: 404 }
      );

    return NextResponse.json({ shiftId: shift.id });
  } catch (err) {
    console.error("EVENT SHIFT ERROR:", err);
    return NextResponse.json(
      { error: "Failed to load shift" },
      { status: 500 }
    );
  }
}
