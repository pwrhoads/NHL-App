import { adaptToSkaterStats } from "../../adapters/SkaterStatsAdapter";
import { fetchPlayerLanding } from "../../service/PlayerService";
import type { SkaterStats } from "../../types/view/SkaterStats";

export async function getSkaterStats(
  playerID: string
): Promise<SkaterStats> {
  const playerLanding = await fetchPlayerLanding(playerID);

  return adaptToSkaterStats(playerLanding);
}