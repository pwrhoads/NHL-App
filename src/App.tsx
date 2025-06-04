//import { useEffect } from "react";
import React from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import { getGamesToday } from "./utils/GetGames";

const games = await getGamesToday();

function App() {
  return (
    <div>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      ;
    </div>
  );
}

export default App;
