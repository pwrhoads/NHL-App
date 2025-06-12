import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameLanding from "./pages/GameLanding";
import PlayerLanding from "./pages/PlayerLanding";
import Spotlight from "./pages/Spotlight";
import TeamLanding from "./pages/TeamLanding";
import Layout from "./components/Layout";
import GamePage from "./pages/GamePage";
import TeamPage from "./pages/TeamPage";
import PlayerPage from "./pages/PlayerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/games" element={<GameLanding />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/players" element={<PlayerLanding />} />
        <Route path="/players/:id" element={<PlayerPage />} />
        <Route path="/spotlight" element={<Spotlight />} />
        <Route path="/teams" element={<TeamLanding />} />
        <Route path="/teams/:id" element={<TeamPage />} />
      </Route>
    </Routes>
  );
}

export default App;
