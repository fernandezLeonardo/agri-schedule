// app/api/shifts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Shift } from '@/lib/types/shift';

// Simple in-memory storage for now
let shifts: Shift[] = [];

export async function GET() {
  return NextResponse.json(shifts);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.title || !body.startTime || !body.endTime) {
      return NextResponse.json(
        { error: 'Need title, start time, and end time' },
        { status: 400 }
      );
    }

    const newShift: Shift = {
      id: Date.now().toString(),
      title: body.title,
      startTime: new Date(body.startTime),
      endTime: new Date(body.endTime),
      location: body.location || 'Main Farm',
      createdAt: new Date()
    };

    shifts.push(newShift);
    return NextResponse.json(newShift, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create shift' }, { status: 500 });
  }
}