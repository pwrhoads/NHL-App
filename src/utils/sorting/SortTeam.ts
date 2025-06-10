import type { TeamInfo } from "../../types/view/TeamStats"

export function sortTeamsByPlace(teams: TeamInfo[]): TeamInfo[] {

    teams.sort((a, b) => a.teamPlace.localeCompare(b.teamPlace));

    return teams;
}