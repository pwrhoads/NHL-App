export interface GoalieStats {
  wins?: (StatsEntity)[] | null;
  shutouts?: (StatsEntity)[] | null;
  savePctg?: (StatsEntity)[] | null;
  goalsAgainstAverage?: (StatsEntity)[] | null;
}
export interface StatsEntity {
  id: number;
  firstName: StringDefault;
  lastName: StringDefault;
  sweaterNumber: number;
  headshot: string;
  teamAbbrev: string;
  teamName: StringDefault;
  teamLogo: string;
  position: string;
  value: number;
}
export interface StringDefault {
  default: string | null;
}
