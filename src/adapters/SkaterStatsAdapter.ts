import type { PlayerGameLog } from "../types/api/PlayerGameLogApi";
import type { PlayerLanding } from "../types/api/PlayerLandingApi";
import type { SkaterStats } from "../types/view/SkaterStats";
import { createEmptySkaterStats } from "../utils/factories/SkaterFactory";
import { combineStatLines } from "./helper/CombineStatLine";
import {
  mapToCareerStatLine,
  mapLast5GamesSourceToStatLine,
} from "./helper/MapCareerStats";
import { mapGameLogsToSeasonStats } from "./helper/MapSeasonStats";

interface CombinedGameLogs {
  career: PlayerGameLog[];
  regularSeason: PlayerGameLog[];
  playoffs: PlayerGameLog[];
  last5: PlayerGameLog[];
}

export function adaptToSkaterStats(
  playerLanding: PlayerLanding,
  gameLogs: CombinedGameLogs
): SkaterStats {
  const skaterStats = createEmptySkaterStats();

  console.log(playerLanding.careerTotals);
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
  skaterStats.careerStats.regSeason = mapToCareerStatLine(
    playerLanding.careerTotals.regularSeason
  );
  //Playoff Career Stats
  if (playerLanding.careerTotals?.playoffs) {
    skaterStats.careerStats.playOffs = mapToCareerStatLine(
      playerLanding.careerTotals.playoffs
    );
  }
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
  skaterStats.seasons = mapGameLogsToSeasonStats(gameLogs.career);

  console.log(skaterStats);
  return skaterStats;
}
