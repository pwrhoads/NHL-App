export interface PlayerSearch {
  playerId: string;
  name: string;
  positionCode: string;
  teamId?: string | null;
  teamAbbrev?: string | null;
  lastTeamId?: string | null;
  lastTeamAbbrev?: string | null;
  lastSeasonId?: string | null;
  sweaterNumber?: number | null;
  active: boolean;
  height: string;
  heightInInches: number;
  heightInCentimeters: number;
  weightInPounds: number;
  weightInKilograms: number;
  birthCity: string;
  birthStateProvince?: null;
  birthCountry: string;
}
