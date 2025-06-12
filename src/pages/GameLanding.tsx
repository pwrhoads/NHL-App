import { useEffect, useState } from "react";
import { getGamesForDate, getGamesToday } from "../utils/GetGames";
import { getClockFromGame } from "../utils/GetClock";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import type { Game } from "../types/view/Game";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import DatePicker from "../components/DatePicker";

const GameLanding = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  useEffect(() => {
    const fetchGames = async () => {
      let gamesForDate = [];

      if (selectedDate.isSame(dayjs(), "day")) {
        gamesForDate = await getGamesToday();
      } else {
        const formattedDate = selectedDate.format("YYYY-MM-DD");
        gamesForDate = await getGamesForDate(formattedDate);
      }

      for (const game of gamesForDate) {
        if (game.gameState === "LIVE") {
          const clock = await getClockFromGame(game);
          game.clock = clock;
        }
      }
      setGames(gamesForDate);
      setLoading(false);
    };

    fetchGames();
  }, [selectedDate]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <div className="flex items-center justify-center">
        <DatePicker
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : games.length === 0 ? (
          <p className="font-bold text-xl">No Games on this Date</p>
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
