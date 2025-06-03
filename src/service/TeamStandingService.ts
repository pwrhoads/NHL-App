import type {TeamStanding} from "../types/api/TeamStandingApi.ts"

const baseUrl: string = "/api/standings";
const error: string = "Failed to fetch team standings";

interface TeamStandingParams {
  date: Date;
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

// MAY BE USEFUL in the future. Need a new Type if I implement this
// export async function fetchStandingsForSeasons(): Promise<TeamStandingSeason> {
//   const res = await fetch(`${baseUrl}` + "-season");
//   if (!res.ok) throw new Error(`${error}`);
//   return res.json();
// }