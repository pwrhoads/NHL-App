export interface ClubStats {
  season: string;
  gameType: number;
  skaters?: (SkatersEntity)[] | null;
  goalies?: (GoaliesEntity)[] | null;
}
export interface SkatersEntity {
  playerId: number;
  headshot: string;
  firstName: StringDefault;
  lastName: StringDefault;
  positionCode: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  penaltyMinutes: number;
  powerPlayGoals: number;
  shorthandedGoals: number;
  gameWinningGoals: number;
  overtimeGoals: number;
  shots: number;
  shootingPctg: number;
  avgTimeOnIcePerGame: number;
  avgShiftsPerGame: number;
  faceoffWinPctg: number;
}

export interface GoaliesEntity {
  playerId: number;
  headshot: string;
  firstName: StringDefault;
  lastName: StringDefault;
  gamesPlayed: number;
  gamesStarted: number;
  wins: number;
  losses: number;
  overtimeLosses: number;
  goalsAgainstAverage: number;
  savePercentage: number;
  shotsAgainst: number;
  saves: number;
  goalsAgainst: number;
  shutouts: number;
  goals: number;
  assists: number;
  points: number;
  penaltyMinutes: number;
  timeOnIce: number;
}

export interface StringDefault {
  default: string | null;
}
