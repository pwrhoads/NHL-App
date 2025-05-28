//import { useEffect } from "react";
import React from "react";
import TodayGames from "./components/TodayGames";
import "./App.css";
import GameCard from "./components/GameCard";

function App() {
  // useEffect(() => {
  //   fetch("/api/scoreboard/now")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Network response was not ok");
  //       return res.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error("Fetch error:", err));
  // }, []);
  return (
    <div>
      <GameCard />
    </div>
    // <div className="App">
    //   <h1>NHL Scoreboard</h1>
    //   <TodayGames />
    // </div>
  );
}

export default App;
