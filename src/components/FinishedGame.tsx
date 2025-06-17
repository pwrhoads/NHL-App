import type { Game } from "../types/view/Game";

interface FinishedProps {
  game?: Game;
}

const FinishedGame = ({ game }: FinishedProps) => {
  console.log(game);
  return <div className="text-white">FINISHED</div>;
};

export default FinishedGame;
