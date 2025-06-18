import type { PlayerGameLog } from "../../types/api/PlayerGameLogApi";
import type { SkaterSeasonData } from "../../types/view/SkaterStats";
import {
  createEmptySkaterStatLine,
} from "../../utils/factories/SkaterFactory";
import { combineStatLines } from "./CombineStatLine";
import { mapGameLogToStatLine } from "./MapGameLog";

export function mapGameLogsToSeasonStats(gameLog: PlayerGameLog[]): SkaterSeasonData[] {
  const seasonData: SkaterSeasonData[] = [];

  const seasonIds = new Set(gameLog.map((log) => log.seasonId));

  for (const seasonId of seasonIds) {
    const seasonLogs = gameLog.filter((log) => log.seasonId === seasonId);
    const regSeasonLog = seasonLogs.find((log) => log.gameTypeId === 2);
    const playoffLog = seasonLogs.find((log) => log.gameTypeId === 3);

    const regSeasonStats = regSeasonLog?.gameLog
      ? mapGameLogToStatLine(regSeasonLog.gameLog)
      : createEmptySkaterStatLine();

    const playoffStats = playoffLog?.gameLog
      ? mapGameLogToStatLine(playoffLog.gameLog)
      : createEmptySkaterStatLine();

    const totalStats = combineStatLines(regSeasonStats, playoffStats);

    const allGames = [
      ...(regSeasonLog?.gameLog || []),
      ...(playoffLog?.gameLog || []),
    ];
    const firstGame = allGames.find((g) => g.teamAbbrev);

    seasonData.push({
      season: seasonId.toString(),
      teamAbbrev: firstGame?.teamAbbrev ?? "",
      teamName: firstGame?.commonName.default ?? "",
      regSeason: {
        season: seasonId.toString(),
        total: regSeasonStats,
        byPeriod: {
          first: createEmptySkaterStatLine(),
          second: createEmptySkaterStatLine(),
          third: createEmptySkaterStatLine(),
          overtime: createEmptySkaterStatLine(),
        },
      },
      playOffs: {
        season: seasonId.toString(),
        total: playoffStats,
        byPeriod: {
          first: createEmptySkaterStatLine(),
          second: createEmptySkaterStatLine(),
          third: createEmptySkaterStatLine(),
          overtime: createEmptySkaterStatLine(),
        },
      },
      totalStats: {
        season: seasonId.toString(),
        total: totalStats,
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

  return seasonData;
}