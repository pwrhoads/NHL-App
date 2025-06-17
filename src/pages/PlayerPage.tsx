import { useParams } from "react-router-dom";
import { useSkaterStats } from "../hooks/useSkaterStats";

const PlayerPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { data, loading, error } = useSkaterStats(id ?? "");

  if (!id) {
    return <div>Invalid player ID</div>;
  }

  if (loading) return <p>Loading skater stats...</p>;
  if (error) return <p>Error loading stats: {error.message}</p>;
  if (!data) return <p>No stats available.</p>;

  return (
    <div>
      <p>Team: {data.currentTeamAbbrev}</p>
      <p>Goals: {data.careerStats.combined.goals}</p>
      <p>{data.careerStats.combined.timeOnIce}</p>
      <p>{data.position}</p>
      <p>{data.recentGames.last5Games.assists}</p>
    </div>
  );
};

export default PlayerPage;
