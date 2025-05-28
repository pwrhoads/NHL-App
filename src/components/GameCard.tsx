import React from "react";
import TeamLogo from "./TeamLogo";
import type { Game } from "../types/Game";
import Score from "./Score";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="flex flex-col w-75 h-100 rounded-lg border">
      <div className="flex w-full h-[50%] rounded-t-lg border">
        <TeamLogo isHomeTeam={false} logoUrl={game.awayTeam.logoUrl} />
        <TeamLogo isHomeTeam={true} logoUrl={game.homeTeam.logoUrl} />
      </div>
      <div className="flex w-full h-[20%] border"></div>
      <div className="flex grow w-full h-30 rounded-b-lg border">
        <Score isFuture={false} isHomeTeam={false} awayScore={game.awayScore} />
        <Score isFuture={false} isHomeTeam={true} homeScore={game.homeScore} />
      </div>
    </div>
  );
};

export default GameCard;
