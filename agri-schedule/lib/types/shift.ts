// lib/types/shift.ts
export interface Volunteer {
  id: string;
  name: string;
  email: string;
}

export interface Shift {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  location: string;
  createdAt: Date;
}

export interface ShiftAssignment {
  id: string;
  shiftId: string;
  volunteerId: string;
  checkInTime?: Date;
  checkOutTime?: Date;
  actualHours?: number;
}