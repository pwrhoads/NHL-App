export interface TeamInfo {
  abbrev: string;
  name: string;
  score: number;
  id: number;
}

export interface Game {
  id: number;
  startTimeUTC: string;
  gameState: string;
  awayTeam: TeamInfo;
  homeTeam: TeamInfo;
}

export interface GameDay {
  date: string;
  dyAbbrev: string;
  games: Game[];
  numberOfGames: number
}

export interface ScheduleDayResponse {
  gameWeek: GameDay[];
  numberOfGames: number;
}
