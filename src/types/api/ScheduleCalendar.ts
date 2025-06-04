export interface ScheduleCalendar {
  endDate: string;
  nextStartDate: string;
  previousStartDate: string;
  startDate: string;
  teams?: (TeamsEntity)[] | null;
}
export interface TeamsEntity {
  id: number;
  seasonId: number;
  commonName: StringDefault;
  abbrev: string;
  name: StringDefault;
  placeNameWithPreposition: StringDefault;
  placeName: StringDefault;
  logo: string;
  darkLogo: string;
  french: boolean;
}

export interface StringDefault {
  default: string | null;
}
