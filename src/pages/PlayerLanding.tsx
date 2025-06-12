import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import type { PlayerSearch } from "../types/api/PlayerSearchApi";
import { fetchPlayerSearch } from "../service/PlayerSearchService";

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
            const exactMatch = data.find(
              (player) => player.name.toLowerCase() === searchTerm.toLowerCase()
            );
            setPlayers(exactMatch ? [exactMatch] : data);
          } else {
            setPlayers(data || []);
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
    <div className="p-4 w-full">
      <SearchBar onSearch={handleSearch} placeholder="Search For Player..." />
      {searchTerm && <p>Searching for: {searchTerm}</p>}
      {error && <p>{error}</p>}

      <ul className="mt-4 space-y-2">
        {players.map((player) => (
          <li key={player.playerId} className="border p-2 rounded">
            {player.name} ({player.lastTeamAbbrev})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerLanding;
