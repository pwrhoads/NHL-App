import React, { useEffect, useState } from "react";
import type { GoalieStats } from "../types/api/GoalieStats";
import { FetchGoalieStatLeadersNow } from "../service/GoalieStatService";

const TestComponent: React.FC = () => {
  const [goalieStats, setGoalieStats] = useState<GoalieStats | null>(null);

  useEffect(() => {
    async function loadStats() {
      const result = await FetchGoalieStatLeadersNow();
      console.log("Result from API", result);
      console.log("First Item:", result[0]);
      setGoalieStats(result[0]);
    }

    loadStats();
  }, []);

  if (!goalieStats) return <div>Loading...</div>;

  if (!goalieStats.wins || goalieStats.wins.length === 0)
    return <div>No wins data found</div>;

  const firstGoalieFirstName =
    goalieStats.wins?.[0].firstName.default ?? "Unknown";

  return <div>{firstGoalieFirstName}</div>;
};

export default TestComponent;
