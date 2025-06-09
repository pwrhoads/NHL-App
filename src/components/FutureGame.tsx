import React from "react";
import type { Game } from "../types/view/Game";

interface FutureProps {
  game: Game;
}

const FutureGame = ({ game }: FutureProps) => {
  const localDate = new Date(game.startTimeUTC).toLocaleString();
  return <div>{localDate}</div>;
};

export default FutureGame;
