//import { useEffect } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import { getGamesToday } from "./utils/GetGames";
import { getClockFromGame } from "./utils/GetClock";

const games = await getGamesToday();
for (const game of games) {
  const clock = await getClockFromGame(game);
  game.clock = clock;
  console.log(game.gameState);
}

function App() {
  return (
    <div>
      {games.map((game) => (
        <GameCard key={game.id} game={game} clock={game.clock!} />
      ))}
      ;
    </div>
  );
}

export default App;
