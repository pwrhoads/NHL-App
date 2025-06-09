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
      {game.gameState === "FUT" ? (
        <FutureGame game={game} />
      ) : game.gameState === "OFF" ? (
        <FinishedGame game={game} />
      ) : (
        <ClockView game={game} />
      )}

      {/* <div className="flex flex-col flex-wrap h-full w-full justify-center items-center">
        {game.awayTeam.teamPlace} {game.awayTeam.teamName} @{" "}
        {game.homeTeam.teamPlace} {game.homeTeam.teamName} <br />{" "}
        {game.gameState === "FUT" ? (
          <span>Game Start: {localDate}</span>
        ) : (
          <span>NA</span>
        )}
      </div> */}
    </div>
  );
};

export default GameDetails;
