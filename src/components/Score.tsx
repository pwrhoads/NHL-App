import React from "react";

interface ScoreComponentProps {
  score: number | undefined;
}

const Score = ({ score }: ScoreComponentProps) => {
  return <div className="w-[50%] h-full border content-center">{score}</div>;
};

export default Score;
