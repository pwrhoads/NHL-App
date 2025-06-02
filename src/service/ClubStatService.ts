import type { ClubStats } from "../types/api/ClubStatsApi";


const baseUrl: string = "/api/club-stats/";
const error: string = "Failed to fetch club stats";

export interface ClubStatsProps {
  teamCode: string;
  season: string;
  gameType: 2|3;
}

export async function fetchClubStatsNow({teamCode}:ClubStatsProps): Promise<ClubStats> {
  const res = await fetch(
    `${baseUrl}` + `${teamCode}` + "/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchClubStatsBySeasonAndGameType({teamCode, season, gameType}: ClubStatsProps): Promise<ClubStats> {
  const res = await fetch(
    `${baseUrl}` + `${teamCode}` + "/" +`${season}` + "/" + `${gameType}` + "/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}