import { useNavigate } from "react-router-dom";
import type { PlayerSearch } from "../types/api/PlayerSearchApi";
import PlayerPicture from "./PlayerPicture";

interface PlayerCardProps {
  player: PlayerSearch;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/players/${player.playerId}`, {
      state: {
        title: `${player.name}`,
      },
    });
  };

  console.log(player);
  return (
    <div
      className="flex flex-col w-75 h-125 rounded-lg border cursor-pointer"
      onClick={handleClick}
    >
      <PlayerPicture picUrl="https://assets.nhle.com/mugs/nhl/20242025/NSH/8476887.png" />
    </div>
  );
};

export default PlayerCard;
