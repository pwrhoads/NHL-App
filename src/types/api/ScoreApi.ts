export interface Score {
  prevDate: string;
  currentDate: string;
  nextDate: string;
  gameWeek?: (GameWeekEntity)[] | null;
  oddsPartners?: (OddsPartnersEntity)[] | null;
  games?: (GamesEntity)[] | null;
}
export interface GameWeekEntity {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
}
export interface OddsPartnersEntity {
  partnerId: number;
  country: string;
  name: string;
  imageUrl: string;
  siteUrl: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}
export interface GamesEntity {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: StringDefault;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts?: (TvBroadcastsEntity)[] | null;
  gameState: string;
  gameScheduleState: string;
  awayTeam: AwayTeamOrHomeTeam;
  homeTeam: AwayTeamOrHomeTeam;
  seriesStatus: SeriesStatus;
  gameCenterLink: string;
  seriesUrl: string;
  neutralSite: boolean;
  venueTimezone: string;
  ticketsLink: string;
  ticketsLinkFr: string;
  teamLeaders?: (TeamLeadersEntity)[] | null;
}

export interface TvBroadcastsEntity {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}
export interface AwayTeamOrHomeTeam {
  id: number;
  name: StringDefault;
  abbrev: string;
  score?: number;
  sog?: number;
  record?: string;
  logo: string;
  odds?: (OddsEntity)[] | null;
}
export interface OddsEntity {
  providerId: number;
  value: string;
}
export interface SeriesStatus {
  round: number;
  seriesAbbrev: string;
  seriesTitle: string;
  seriesLetter: string;
  neededToWin: number;
  topSeedTeamAbbrev: string;
  topSeedWins: number;
  bottomSeedTeamAbbrev: string;
  bottomSeedWins: number;
  gameNumberOfSeries: number;
}
export interface TeamLeadersEntity {
  id: number;
  firstName: StringDefault;
  lastName: StringDefault;
  headshot: string;
  teamAbbrev: string;
  sweaterNumber: number;
  position: string;
  category: string;
  value: number;
}

export interface StringDefault {
  default: string | null;
}
