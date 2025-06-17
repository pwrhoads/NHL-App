import type { PlayerGameLog } from "../types/api/PlayerGameLogApi";
import type { PlayerLanding } from "../types/api/PlayerLandingApi";
import type { PlayerSpotlight } from "../types/api/PlayerSpotlightApi";

const baseUrl: string = "/api/player/";
const baseSpotlightUrl: string = "/api/player-spotlight"
const error: string = "Failed to fetch player game log";

interface PlayerGameLogParams {
  playerID: string;
  season: number;
  gameType: 2 | 3;
}

export async function fetchPlayerGameLogNow({
  playerID,
}: PlayerGameLogParams): Promise<PlayerGameLog> {
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
}: PlayerGameLogParams): Promise<PlayerGameLog> {
  const res = await fetch(
    `${baseUrl}` +
      `${playerID}` +
      "/game-log/" +
      `${season}` +
      "/" +
      `${gameType}`
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchPlayerLanding(
  playerID
: string): Promise<PlayerLanding> {
  const res = await fetch(`${baseUrl}` + `${playerID}` + "/landing");
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchPlayerSpotlight() : Promise<PlayerSpotlight> {
  const res = await fetch(`${baseSpotlightUrl}`);
  if (!res.ok) throw new Error(`${error}`);
  return res.json();  
}
