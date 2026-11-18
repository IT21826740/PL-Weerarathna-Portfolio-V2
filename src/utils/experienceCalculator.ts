import { CareerMilestone } from '../types/portfolio';

// Default career start date for PL Weerarathna (UP Printers / print career kickoff: Jan 15, 2019)
export const DEFAULT_CAREER_START_DATE = '2019-01-15';
const STORAGE_KEY = 'pl_career_start_date';

export function getStoredCareerStartDate(): string {
  if (typeof window === 'undefined') return DEFAULT_CAREER_START_DATE;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && !isNaN(Date.parse(stored))) {
    return stored;
  }
  return DEFAULT_CAREER_START_DATE;
}

export function saveStoredCareerStartDate(dateString: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, dateString);
}

/**
 * Calculates current completed years, months, and countdown to upcoming career anniversary.
 */
export function calculateCareerMilestone(startDateStr: string = getStoredCareerStartDate(), now: Date = new Date()): CareerMilestone {
  const start = new Date(startDateStr);
  
  if (isNaN(start.getTime())) {
    const fallbackStart = new Date(DEFAULT_CAREER_START_DATE);
    return calculateCareerMilestone(fallbackStart.toISOString().split('T')[0], now);
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    // Days in previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Next upcoming anniversary date
  const currentYearAnniversary = new Date(now.getFullYear(), start.getMonth(), start.getDate());
  let nextAnniversary = new Date(currentYearAnniversary);

  if (now.getTime() >= currentYearAnniversary.getTime()) {
    // Already passed this year's anniversary, next one is next calendar year
    nextAnniversary = new Date(now.getFullYear() + 1, start.getMonth(), start.getDate());
  }

  // Previous anniversary for percentage progress
  const prevAnniversary = new Date(nextAnniversary.getFullYear() - 1, start.getMonth(), start.getDate());
  const totalCycleMs = nextAnniversary.getTime() - prevAnniversary.getTime();
  const elapsedCycleMs = Math.max(0, now.getTime() - prevAnniversary.getTime());
  const progressPercentage = Math.min(100, Math.max(0, Math.round((elapsedCycleMs / totalCycleMs) * 100)));

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysUntilNextAnniversary = Math.max(0, Math.ceil((nextAnniversary.getTime() - now.getTime()) / msPerDay));
  const totalDays = Math.max(0, Math.floor((now.getTime() - start.getTime()) / msPerDay));

  const formattedYearsString = months === 0 ? `${years} Years` : `${years} Years, ${months} Mo`;

  const nextAnnivIso = nextAnniversary.toISOString().split('T')[0];

  return {
    years,
    months,
    days,
    totalDays,
    startDate: startDateStr,
    nextAnniversaryDate: nextAnnivIso,
    daysUntilNextAnniversary,
    formattedYearsString,
    progressPercentage,
  };
}

export function formatAnniversaryDate(isoDateStr: string): string {
  try {
    const d = new Date(isoDateStr);
    return d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return isoDateStr;
  }
}
