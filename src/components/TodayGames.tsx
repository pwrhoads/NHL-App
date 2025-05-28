// components/TodayGames.tsx

import React, { useEffect, useState } from "react";
import type { Game, ScheduleDayResponse } from "../types/NHLTypes";

const TodayGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // e.g., "2025-05-27"

    fetch(`/api/schedule/${today}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch NHL schedule");
        return res.json();
      })
      .then((data: ScheduleDayResponse) => {
        const todayData = data.gameWeek.find((day) => day.date === today);

        if (todayData?.games && Array.isArray(todayData.games)) {
          setGames(todayData.games);
          console.log("Today Data: ", todayData.games);
        } else {
          setGames([]);
          console.warn("No games found for today");
        }

        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading today’s NHL games...</p>;
  if (error) return <p>Error: {error}</p>;
  if (games.length === 0) return <p>No NHL games today.</p>;
  console.log("Games: ", games);

  return (
    <div>
      <h2>Today’s NHL Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <strong>{game.awayTeam.abbrev}</strong> ({game.awayTeam.score}) @{" "}
            <strong>{game.homeTeam.abbrev}</strong> ({game.homeTeam.score}) —{" "}
            <em>{game.gameState}</em>{" "}
            <span>
              (
              {new Date(game.startTimeUTC).toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })}
              )
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayGames;
