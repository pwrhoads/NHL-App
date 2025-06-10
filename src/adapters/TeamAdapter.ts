import { fetchScheduleCalendarByDate, fetchScheduleCalendarNow } from "../service/ScheduleCalendarService";
import type { ScheduleCalendar } from "../types/api/ScheduleCalendar";
import type { TeamInfo } from "../types/view/TeamStats";
import { getTeamStyle } from "../utils/GetTeam";

//Assume we will always be able to get the team's abbrev. Then use the abbrev to find remaining team info. Use date to look up past teams.
export async function adaptToSingleTeamFromAbbrev(
  abbrev: string,
  date?: string,
): Promise<TeamInfo | null> {
  let sched: ScheduleCalendar;
  if (!date) {
    sched = await fetchScheduleCalendarNow()
  }
  else {
    sched = await fetchScheduleCalendarByDate({date})
  }
  if (!sched.teams) return null;

  const matchingTeam = sched.teams.find(
    (entry) => entry.abbrev.toLowerCase() === abbrev.toLowerCase()
  );

  if (!matchingTeam) return null;

  const teamColors = getTeamStyle(abbrev);
  const team: TeamInfo = {
    id: matchingTeam.id.toString(),
    teamName: matchingTeam.commonName.default ?? "Unknown",
    teamPlace: matchingTeam.placeName.default ?? "Unknown",
    teamAbbrev: matchingTeam.abbrev ?? "",
    teamFullName: matchingTeam.name.default ?? "Unknown",
    logoUrl: matchingTeam.logo,
    teamStyle: teamColors,
  };
  return team;
}

// export function adaptToAllTeamsForSeason {
//     return team;
// }
