import { fetchStandingsNow } from "../service/TeamStandingService";
import type { TeamInfo } from "../types/view/TeamStats";

//Assume we will always be able to get the team's abbrev. Then use the abbrev to find remaining team info
export async function adaptToSingleTeamFromAbbrev(abbrev:string) {
    const standing =  await fetchStandingsNow();
        if (!standing.standings) return null;
    
        const matchingTeam = standing.standings.find(
            entry => entry.teamAbbrev.default?.toLowerCase() === abbrev.toLowerCase()
        );
    
        if (!matchingTeam) return null;
    
        const team: TeamInfo = {
            id: "",
            teamName: matchingTeam.teamCommonName.default ?? 'Unknown',
            teamPlace: matchingTeam.placeName.default ?? 'Unknown',
            teamAbbrev: matchingTeam.teamAbbrev.default ?? '',
            logoUrl: matchingTeam.teamLogo,
        }
        return team;
}