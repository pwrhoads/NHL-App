import { useParams } from "react-router-dom";

const TeamPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div></div>;
};

export default TeamPage;
