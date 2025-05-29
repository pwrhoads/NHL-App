import type { PlayerGameLog } from "../types/api/PlayerGameLogApi";
import type { PlayerLanding } from "../types/api/PlayerLandingApi";

const baseUrl: string = "/api/player/";
const error: string = "Failed to fetch player game log";

interface PlayerGameLogParams {
  playerID: string;
  season: number;
  gameType: 1 | 2 | 3;
}

export async function fetchPlayerGameLogNow({
  playerID,
}: PlayerGameLogParams): Promise<PlayerGameLog[]> {
  const res = await fetch(
    `${baseUrl}` + "player/" + `${playerID}` + "/game-log/now"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchPlayerGameLogBySeasonAndType({
  playerID,
  season,
  gameType,
}: PlayerGameLogParams): Promise<PlayerGameLog[]> {
  const res = await fetch(
    `${baseUrl}` +
      "player/" +
      `${playerID}` +
      "/game-log/" +
      `${season}` +
      "/" +
      `${gameType}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchPlayerLanding({
  playerID,
}: PlayerGameLogParams): Promise<PlayerLanding[]> {
  const res = await fetch(`${baseUrl}` + "/" + `${playerID}` + "/landing");
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}
