import { adaptToSkaterStats } from "../../adapters/SkaterStatsAdapter";
import { fetchPlayerGameLogBySeasonAndType, fetchPlayerLanding } from "../../service/PlayerService";
import type { PlayerGameLog } from "../../types/api/PlayerGameLogApi";
import type { PlayerLanding } from "../../types/api/PlayerLandingApi";
import type { StatsByCategory } from "../../types/helper/CombinedGameLogs";
import type { SkaterStats } from "../../types/view/SkaterStats";
import { getBlocksForAllGameLogs, getPlayerNHLSeasons } from "../helpers/SkaterStatHelpers";

// 1. Fetch all career logs (regular + playoffs)
async function fetchCareerLogs(playerID: string, seasonsPlayed: number[]): Promise<PlayerGameLog[]> {
  const gameLogReg = await Promise.all(
    seasonsPlayed.map(season => fetchPlayerGameLogBySeasonAndType({ playerID, season, gameType: 2 }))
  );
  const gameLogPlayoff = await Promise.all(
    seasonsPlayed.map(season => fetchPlayerGameLogBySeasonAndType({ playerID, season, gameType: 3 }))
  );

  // Filter out empty logs
  const filteredReg = gameLogReg.filter(log => log.playerStatsSeasons && log.playerStatsSeasons.length > 0);
  const filteredPlayoff = gameLogPlayoff.filter(log => log.playerStatsSeasons && log.playerStatsSeasons.length > 0);

  return [...filteredReg, ...filteredPlayoff];
}

// 2. Extract last 5 game logs from career logs
function filterLast5GameLogs(playerLanding: PlayerLanding, gameLogCareer: PlayerGameLog[]): PlayerGameLog[] {
  if (!playerLanding.last5Games || playerLanding.last5Games.length === 0) return [];

  const last5GameIds = new Set(playerLanding.last5Games.map(g => g.gameId));

  return gameLogCareer
    .map(log => ({
      ...log,
      gameLog: log.gameLog?.filter(game => last5GameIds.has(game.gameId)) ?? [],
    }))
    .filter(log => (log.gameLog?.length ?? 0) > 0);
}

// 3. Compose combined logs
function composeCombinedLogs(gameLogCareer: PlayerGameLog[], gameLogReg: PlayerGameLog[], gameLogPlayoff: PlayerGameLog[], gameLogLast5: PlayerGameLog[]) {
  return {
    career: gameLogCareer,
    regularSeason: gameLogReg,
    playoffs: gameLogPlayoff,
    last5: gameLogLast5,
  };
}

// 4. Main orchestrator
export async function getSkaterStats(playerID: string): Promise<SkaterStats> {
  const playerLanding = await fetchPlayerLanding(playerID);

  let gameLogCareer: PlayerGameLog[] = [];
  let gameLogReg: PlayerGameLog[] = [];
  let gameLogPlayoff: PlayerGameLog[] = [];
  let gameLogLast5: PlayerGameLog[] = [];

  if (playerLanding.seasonTotals && playerLanding.seasonTotals.length > 0) {
    const seasonsPlayed = getPlayerNHLSeasons(playerLanding.seasonTotals);

    gameLogCareer = await fetchCareerLogs(playerID, seasonsPlayed);

    // Split career logs back into reg/playoff if needed for combined logs object
    gameLogReg = gameLogCareer.filter(log => log.gameTypeId === 2);
    gameLogPlayoff = gameLogCareer.filter(log => log.gameTypeId === 3);
  }

  gameLogLast5 = filterLast5GameLogs(playerLanding, gameLogCareer);

  const combinedGameLogs = composeCombinedLogs(gameLogCareer, gameLogReg, gameLogPlayoff, gameLogLast5);

  // const blocksByCategory: StatsByCategory = await getBlocksForAllGameLogs(combinedGameLogs, Number(playerID))
  // console.log(blocksByCategory)

  return adaptToSkaterStats(playerLanding, combinedGameLogs);
}