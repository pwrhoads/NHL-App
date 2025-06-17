import type {  PlayerGameLog } from "../types/api/PlayerGameLogApi";
import type { PlayerLanding } from "../types/api/PlayerLandingApi";
import type {  SkaterStats } from "../types/view/SkaterStats";
import { createEmptySkaterStatLine, createEmptySkaterStats } from "../utils/factories/SkaterFactory";
import { combineStatLines } from "./helper/CombineStatLine";
import { mapGameLogToStatLine } from "./helper/MapGameLog";
import {
  mapCareerStatSourceToStatLine,
  mapLast5GamesSourceToStatLine,
} from "./helper/MapSource";

export async function adaptToSkaterStats(
  playerLanding: PlayerLanding, gameLog: PlayerGameLog[]
): Promise<SkaterStats> {
  const skaterStats = createEmptySkaterStats();

  //SkaterInfo
  Object.assign(skaterStats, {
    id: playerLanding.playerId.toString(),
    fName: playerLanding.firstName.default!,
    lName: playerLanding.lastName.default!,
    currentTeamName: playerLanding.teamCommonName.default!,
    currentTeamAbbrev: playerLanding.currentTeamAbbrev,
    currentSweaterNo: playerLanding.sweaterNumber,
    mugshotUrl: playerLanding.headshot,
    position: playerLanding.position,
  });
  //Regular Season Career Stats
  skaterStats.careerStats.regSeason = mapCareerStatSourceToStatLine(
    playerLanding.careerTotals.regularSeason
  );
  //Playoff Career Stats
  skaterStats.careerStats.playOffs = mapCareerStatSourceToStatLine(
    playerLanding.careerTotals.playoffs
  );
  //Regular Season + Playoff Career Stats
  skaterStats.careerStats.combined = combineStatLines(
    skaterStats.careerStats.regSeason,
    skaterStats.careerStats.playOffs
  );
  //Last 5 Games Stats
  if (playerLanding.last5Games && playerLanding.last5Games.length > 0) {
    skaterStats.recentGames.last5Games = mapLast5GamesSourceToStatLine(
      playerLanding.last5Games!
    );
  }
  //Season Stats
  for (const seasonLog of gameLog) {
    const games = seasonLog.gameLog ?? [];
    if (games.length === 0) continue;

    const total = mapGameLogToStatLine(games);

    const firstGame = games.find(g => g.teamAbbrev);

    skaterStats.seasons.push({
        season: seasonLog.seasonId.toString(),
        teamAbbrev: firstGame?.teamAbbrev ?? '',
        teamName: firstGame?.commonName.default ?? '',
        totalStats: {
            season: seasonLog.seasonId.toString(),
            total,
            byPeriod: {
                first: createEmptySkaterStatLine(),
                second: createEmptySkaterStatLine(),
                third: createEmptySkaterStatLine(),
                overtime: createEmptySkaterStatLine(),
            },
        },
        vsTeam: [],
        vsGoalie: [],
    });
  }
  console.log(skaterStats)
  return skaterStats;
}
