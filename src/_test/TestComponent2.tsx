import React from "react";
import { getGamesToday } from "../utils/GetGames";

const games = await getGamesToday();

const TestComponent2 = () => {
  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.homeTeam.teamAbbrev}
            {" vs. "}
            {game.awayTeam.teamAbbrev} {game.homeScore}
            {" - "}
            {game.awayScore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent2;
