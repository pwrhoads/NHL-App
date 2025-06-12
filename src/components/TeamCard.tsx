import TeamLogo from "./TeamLogo";
import type { TeamInfo } from "../types/view/TeamStats";
import { useNavigate } from "react-router-dom";

interface TeamCardProps {
  team: TeamInfo;
}

const TeamCard = ({ team }: TeamCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/teams/${team.id}`, {
      state: {
        title: `${team.teamFullName}`,
      },
    });
  };

  return (
    <div
      className="flex flex-col items-center rounded-2xl border cursor-pointer"
      style={{ backgroundColor: team.teamStyle.primary }}
      onClick={handleClick}
    >
      <TeamLogo logoUrl={team.logoUrl} />
      <div className="flex text-white">{team.teamFullName}</div>
    </div>
  );
};

export default TeamCard;
