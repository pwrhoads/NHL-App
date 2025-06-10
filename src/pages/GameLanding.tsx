import { useEffect, useState } from "react";
import { getGamesToday } from "../utils/GetGames";
import { getClockFromGame } from "../utils/GetClock";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import type { Game } from "../types/view/Game";

const GameLanding = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const todayGames = await getGamesToday();

      for (const game of todayGames) {
        if (game.gameState === "LIVE") {
          const clock = await getClockFromGame(game);
          game.clock = clock;
        }
      }
      setGames(todayGames);
      setLoading(false);
    };

    fetchGames();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <div className="flex h-screen w-screen items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          games.map((game) => (
            <GameCard
              key={game.id}
              onClick={() => navigate("/games")}
              game={game}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameLanding;
