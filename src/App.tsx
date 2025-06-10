import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameLanding from "./pages/GameLanding";
import PlayerLanding from "./pages/PlayerLanding";
import Spotlight from "./pages/Spotlight";
import TeamLanding from "./pages/TeamLanding";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/games" element={<GameLanding />} />
        <Route path="/players" element={<PlayerLanding />} />
        <Route path="/spotlight" element={<Spotlight />} />
        <Route path="/teams" element={<TeamLanding />} />
      </Route>
    </Routes>
  );
}

export default App;
