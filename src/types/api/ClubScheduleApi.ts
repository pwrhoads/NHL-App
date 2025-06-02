export interface ClubSchedule {
  previousSeason: number;
  currentSeason: number;
  clubTimezone: string;
  clubUTCOffset: string;
  games?: (GamesEntity)[] | null;
}
export interface GamesEntity {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: StringDefault;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts?: (TvBroadcastsEntity | null)[] | null;
  awayTeam: AwayTeam;
  homeTeam: HomeTeam;
  periodDescriptor: PeriodDescriptor;
  gameOutcome?: GameOutcome | null;
  winningGoalie?: WinningGoalie | null;
  winningGoalScorer?: WinningGoalScorer | null;
  gameCenterLink: string;
  ticketsLink?: string | null;
  ticketsLinkFr?: string | null;
  threeMinRecap?: string | null;
  condensedGame?: string | null;
  threeMinRecapFr?: string | null;
  condensedGameFr?: string | null;
  alternateBroadcasts?: (AlternateBroadcastsEntity)[] | null;
}

export interface TvBroadcastsEntity {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}
export interface AwayTeam {
  id: number;
  commonName: StringDefault;
  placeName: StringDefault;
  placeNameWithPreposition: StringDefault;
  abbrev: string;
  logo: string;
  darkLogo: string;
  awaySplitSquad: boolean;
  score?: number | null;
  airlineLink?: string | null;
  airlineDesc?: string | null;
  hotelLink?: string | null;
  hotelDesc?: string | null;
  radioLink?: string | null;
}

export interface HomeTeam {
  id: number;
  commonName: StringDefault;
  placeName: StringDefault;
  placeNameWithPreposition: StringDefault;
  abbrev: string;
  logo: string;
  darkLogo: string;
  homeSplitSquad: boolean;
  score?: number | null;
  airlineLink?: string | null;
  airlineDesc?: string | null;
  hotelLink?: string | null;
  hotelDesc?: string | null;
  radioLink?: string | null;
}
export interface PeriodDescriptor {
  periodType: string;
  maxRegulationPeriods: number;
}
export interface GameOutcome {
  lastPeriodType: string;
}
export interface WinningGoalie {
  playerId: number;
  firstInitial: StringDefault;
  lastName: StringDefault;
}

export interface WinningGoalScorer {
  playerId: number;
  firstInitial: StringDefault;
  lastName: StringDefault;
}

export interface AlternateBroadcastsEntity {
  country: string;
  descriptions?: (StringDefault)[] | null;
}

export interface StringDefault {
  default: string | null;
}
