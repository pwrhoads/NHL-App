interface ScoreComponentProps {
  score: number | undefined;
}

const Score = ({ score }: ScoreComponentProps) => {
  return (
    <div className="w-[50%] h-full content-center font-bold text-xl text-white">
      {score}
    </div>
  );
};

export default Score;
