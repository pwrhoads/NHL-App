import { useState } from "react";
import SearchBar from "../components/SearchBar";

const PlayerLanding = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} placeholder="Search For Player..." />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
};

export default PlayerLanding;
