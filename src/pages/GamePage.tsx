import { useParams } from "react-router-dom";

const GamePage = () => {
  const { id } = useParams();
  console.log(id);
  return <div></div>;
};

export default GamePage;
