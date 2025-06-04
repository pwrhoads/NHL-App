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
  awayTeam: TeamsEntity;
  homeTeam: TeamsEntity;
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
export interface TeamsEntity {
  id: number;
  name: StringDefault;
  commonName: StringDefault;
  placeNameWithPreposition: StringDefault;
  abbrev: string;
  record?: string;
  score?: number;
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
