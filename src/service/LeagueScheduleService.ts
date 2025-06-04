import type { LeagueSchedule } from "../types/api/LeagueScheduleApi";


const baseUrl: string = "/api/schedule";
const error: string = "Failed to fetch league schedule";

interface ScheduleParams {
  date: string;
}

export async function fetchLeagueScheduledNow(): Promise<LeagueSchedule> {
  const res = await fetch(
    `${baseUrl}` + "/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchLeagueScheduledByDate({date}:ScheduleParams): Promise<LeagueSchedule> {
  const res = await fetch(
    `${baseUrl}` + "/" + `${date}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}