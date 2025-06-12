import React from "react";
import type { Game } from "../types/view/Game";

interface FutureProps {
  game: Game;
}

const FutureGame = ({ game }: FutureProps) => {
  const date = new Date(game.startTimeUTC);

  const localDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const localTime = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const displayDate = `${localDate} at ${localTime}`;
  return (
    <div className="text-white">
      <div>
        {game.awayTeam.teamFullName} @ {game.homeTeam.teamFullName}
      </div>
      <div className="font-bold">Puck Drop:</div>
      <div>{displayDate}</div>
    </div>
  );
};

export default FutureGame;
