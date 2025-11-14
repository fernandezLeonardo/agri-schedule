import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const events = await prisma.volunteerEvent.findMany({
      orderBy: { startTime: "asc" },
      include: {
        shifts: {
          include: {
            signups: true
          }
        }
      }
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("GET VOLUNTEER EVENTS ERROR:", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
