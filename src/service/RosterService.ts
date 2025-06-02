import type { Roster } from "../types/api/RosterApi"; 

const baseUrl: string = "/api/roster/";
const error: string = "Failed to fetch roster";

interface RosterParams {
  teamCode: string;
  season: string;
}

export async function FetchRosterNow({teamCode}:RosterParams): Promise<Roster> {
  const res = await fetch(
    `${baseUrl}` + `${teamCode}` + "/current"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function FetchRosterBySeason({teamCode, season}:RosterParams): Promise<Roster> {
  const res = await fetch(
    `${baseUrl}` + `${teamCode}` + "/" + `${season}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}