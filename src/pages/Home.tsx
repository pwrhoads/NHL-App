import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import { getGamesToday } from "../utils/GetGames";
import { getClockFromGame } from "../utils/GetClock";
import type { Game } from "../types/view/Game";

// const games = await getGamesToday();
// for (const game of games) {
//   if (game.gameState != "FUT") {
//     const clock = await getClockFromGame(game);
//     game.clock = clock;
//   }
// }

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const todayGames = await getGamesToday();

      for (const game of todayGames) {
        if (game.gameState !== "FUT") {
          const clock = await getClockFromGame(game);
          game.clock = clock;
        }
      }
      console.log(todayGames);
      setGames(todayGames);
      setLoading(false);
    };

    fetchGames();
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <Header />
      <div className="flex h-screen w-screen items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          games.map((game) => <GameCard key={game.id} game={game} />)
        )}
      </div>
    </div>
  );
};

export default Home;
