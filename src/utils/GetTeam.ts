import { adaptToSingleTeamFromAbbrev } from "../adapters/TeamAdapter";
import { teamColors } from "../assets/teamColors";
import {
  fetchScheduleCalendarByDate,
  fetchScheduleCalendarNow,
} from "../service/ScheduleCalendarService";
import type { ScheduleCalendar } from "../types/api/ScheduleCalendar";
import type { TeamInfo, TeamStyle } from "../types/view/TeamStats";
import { getFirstOfYearForSeason } from "./DateFunctions";

export function getTeamStyle(teamAbbrev: string): TeamStyle {
  const colors = teamColors[teamAbbrev] || {};

  return {
    primary: colors["1"] || "#000000",
    secondary: colors["2"] || "#000000",
    tertiary: colors["3"] || "#000000",
    quaternary: colors["4"] || "#000000",
  };
}

export async function getAllTeamsForYear(season?: string): Promise<TeamInfo[]> {
  let sched: ScheduleCalendar;
  let date: string | undefined;

  if (!season) {
    sched = await fetchScheduleCalendarNow();
  } else {
    date = getFirstOfYearForSeason(season);
    sched = await fetchScheduleCalendarByDate({ date });
  }

  const rawTeams = await Promise.all(
    sched.teams?.map(async (t) => {
        if (date) {
            return await adaptToSingleTeamFromAbbrev(t.abbrev, date)
        }
        else {
            return await adaptToSingleTeamFromAbbrev(t.abbrev);}
      
    }) ?? []
  );

  const teams = rawTeams.filter((team): team is TeamInfo => team !== null)

  return teams;
}
