import type { GoalieStats } from "../types/api/GoalieStats";

const baseUrl: string = "/api/goalie-stats-leaders/";
const error: string = "Failed to fetch goalie stats";

interface GoalieStatsProps {
  season: number;
  gameType: 2 | 3;
  categories?: string[];
  limit?: number;
}

export async function FetchGoalieStatLeadersNow({
  categories,
  limit,
}: GoalieStatsProps): Promise<GoalieStats[]> {
  const params = CheckSearchParams(categories, limit);

  const res = await fetch(
    `${baseUrl}` + "current" + "?" + `${params.toString()}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function FetchGoalieStatLeadersBySeasonAndGameType({
  season,
  gameType,
  categories,
  limit,
}: GoalieStatsProps): Promise<GoalieStats[]> {
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

function CheckSearchParams(
  categories: string[] | undefined,
  limit: number | undefined
) {
  const params = new URLSearchParams();
  if (categories && categories.length > 0) {
    params.append("categories", categories.join(","));
  }

  if (limit != undefined) {
    params.append("limit", limit.toString());
  }

  return params;
}
