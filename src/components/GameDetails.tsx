import type { Game } from "../types/view/Game";
import ClockView from "./ClockView";
import FinishedGame from "./FinishedGame";
import FutureGame from "./FutureGame";

interface GameDetailProps {
  game: Game;
}

const GameDetails = ({ game }: GameDetailProps) => {
  //const localDate = new Date(game.startTimeUTC).toLocaleString();
  return (
    <div className="flex flex-wrap grow w-full h-full items-center justify-center">
      {game.gameState === "LIVE" ? (
        <ClockView game={game} />
      ) : game.gameState === "OFF" ? (
        <FinishedGame game={game} />
      ) : (
        <FutureGame game={game} />
      )}
    </div>
  );
};

export default GameDetails;
