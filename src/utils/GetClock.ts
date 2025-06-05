import { fetchGamecenterLanding } from "../service/GamecenterService";
import { adaptToClock } from "../adapters/ClockAdapter";

import type { Gamecenter } from "../types/api/GamecenterApi";
import type { Clock } from "../types/view/ClockType";
import type { Game } from "../types/view/Game";

export async function getClockFromGame(game:Game) {
  const gamecenter: Gamecenter = await fetchGamecenterLanding({gameId: game.id});
  const clock: Clock = await adaptToClock(gamecenter);

  return clock;
}