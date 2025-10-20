// lib/utils/shiftValidation.ts
import { Shift } from '@/lib/types/shift';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// basic validation for creating/updating a shift
export function validateShift(shift: Partial<Shift>): ValidationResult {
  const errors: string[] = [];

  if (!shift.title?.trim()) {
    errors.push("Need a title");
  }

  if (!shift.startTime) {
    errors.push("Need start time");
  }

  if (!shift.endTime) {
    errors.push("Need end time");
  }

  if (shift.startTime && shift.endTime && shift.startTime >= shift.endTime) {
    errors.push("End time must be after start time");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

