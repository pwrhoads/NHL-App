import type { PlayerGameLog } from "../../types/api/PlayerGameLogApi";

export interface CombinedGameLogs {
  career: PlayerGameLog[];
  regularSeason: PlayerGameLog[];
  playoffs: PlayerGameLog[];
  last5: PlayerGameLog[];
}

export type StatsByCategory = Record<string, number>;