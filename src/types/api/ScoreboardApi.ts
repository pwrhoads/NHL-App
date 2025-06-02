export interface Scoreboard {
  focusedDate: string;
  focusedDateCount: number;
  clubTimeZone: string;
  clubUTCOffset: string;
  clubScheduleLink: string;
  gamesByDate?: (GamesByDateEntity)[] | null;
}
export interface GamesByDateEntity {
  date: string;
  games?: (GamesEntity)[] | null;
}
export interface GamesEntity {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  gameCenterLink: string;
  venue: StringDefault;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts?: (TvBroadcastsEntity)[] | null;
  gameState: string;
  gameScheduleState: string;
  awayTeam: AwayTeam;
  homeTeam: AwayTeamOrHomeTeam;
  ticketsLink: string;
  ticketsLinkFr: string;
  period: number;
  periodDescriptor: PeriodDescriptor;
  threeMinRecap: string;
  threeMinRecapFr: string;
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
  name: StringDefault;
  commonName: StringDefault;
  placeNameWithPreposition: StringDefault;
  abbrev: string;
  score: number;
  logo: string;
}

export interface AwayTeamOrHomeTeam {
  id: number;
  name: StringDefault;
  commonName: StringDefault;
  placeNameWithPreposition: StringDefault;
  abbrev: string;
  score: number;
  logo: string;
}
export interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface StringDefault {
  default: string | null;
}
