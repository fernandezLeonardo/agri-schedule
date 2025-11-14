import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { getCurrentUser } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET() {
  // same as before
  try {
    const events = await prisma.volunteerEvent.findMany({
      include: {
        shifts: { include: { signups: true } },
      },
      orderBy: { startTime: "asc" },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("GET EVENTS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Only admins can create events." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { name, description, location, startTime, endTime, shifts } = body;

    if (!name || !startTime || !Array.isArray(shifts) || shifts.length === 0) {
      return NextResponse.json(
        { error: "Name, startTime, and at least one shift are required." },
        { status: 400 }
      );
    }

    const event = await prisma.volunteerEvent.create({
      data: {
        name,
        description: description || null,
        location: location || null,
        startTime: new Date(startTime),
        endTime: endTime ? new Date(endTime) : null,
        createdById: user.id, // 👈 from Cognito sub / Prisma user
        shifts: {
          create: shifts.map((s: any) => ({
            name: s.name || null,
            startTime: new Date(s.startTime),
            endTime: new Date(s.endTime),
            maxVolunteers: Number(s.maxVolunteers ?? 1),
          })),
        },
      },
      include: {
        shifts: { include: { signups: true } },
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("POST EVENTS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
