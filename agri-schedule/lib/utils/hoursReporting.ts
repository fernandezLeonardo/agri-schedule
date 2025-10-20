// lib/utils/hoursReporting.ts
import { Volunteer, ShiftAssignment } from '@/lib/types/shift';
import { calculateActualHours } from './timeCalculations';

// Simple summary of someones hours
export interface VolunteerHoursSummary {
  volunteer: Volunteer;
  totalHours: number;
  totalShifts: number;
}

// Get total hours for one volunteer
export function getVolunteerHours(volunteer: Volunteer, assignments: ShiftAssignment[]): VolunteerHoursSummary {
  const volunteerAssignments = assignments.filter(a => a.volunteerId === volunteer.id);
  
  const totalHours = volunteerAssignments.reduce((sum, assignment) => {
    return sum + calculateActualHours(assignment);
  }, 0);

  return {
    volunteer,
    totalHours: Math.round(totalHours * 100) / 100,
    totalShifts: volunteerAssignments.length
  };
}