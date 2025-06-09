import type { Clock } from "./ClockType";
import type { TeamInfo } from "./TeamStats";
export interface Game {
    id: string;
    homeTeam: TeamInfo;
    awayTeam: TeamInfo;
    startTimeUTC: string;
    homeScore?: number;
    awayScore?: number;
    homeSOG?: number;
    awaySOG?: number;
    gameType: 2|3;  //2 is regular season, 3 is postseason
    gameState: string;
    clock?: Clock;
}