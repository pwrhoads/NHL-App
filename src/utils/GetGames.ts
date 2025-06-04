import { adaptToGames } from "../adapters/GameAdapter";
import { fetchScoreNow } from "../service/ScoreService";
import type { Score } from "../types/api/ScoreApi";
import type { Game } from "../types/view/Game";

export async function getGamesToday() {
  const score: Score = await fetchScoreNow();
  const games: Game[] = await adaptToGames(score.games ?? null);

  return games;
}
