import { getAllTeamsForYear } from "../utils/GetTeam";
import type { TeamInfo } from "../types/view/TeamStats";
import { useEffect, useState } from "react";
import { sortTeamsByPlace } from "../utils/sorting/SortTeam";

const TestComponent2 = () => {
  const [teams, setTeams] = useState<TeamInfo[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      const teamsData = await getAllTeamsForYear("20242025");
      const sortedTeams = sortTeamsByPlace(teamsData);
      setTeams(sortedTeams);
    }
    fetchTeams();
  }, []);

  return (
    <div>
      {teams.map((team) => (
        <div key={team.id}>{team.teamAbbrev}</div>
      ))}
    </div>
  );
};

export default TestComponent2;
