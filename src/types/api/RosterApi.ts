export interface Roster {
  forwards?: (PlayerEntity)[] | null;
  defensemen?: (PlayerEntity)[] | null;
  goalies?: (PlayerEntity)[] | null;
}
export interface PlayerEntity {
  id: number;
  headshot: string;
  firstName: StringDefault;
  lastName: StringDefault;
  sweaterNumber: number;
  positionCode: string;
  shootsCatches: string;
  heightInInches: number;
  weightInPounds: number;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: StringDefault;
  birthCountry: string;
  birthStateProvince?: StringDefault | null;
}

export interface StringDefault {
  default: string | null;
}