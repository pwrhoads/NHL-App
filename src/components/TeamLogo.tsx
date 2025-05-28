import React from "react";

interface TeamLogoComponentProps {
  isHomeTeam: boolean;
  logoUrl: string;
}

const TeamLogo = ({ isHomeTeam, logoUrl }: TeamLogoComponentProps) => {
  return <div className="w-[50%] h-full border"></div>;
};

export default TeamLogo;
