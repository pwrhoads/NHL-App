export interface SkaterStats {
  goalsSh?: (StatEntity)[] | null;
  plusMinus?: (StatEntity)[] | null;
  assists?: (StatEntity)[] | null;
  goalsPp?: (StatEntity)[] | null;
  faceoffLeaders?: (StatEntity)[] | null;
  penaltyMins?: (StatEntity)[] | null;
  goals?: (StatEntity)[] | null;
  points?: (StatEntity)[] | null;
  toi?: (StatEntity)[] | null;
}
export interface StatEntity {
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
