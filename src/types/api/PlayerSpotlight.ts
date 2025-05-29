export interface PlayerSpotlight {
  playerId: number;
  name: StringDefault;
  playerSlug: string;
  position: string;
  sweaterNumber: number;
  teamId: number;
  headshot: string;
  teamTriCode: string;
  teamLogo: string;
  sortId: number;
}
export interface StringDefault {
  default: string;
}
