// app/api/shifts/assignments/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ShiftAssignment } from '@/lib/types/shift';
import { calculateActualHours } from '@/lib/utils/timeCalculations';

// Simple in-memory storage
let assignments: ShiftAssignment[] = [];

export async function GET() {
  return NextResponse.json(assignments);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.shiftId || !body.volunteerId) {
      return NextResponse.json(
        { error: 'Need shiftId and volunteerId' },
        { status: 400 }
      );
    }

    const newAssignment: ShiftAssignment = {
      id: Date.now().toString(),
      shiftId: body.shiftId,
      volunteerId: body.volunteerId,
      checkInTime: body.checkInTime ? new Date(body.checkInTime) : undefined,
      checkOutTime: body.checkOutTime ? new Date(body.checkOutTime) : undefined,
      actualHours: 0
    };

    // Calculate hours if both times are provided
    if (newAssignment.checkInTime && newAssignment.checkOutTime) {
      newAssignment.actualHours = calculateActualHours(newAssignment);
    }

    assignments.push(newAssignment);
    return NextResponse.json(newAssignment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create assignment' }, { status: 500 });
  }
}