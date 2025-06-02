import type { Team } from "./Team";

export interface Game {
    id: number;
    homeTeam: Team;
    awayTeam: Team;
    startTimeUTC: Date;
    homeScore?: number;
    awayScore?: number;
    homeSOG?: number;
    awaySOG?: number;
    gameType: 2|3;  //2 is regular season, 3 is postseason
}