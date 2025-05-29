//import { useEffect } from "react";
import React from "react";
import "./App.css";
import TestComponent from "./_test/TestComponent";

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
      <TestComponent />
    </div>
    // <div className="App">
    //   <h1>NHL Scoreboard</h1>
    //   <TodayGames />
    // </div>
  );
}

export default App;
