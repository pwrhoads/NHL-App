import { useParams } from "react-router-dom";

const PlayerPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div></div>;
};

export default PlayerPage;
