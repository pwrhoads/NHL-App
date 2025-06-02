import React, { useEffect, useState } from "react";
import type { GoalieStats } from "../types/api/GoalieStatsApi";
import { FetchGoalieStatLeadersBySeasonAndGameType } from "../service/GoalieStatService";

const TestComponent: React.FC = () => {
  const [goalieStats, setGoalieStats] = useState<GoalieStats | null>(null);

  const season = 20242025;
  const gameType = 2;
  //const categories = [""];
  const limit = -1;

  useEffect(() => {
    async function loadStats() {
      const result = await FetchGoalieStatLeadersBySeasonAndGameType({
        season,
        gameType,
        limit,
      });
      console.log(result);
      setGoalieStats(result);
    }

    loadStats();
  }, []);

  if (!goalieStats) return <div>Loading...</div>;

  if (!goalieStats.wins || goalieStats.wins.length === 0)
    return <div>No wins data found</div>;

  return (
    <ul>
      {goalieStats.wins?.map((goalieWins) => (
        <li key={goalieWins.id}>
          {goalieWins.firstName.default} {goalieWins.lastName.default} -{" "}
          {goalieWins.teamName.default} ( {goalieWins.value} Wins)
        </li>
      ))}
    </ul>
  );
};

export default TestComponent;
