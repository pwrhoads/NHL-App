import React from "react";
import TeamLogo from "./TeamLogo";
import type { TeamInfo } from "../types/view/TeamStats";

interface TeamCardProps {
  team: TeamInfo;
}

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ backgroundColor: team.teamStyle.primary }}
    >
      <TeamLogo logoUrl={team.logoUrl} />
      <div className="flex text-white">{team.teamFullName}</div>
    </div>
  );
};

export default TeamCard;
