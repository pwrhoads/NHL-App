import type { Gamecenter } from "../types/api/GamecenterApi";

const baseUrl: string = "/api/gamecenter/";
const error: string = "Failed to fetch club stats";

export interface GamecenterProps {
  gameId: number;
}

export async function fetchGamecenterPlayByPlay({gameId}:GamecenterProps): Promise<Gamecenter> {
  const res = await fetch(
    `${baseUrl}` + `${gameId}` + "/play-by-play"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchGamecenterLanding({gameId}:GamecenterProps): Promise<Gamecenter> {
  const res = await fetch(
    `${baseUrl}` + `${gameId}` + "/landing"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}

export async function fetchGamecenterBoxscore({gameId}:GamecenterProps): Promise<Gamecenter> {
  const res = await fetch(
    `${baseUrl}` + `${gameId}` + "/boxscore"
  );
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}