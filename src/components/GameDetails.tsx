import React from "react";
import type { Game } from "../types/view/Game";

interface GameDetailProps {
  game: Game;
}

const GameDetails = ({ game }: GameDetailProps) => {
  const localDate = new Date(game.startTimeUTC).toLocaleString();
  return (
    <div className="flex flex-wrap grow w-full h-full content-center">
      <div className="flex flex-wrap h-full w-full justify-center items-center">
        {game.awayTeam.teamPlace} {game.awayTeam.teamName} @{" "}
        {game.homeTeam.teamPlace} {game.homeTeam.teamName} <br />{" "}
        {game.gameState === "FUT" ? (
          <span>Game Start: {localDate}</span>
        ) : (
          <span>NA</span>
        )}
      </div>
    </div>
  );
};

export default GameDetails;
