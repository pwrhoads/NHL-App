import type { Score } from "../types/api/ScoreApi";

const baseUrl: string = "/api/score/";
const error: string = "Failed to fetch score";

interface ScoreParams {
  date: string;
}

export async function fetchScoreNow(): Promise<Score> {
  const res = await fetch(
    `${baseUrl}` + "now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchScoreByDate({date}:ScoreParams): Promise<Score> {
  const res = await fetch(
    `${baseUrl}` + `${date}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}