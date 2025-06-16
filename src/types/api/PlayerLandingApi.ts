export interface PlayerLanding {
  playerId: number;
  isActive: boolean;
  currentTeamId: number;
  currentTeamAbbrev: string;
  fullTeamName: StringDefault;
  teamCommonName: StringDefault;
  teamPlaceNameWithPreposition: StringDefault;
  firstName: StringDefault;
  lastName: StringDefault;
  badges?: (BadgesEntity)[] | null;
  teamLogo: string;
  sweaterNumber: number;
  position: string;
  headshot: string;
  heroImage: string;
  heightInInches: number;
  heightInCentimeters: number;
  weightInPounds: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: StringDefault;
  birthStateProvince: StringDefault;
  birthCountry: string;
  shootsCatches: string;
  draftDetails: DraftDetails;
  playerSlug: string;
  inTop100AllTime: number;
  inHHOF: number;
  featuredStats: FeaturedStats;
  careerTotals: CareerTotals;
  shopLink: string;
  twitterLink: string;
  watchLink: string;
  last5Games?: (Last5GamesEntity)[] | null;
  seasonTotals?: (SeasonTotalsEntity)[] | null;
  awards?: (AwardsEntity)[] | null;
  currentTeamRoster?: (CurrentTeamRosterEntity)[] | null;
}
export interface BadgesEntity {
  logoUrl: StringDefault;
  title: StringDefault;
}
export interface DraftDetails {
  year: number;
  teamAbbrev: string;
  round: number;
  pickInRound: number;
  overallPick: number;
}
export interface FeaturedStats {
  season: number;
  regularSeason: RegularSeasonOrPlayoffs;
  playoffs: RegularSeasonOrPlayoffs;
}
export interface RegularSeasonOrPlayoffs {
  subSeason: SubSeasonOrCareer;
  career: SubSeasonOrCareer;
}
export interface SubSeasonOrCareer {
  assists: number;
  gameWinningGoals: number;
  gamesPlayed: number;
  goals: number;
  otGoals: number;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shootingPctg: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  shots: number;
}
export interface CareerTotals {
  regularSeason: RegularSeasonOrPlayoffs1;
  playoffs: RegularSeasonOrPlayoffs1;
}
export interface RegularSeasonOrPlayoffs1 {
  assists?: number;
  avgToi?: string;
  faceoffWinningPctg?: number;
  gameWinningGoals?: number;
  gamesPlayed?: number;
  goals?: number;
  otGoals?: number;
  pim?: number;
  plusMinus?: number;
  points?: number;
  powerPlayGoals?: number;
  powerPlayPoints?: number;
  shootingPctg?: number;
  shorthandedGoals?: number;
  shorthandedPoints?: number;
  shots?: number;
  gamesStarted?: number;
  goalsAgainst?: number;
  goalsAgainstAvg?: number;
  losses?: number;
  otLosses?: number;
  savePctg?: number;
  shotsAgainst?: number;
  shutouts?: number;
  wins?: number;
  timeOnIce?: string;
}
export interface Last5GamesEntity {
  assists: number;
  gameDate: string;
  gameId: number;
  gameTypeId: number;
  goals: number;
  homeRoadFlag: string;
  opponentAbbrev: string;
  pim: number;
  plusMinus: number;
  points: number;
  powerPlayGoals: number;
  shifts: number;
  shorthandedGoals: number;
  shots: number;
  teamAbbrev: string;
  toi: string;
}
export interface SeasonTotalsEntity {
  assists: number;
  gameTypeId: number;
  gamesPlayed: number;
  goals: number;
  leagueAbbrev: string;
  pim?: number | null;
  points: number;
  season: number;
  sequence: number;
  teamName: StringDefault;
  gameWinningGoals?: number | null;
  plusMinus?: number | null;
  powerPlayGoals?: number | null;
  shorthandedGoals?: number | null;
  shots?: number | null;
  teamCommonName?: StringDefault | null;
  teamPlaceNameWithPreposition?: StringDefault | null;
  avgToi?: string | null;
  faceoffWinningPctg?: number | null;
  otGoals?: number | null;
  powerPlayPoints?: number | null;
  shootingPctg?: number | null;
  shorthandedPoints?: number | null;
}

export interface AwardsEntity {
  trophy: StringDefault;
  seasons?: (SeasonsEntity)[] | null;
}

export interface SeasonsEntity {
  assists: number;
  blockedShots: number;
  gameTypeId: number;
  gamesPlayed: number;
  goals: number;
  hits: number;
  pim: number;
  plusMinus: number;
  points: number;
  seasonId: number;
}
export interface CurrentTeamRosterEntity {
  playerId: number;
  lastName: StringDefault;
  firstName: StringDefault;
  playerSlug: string;
}

export interface StringDefault {
  default: string | null;
}