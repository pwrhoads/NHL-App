import type { ScheduleCalendar } from "../types/api/ScheduleCalendar";

const baseUrl: string = "/api/schedule-calendar/";
const error: string = "Failed to fetch league schedule";

interface ScheduleParams {
  date: string;
}

export async function fetchScheduleCalendarNow(): Promise<ScheduleCalendar> {
  const res = await fetch(
    `${baseUrl}` + "now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchScheduleCalendarByDate({date}:ScheduleParams): Promise<ScheduleCalendar> {
  const res = await fetch(
    `${baseUrl}` + `${date}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}