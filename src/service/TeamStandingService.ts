import type { SeasonStanding } from "../types/api/SeasonStandingApi.ts";
import type {TeamStanding} from "../types/api/TeamStandingApi.ts"

const baseUrl: string = "/api/standings";
const error: string = "Failed to fetch team standings";

interface TeamStandingParams {
  date: string;
}

export async function fetchStandingsNow(): Promise<TeamStanding> {
  const res = await fetch(
    `${baseUrl}` + "/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchStandingsByDate({date}:TeamStandingParams):
Promise<TeamStanding> {
  const res = await fetch(`${baseUrl}` + "/" + `${date}`);
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchStandingsForSeasons(): Promise<SeasonStanding> {
  const res = await fetch(`${baseUrl}` + "-season");
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}