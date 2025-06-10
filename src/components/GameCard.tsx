import TeamLogo from "./TeamLogo";
import type { Game } from "../types/view/Game";
import Score from "./Score";
import GameDetails from "./GameDetails";

interface GameCardProps {
  game: Game;
  onClick?: () => void | Promise<void>;
}

const GameCard = ({ game, onClick }: GameCardProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col w-75 h-75 rounded-lg border cursor-pointer"
      style={{
        background: `linear-gradient(to right, ${game.awayTeam.teamStyle.primary}, ${game.homeTeam.teamStyle.primary})`,
      }}
    >
      <div className="flex grow flex-col w-full h-[30%] border-b">
        <GameDetails game={game} />
      </div>
      <div className="flex w-full h-[50%] rounded-t-lg">
        <TeamLogo logoUrl={game.awayTeam.logoUrl} />
        <TeamLogo logoUrl={game.homeTeam.logoUrl} />
      </div>
      <div className="flex grow w-full h-[20%] rounded-b-lg">
        <Score score={game.awayScore} />
        <Score score={game.homeScore} />
      </div>
    </div>
  );
};

export default GameCard;
