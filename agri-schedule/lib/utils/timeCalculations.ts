// lib/utils/timeCalculations.ts
import { ShiftAssignment } from '@/lib/types/shift';

// Simple function to calculate hours between two times
export function calculateHours(startTime: Date, endTime: Date): number {
  const totalMilliseconds = endTime.getTime() - startTime.getTime();
  const totalHours = totalMilliseconds / (1000 * 60 * 60);
  return Math.round(totalHours * 100) / 100; // Round to 2 decimal places
}

// Calculate how long someone worked from check in/out times
export function calculateActualHours(assignment: ShiftAssignment): number {
  if (!assignment.checkInTime || !assignment.checkOutTime) {
    return 0;
  }
  return calculateHours(assignment.checkInTime, assignment.checkOutTime);
}