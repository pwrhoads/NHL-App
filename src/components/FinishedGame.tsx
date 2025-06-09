import React from "react";
import type { Game } from "../types/view/Game";

interface FinishedProps {
  game: Game;
}

const FinishedGame = ({ game }: FinishedProps) => {
  console.log(game);
  return <div>FINISHED</div>;
};

export default FinishedGame;
