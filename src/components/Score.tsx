import React from "react";

interface ScoreComponentProps {
  isFuture: boolean;
  isHomeTeam?: boolean;
  homeScore?: number;
  awayScore?: number;
}

const Score = ({
  isFuture,
  isHomeTeam,
  homeScore,
  awayScore,
}: ScoreComponentProps) => {
  return <div className="w-[50%] h-full border"></div>;
};

export default Score;
