import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import type { PlayerSearch } from "../types/api/PlayerSearchApi";
import { fetchPlayerSearch } from "../service/PlayerSearchService";
import PlayerCard from "../components/PlayerCard";

const PlayerLanding = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, setPlayers] = useState<PlayerSearch[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setPlayers([]);
      setError(null);
      return;
    }

    let isCancelled = false;

    const fetchPlayers = async () => {
      setError(null);

      try {
        const data = await fetchPlayerSearch(searchTerm);
        if (!isCancelled) {
          if (data && data.length > 0) {
            const filtered = data.filter((player) =>
              player.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            setPlayers(filtered);
          } else {
            setPlayers([]);
          }
        }
      } catch (err) {
        if (!isCancelled) {
          console.error(err);
          setError("Failed to fetch players.");
          setPlayers([]);
        }
      }
    };
    fetchPlayers();

    return () => {
      isCancelled = true;
    };
  }, [searchTerm]);

  return (
    <div className="w-full flex flex-col px-4 items-center">
      <SearchBar onEnter={handleSearch} placeholder="Search For Player..." />
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {players.map((player) => (
          <PlayerCard key={player.playerId} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerLanding;
