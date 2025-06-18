import type { StatTypeKey } from "../../enums/StatTypeKey";
import { fetchGamecenterPlayByPlay } from "../../service/GamecenterService";
import type { PlaysEntity } from "../../types/api/GamecenterApi";

interface StatResult {
  total: number;
  wins?: number; // Only for faceoffs
}

export async function getStatFromPlayByPlay(
  gameId: number,
  statTypeKey: StatTypeKey,
  playerId: number
): Promise<StatResult> {
    console.log(`Fetching play-by-play for gameId: ${gameId}, statType: ${statTypeKey}, playerId: ${playerId}`)
  const gamecenter = await fetchGamecenterPlayByPlay({ gameId });

  const plays: PlaysEntity[] = gamecenter.plays ?? [];

  switch (statTypeKey) {
    case "blocked-shot": {
      const total = plays.filter(
        (play) =>
          play.typeDescKey === "blocked-shot" &&
          play.details?.blockingPlayerId === playerId
      ).length;

      return { total };
    }
    case "faceoff": {
      const relevantPlays = plays.filter(
        (play) =>
          play.typeDescKey === "faceoff" &&
          (play.details?.winningPlayerId === playerId ||
            play.details?.losingPlayerId === playerId)
      );

      const total = relevantPlays.length;
      const wins = relevantPlays.filter(
        (play) => play.details?.winningPlayerId === playerId
      ).length;
      return { total, wins };
    }
    default:
      return { total: 0 };
  }
}
