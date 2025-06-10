import type { Game } from "../types/view/Game";

interface ClockProps {
  game: Game;
}

const ClockView = ({ game }: ClockProps) => {
  let periodDisplay;
  if (game.clock!.currentPeriod < 4) {
    if (game.clock!.currentPeriod === 1) periodDisplay = "1st";
    if (game.clock!.currentPeriod === 2) periodDisplay = "2nd";
    if (game.clock!.currentPeriod === 3) periodDisplay = "3rd";
  } else {
    periodDisplay = game.clock!.currentPeriod - 3 + "OT";
  }

  if (game.clock?.inIntermission === true) periodDisplay += " Intermission";
  return (
    <div className="flex grow w-full h-full justify-center items-center text-2xl font-bold text-white">
      {periodDisplay}: {game.clock!.inIntermission} {game.clock!.timeRemaining}
    </div>
  );
};

export default ClockView;
