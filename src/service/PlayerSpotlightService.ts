import type { PlayerSpotlight } from "../types/api/PlayerSpotlightApi";

const baseUrl: string = "/api/player-spotlight";
const error: string = "Failed to fetch player spotlight";


export async function fetchPlayerSpotlight(): Promise<PlayerSpotlight> {
  const res = await fetch(`${baseUrl}`);
  if (!res.ok) throw new Error(`${error}`);
  return res.json();
}