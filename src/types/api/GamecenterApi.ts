export interface Gamecenter {
  id: number;
  season: number;
  gameType: number;
  limitedScoring: boolean;
  gameDate: string;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone?: string; 
  venue: StringDefault;
  venueLocation: StringDefault;
  tvBroadcasts?: TvBroadcastsEntity[] | null;
  gameState: string;
  gameScheduleState: string;
  periodDescriptor: PeriodDescriptor;
  regPeriods: number;
  maxPeriods: number;
  shootoutInUse: boolean;
  otInUse: boolean;
  tiesInUse?: boolean; 
  displayPeriod?: number; 
  gameOutcome?: GameOutcome; 
  clock: Clock;
  summary: Summary;
  awayTeam: Team;
  homeTeam: Team;
  plays?: PlaysEntity[] | null; 
  rosterSpots?: RosterSpotsEntity[] | null; 
  playerByGameStats?: PlayerByGameStats; 
}

export interface StringDefault {
  default: string;
}

export interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods: number;
}

export interface TvBroadcastsEntity {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}

export interface Clock {
  timeRemaining: string;
  secondsRemaining: number;
  running: boolean;
  inIntermission: boolean;
}

export interface GameOutcome {
  lastPeriodType: string;
  otPeriods: number;
}

export interface Team {
  id: number;
  commonName: StringDefault;
  abbrev: string;
  score: number;
  sog: number;
  logo: string;
  darkLogo: string;
  placeName: StringDefault;
  placeNameWithPreposition: StringDefault;
}

export interface Summary {
  scoring?: ScoringEntity[] | null;
  shootout?: null[] | null;
  threeStars?: ThreeStarsEntity[] | null;
  penalties?: PenaltiesEntity[] | null;
}

export interface ScoringEntity {
  periodDescriptor: PeriodDescriptor;
  goals?: GoalsEntity[] | null;
}

export interface GoalsEntity {
  situationCode: string;
  eventId: number;
  strength: string;
  playerId: number;
  firstName: StringDefault;
  lastName: StringDefault;
  name: StringDefault;
  teamAbbrev: StringDefault;
  headshot: string;
  highlightClipSharingUrl: string;
  highlightClipSharingUrlFr: string;
  highlightClip: number;
  highlightClipFr: number;
  discreteClip: number;
  discreteClipFr: number;
  goalsToDate: number;
  awayScore: number;
  homeScore: number;
  leadingTeamAbbrev?: StringDefault | null;
  timeInPeriod: string;
  shotType: string;
  goalModifier: string;
  assists?: AssistsEntity[] | null;
  pptReplayUrl: string;
  homeTeamDefendingSide: string;
  isHome: boolean;
}

export interface AssistsEntity {
  playerId: number;
  firstName: StringDefault;
  lastName: StringDefault;
  name: StringDefault;
  assistsToDate: number;
  sweaterNumber: number;
}

export interface ThreeStarsEntity {
  star: number;
  playerId: number;
  teamAbbrev: string;
  headshot: string;
  name: StringDefault;
  sweaterNo: number;
  position: string;
  goals?: number | null;
  assists?: number | null;
  points?: number | null;
  goalsAgainstAverage?: number | null;
  savePctg?: number | null;
}

export interface PenaltiesEntity {
  periodDescriptor: PeriodDescriptor;
  penalties?: (Penalty | null)[] | null;
}

export interface Penalty {
  timeInPeriod: string;
  type: string;
  duration: number;
  committedByPlayer: StringDefault;
  teamAbbrev: StringDefault;
  drawnBy: StringDefault;
  descKey: string;
}

export interface PlaysEntity {
  eventId: number;
  periodDescriptor: PeriodDescriptor;
  timeInPeriod: string;
  timeRemaining: string;
  situationCode: string;
  homeTeamDefendingSide: string;
  typeCode: number;
  typeDescKey: string;
  sortOrder: number;
  details?: Details | null;
  pptReplayUrl?: string | null;
}

export interface Details {
  eventOwnerTeamId?: number | null;
  losingPlayerId?: number | null;
  winningPlayerId?: number | null;
  xCoord?: number | null;
  yCoord?: number | null;
  zoneCode?: string | null;
  reason?: string | null;
  blockingPlayerId?: number | null;
  shootingPlayerId?: number | null;
  shotType?: string | null;
  goalieInNetId?: number | null;
  playerId?: number | null;
  awaySOG?: number | null;
  homeSOG?: number | null;
  hittingPlayerId?: number | null;
  hitteePlayerId?: number | null;
  secondaryReason?: string | null;
  scoringPlayerId?: number | null;
  scoringPlayerTotal?: number | null;
  assist1PlayerId?: number | null;
  assist1PlayerTotal?: number | null;
  assist2PlayerId?: number | null;
  assist2PlayerTotal?: number | null;
  awayScore?: number | null;
  homeScore?: number | null;
  highlightClipSharingUrl?: string | null;
  highlightClipSharingUrlFr?: string | null;
  highlightClip?: number | null;
  highlightClipFr?: number | null;
  discreteClip?: number | null;
  discreteClipFr?: number | null;
  typeCode?: string | null;
  descKey?: string | null;
  duration?: number | null;
  committedByPlayerId?: number | null;
  drawnByPlayerId?: number | null;
}

export interface RosterSpotsEntity {
  teamId: number;
  playerId: number;
  firstName: StringDefault;
  lastName: StringDefault;
  sweaterNumber: number;
  positionCode: string;
  headshot: string;
}

export interface PlayerByGameStats {
  awayTeam: PlayerStatsTeam;
  homeTeam: PlayerStatsTeam;
}

export interface PlayerStatsTeam {
  forwards?: PlayerStats[] | null;
  defense?: PlayerStats[] | null;
  goalies?: GoalieStats[] | null;
}

export interface PlayerStats {
  playerId: number;
  sweaterNumber: number;
  name: StringDefault;
  position: string;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  hits: number;
  powerPlayGoals: number;
  sog: number;
  faceoffWinningPctg: number;
  toi: string;
  blockedShots: number;
  shifts: number;
  giveaways: number;
  takeaways: number;
}

export interface GoalieStats {
  playerId: number;
  sweaterNumber: number;
  name: StringDefault;
  position: string;
  evenStrengthShotsAgainst: string;
  powerPlayShotsAgainst: string;
  shorthandedShotsAgainst: string;
  saveShotsAgainst: string;
  savePctg?: number | null;
  evenStrengthGoalsAgainst: number;
  powerPlayGoalsAgainst: number;
  shorthandedGoalsAgainst: number;
  pim: number;
  goalsAgainst: number;
  toi: string;
  starter: boolean;
  decision?: string | null;
  shotsAgainst: number;
  saves: number;
}

