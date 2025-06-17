import { adaptToSkaterStats } from "../../adapters/SkaterStatsAdapter";
import { fetchPlayerGameLogBySeasonAndType, fetchPlayerLanding } from "../../service/PlayerService";
import type { PlayerGameLog } from "../../types/api/PlayerGameLogApi";
import type { SkaterStats } from "../../types/view/SkaterStats";
import { getPlayerNHLSeasons } from "../helpers/SkaterStatHelpers";

export async function getSkaterStats(playerID: string): Promise<SkaterStats> {
  const playerLanding = await fetchPlayerLanding(playerID);


  let gameLog: PlayerGameLog[] = [];
  let gameLogReg: PlayerGameLog[] = [];
  let gameLogPlayoff: PlayerGameLog[] = [];
  if (playerLanding.seasonTotals && playerLanding.seasonTotals.length > 0) {
    const seasonsPlayed: number[] = getPlayerNHLSeasons(playerLanding.seasonTotals);

    gameLogReg = await Promise.all(
      seasonsPlayed.map(season => fetchPlayerGameLogBySeasonAndType({playerID, season, gameType:2}))
    )
    gameLogPlayoff = await Promise.all(
      seasonsPlayed.map(season => fetchPlayerGameLogBySeasonAndType({playerID, season, gameType:3}))
    )
    gameLogReg = gameLogReg.filter(log => log.playerStatsSeasons && log.playerStatsSeasons.length > 0)
    gameLogPlayoff = gameLogPlayoff.filter(log => log.playerStatsSeasons && log.playerStatsSeasons.length > 0)
    gameLog = [...gameLogReg, ...gameLogPlayoff]
  }
  return adaptToSkaterStats(playerLanding, gameLog);
}
