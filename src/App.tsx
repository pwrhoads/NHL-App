//import { useEffect } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import { getGamesToday } from "./utils/GetGames";
import { getClockFromGame } from "./utils/GetClock";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import GameLanding from "./pages/GameLanding";
import PlayerLanding from "./pages/PlayerLanding";
import Spotlight from "./pages/Spotlight";
import TeamLanding from "./pages/TeamLanding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GameLanding />} />
      <Route path="/players" element={<PlayerLanding />} />
      <Route path="/spotlight" element={<Spotlight />} />
      <Route path="/teams" element={<TeamLanding />} />
    </Routes>
  );
}

export default App;
