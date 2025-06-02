import type { Scoreboard } from "../types/api/ScoreboardApi"; 

const baseUrl: string = "/api/scoreboard/";
const error: string = "Failed to fetch scoreboard";

interface ScoreboardParams {
  teamCode: string;
}

export async function fetchScoreboardNow({teamCode}:ScoreboardParams): Promise<Scoreboard> {
  const res = await fetch(
    `${baseUrl}` + `${teamCode}` + "/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}