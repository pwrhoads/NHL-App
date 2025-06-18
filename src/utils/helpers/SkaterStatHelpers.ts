import { StatTypeKeys } from "../../enums/StatTypeKey";
import type {
  PlayerGameLog,
} from "../../types/api/PlayerGameLogApi";
import type { SeasonTotalsEntity } from "../../types/api/PlayerLandingApi";
import type { CombinedGameLogs } from "../../types/helper/CombinedGameLogs";
import { getStatFromPlayByPlay } from "../loaders/PlayByPlayLoader";

export function calculateCareerToiAvg(
  toi1: string,
  toi2: string,
  gp1: number,
  gp2: number
): string {
  const toi1Secs = timeStringToSeconds(toi1);
  const toi2Secs = timeStringToSeconds(toi2);

  const toi1Total = toi1Secs * gp1;
  const toi2Total = toi2Secs * gp2;

  const totalToi = toi1Total + toi2Total;
  const totalGp = gp1 + gp2;

  const finalToi = totalToi / totalGp;

  return secondsToTimeString(finalToi);
}

function timeStringToSeconds(time: string): number {
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + seconds;
}

function secondsToTimeString(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  return minutes + ":" + seconds.toString().padStart(2, "0");
}

export function calculateCareerShootingPct(
  goals1: number,
  goals2: number,
  shots1: number,
  shots2: number
): number {
  const totalGoals = goals1 + goals2;
  const totalShots = shots1 + shots2;

  if (totalShots === 0) return 0;

  return totalGoals / totalShots;
}

export function calculateValuePer60(
  toi: string,
  value: number,
  gp: number
): number {
  const secondsPerGame = timeStringToSeconds(toi);
  const secondsPlayed = secondsPerGame * gp;

  if (secondsPlayed === 0) return 0;

  return value / secondsPlayed;
}

export function getPlayerNHLSeasons(
  seasonTotals: SeasonTotalsEntity[]
): number[] {
  const nhlSeasons = seasonTotals
    .filter((season) => season.leagueAbbrev === "NHL")
    .map((season) => season.season);

  const uniqueSortedSeasons = Array.from(new Set(nhlSeasons)).sort(
    (a, b) => a - b
  );

  return uniqueSortedSeasons;
}

export async function getFaceOffPctFromGameLog(
  logs: PlayerGameLog[],
  playerId: number
): Promise<number> {
  let totalFaceOffs = 0;
  let totalWins = 0;
  for (const log of logs) {
    if (!log.gameLog) continue;
    for (const game of log.gameLog) {
      const { total, wins } = await getStatFromPlayByPlay(
        game.gameId,
        StatTypeKeys.Faceoff,
        playerId
      );
      totalFaceOffs += total;
      totalWins += wins ?? 0;
    }
  }
  if (totalFaceOffs === 0) return 0;
  const faceoffPct = totalWins / totalFaceOffs;
  return faceoffPct;
}

async function getBlocksFromGameLog(
  logs: PlayerGameLog[],
  playerId: number
): Promise<number> {
  let totalGames = 0;
  let totalBlocks = 0;
  for (const log of logs) {
    if (!log.gameLog) continue;
    for (const game of log.gameLog) {
      totalGames++;
      const { total } = await getStatFromPlayByPlay(
        game.gameId,
        StatTypeKeys.BlockedShot,
        playerId
      );
      totalBlocks += total;
    }
  }
  console.log(`Processed ${totalGames} games for player ${playerId}`)
  return totalBlocks;
}

export async function getBlocksForAllGameLogs(
  combinedGameLogs: CombinedGameLogs,
  playerId: number
): Promise<Record<string, number>> {

  const blocksPromises = Object.entries(combinedGameLogs).map(
    async ([key, logs]) => {
      const blocks = await getBlocksFromGameLog(logs, playerId);
      return [key, blocks] as const;
    }
  );

  const blocksResults = await Promise.all(blocksPromises);

  return Object.fromEntries(blocksResults)
}
