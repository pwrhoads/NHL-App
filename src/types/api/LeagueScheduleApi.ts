export interface LeagueSchedule {
  nextStartDate: string;
  previousStartDate: string;
  gameWeek?: (GameWeekEntity)[] | null;
  oddsPartners?: (OddsPartnersEntity)[] | null;
  preSeasonStartDate: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  playoffEndDate: string;
  numberOfGames: number;
}
export interface GameWeekEntity {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
  datePromo?: (null)[] | null;
  games?: (GamesEntity | null)[] | null;
}
export interface GamesEntity {
  id: number;
  season: number;
  gameType: number;
  venue: StringDefault;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  tvBroadcasts?: (TvBroadcastsEntity)[] | null;
  alternateBroadcasts?: (AlternateBroadcastsEntity)[] | null;
  awayTeam: AwayTeam;
  homeTeam: HomeTeam;
  periodDescriptor: PeriodDescriptor;
  seriesStatus: SeriesStatus;
  seriesUrl: string;
  ticketsLink: string;
  ticketsLinkFr: string;
  gameCenterLink: string;
}

export interface TvBroadcastsEntity {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}
export interface AlternateBroadcastsEntity {
  country: string;
  descriptions?: (StringDefault)[] | null;
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
  radioLink: string;
  odds?: (OddsEntity)[] | null;
}

export interface OddsEntity {
  providerId: number;
  value: string;
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
  radioLink: string;
  odds?: (OddsEntity)[] | null;
}
export interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
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

export interface StringDefault {
  default: string;
}
