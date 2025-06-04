import React from "react";
import TeamLogo from "./TeamLogo";
import type { Game } from "../types/view/Game";
import Score from "./Score";
import GameDetails from "./GameDetails";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="flex flex-col w-75 h-100 rounded-lg border">
      <div className="flex w-full h-[30%] rounded-t-lg">
        <TeamLogo logoUrl={game.awayTeam.logoUrl} />
        <TeamLogo logoUrl={game.homeTeam.logoUrl} />
      </div>
      <div className="flex grow flex-col w-full h-[20%] border">
        <GameDetails game={game} />
      </div>
      <div className="flex grow w-full h-[50%] rounded-b-lg border">
        <Score score={game.awayScore} />
        <Score score={game.homeScore} />
      </div>
    </div>
  );
};

export default GameCard;
