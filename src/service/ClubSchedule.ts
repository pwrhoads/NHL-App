import type { ClubSchedule } from "../types/api/ClubScheduleApi";


const baseUrl: string = "/api/club-schedule";
const error: string = "Failed to fetch club schedule";

export interface ClubScheduleProps {
  teamCode: string;
  season: string;
  month: string;
  date: string;
}

export async function fetchClubScheduleSeasonNow({teamCode}:ClubScheduleProps): Promise<ClubSchedule> {
  const res = await fetch(
    `${baseUrl}` + "-season/" + `${teamCode}` + "/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchClubScheduleBySeason({teamCode, season}:ClubScheduleProps): Promise<ClubSchedule> {
  const res = await fetch(
    `${baseUrl}` + `${teamCode}` + "/" + `${season}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchClubScheduleMonthNow({teamCode}:ClubScheduleProps): Promise<ClubSchedule> {
  const res = await fetch(
    `${baseUrl}` + "/" + `${teamCode}` + "/month/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchClubScheduleByMonth({teamCode, month}:ClubScheduleProps): Promise<ClubSchedule> {
  const res = await fetch(
    `${baseUrl}` + "/" + `${teamCode}` + "/month/" + `${month}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchClubScheduleWeekNow({teamCode}:ClubScheduleProps): Promise<ClubSchedule> {
  const res = await fetch(
    `${baseUrl}` + "/" + `${teamCode}` + "/week/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchClubScheduleByWeek({teamCode, date}:ClubScheduleProps): Promise<ClubSchedule> {
  const res = await fetch(
    `${baseUrl}` + "/" + `${teamCode}` + "/week/" + `${date}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}