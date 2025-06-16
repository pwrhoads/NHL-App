import type { PlayerLanding } from "../types/api/PlayerLandingApi";
import type { SkaterStats } from "../types/view/SkaterStats";
import { createEmptySkaterStats } from "../utils/factories/SkaterFactory";
import { combineStatLines } from "./helper/CombineStatLine";
import { mapCareerStatSourceToStatLine } from "./helper/MapSource";

export async function adaptToSkaterStats(
  playerLanding: PlayerLanding
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

  skaterStats.careerStats.regSeason = mapCareerStatSourceToStatLine(
    playerLanding.careerTotals.regularSeason
  );
  skaterStats.careerStats.playOffs = mapCareerStatSourceToStatLine(
    playerLanding.careerTotals.playoffs
  );
  skaterStats.careerStats.combined = combineStatLines(
    skaterStats.careerStats.regSeason,
    skaterStats.careerStats.playOffs
  );

  return skaterStats;
}
