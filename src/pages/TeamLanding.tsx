import { useEffect, useState } from "react";
import type { TeamInfo } from "../types/view/TeamStats";
import { getAllTeamsForYear } from "../utils/GetTeam";
//import { useNavigate } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import { sortTeamsByPlace } from "../utils/sorting/SortTeam";

const TeamLanding = () => {
  const [teams, setTeams] = useState<TeamInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      const teamsData = await getAllTeamsForYear();
      const sortedTeams = sortTeamsByPlace(teamsData);

      setTeams(sortedTeams);
      setLoading(false);
    };

    fetchTeams();
  }, []);

  //const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        teams.map((team) => <TeamCard key={team.id} team={team} />)
      )}
    </div>
  );
};

export default TeamLanding;
