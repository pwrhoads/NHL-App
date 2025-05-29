export interface PlayerGameLog {
  seasonId: number;
  gameTypeId: number;
  playerStatsSeasons?: PlayerStatsSeasonsEntity[] | null;
  gameLog?: GameLogEntity[] | null;
}
export interface PlayerStatsSeasonsEntity {
  season: number;
  gameTypes?: number[] | null;
}
export interface GameLogEntity {
  gameId: number;
  teamAbbrev: string;
  homeRoadFlag: string;
  gameDate: string;
  goals: number;
  assists: number;
  commonName: StringDefault;
  opponentCommonName: StringDefault;
  points: number;
  plusMinus: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  gameWinningGoals: number;
  otGoals: number;
  shots: number;
  shifts: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  opponentAbbrev: string;
  pim: number;
  toi: string;
}
export interface StringDefault {
  default: string | null;
}
