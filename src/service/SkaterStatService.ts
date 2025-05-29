import type { SkaterStats } from "../types/api/SkaterStats";
import { CheckSearchParams } from "./helper/CheckSearchParams";

const baseUrl: string = "/api/skater-stats-leaders/";
const error: string = "Failed to fetch skater stats";

interface SkaterStatsProps {
  season: number;
  gameType: 2 | 3;
  categories?: string[];
  limit?: number;
}

export async function FetchSkaterStatLeadersNow({
  categories,
  limit,
}: SkaterStatsProps): Promise<SkaterStats[]> {
  const params = CheckSearchParams(categories, limit);

  const res = await fetch(
    `${baseUrl}` + "current" + "?" + `${params.toString()}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function FetchSkaterStatLeadersBySeasonAndGameType({
  season,
  gameType,
  categories,
  limit,
}: SkaterStatsProps): Promise<SkaterStats[]> {
  const params = CheckSearchParams(categories, limit);

  const res = await fetch(
    `${baseUrl}` +
      `${season}` +
      "/" +
      `${gameType}` +
      "?" +
      `${params.toString()}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}
