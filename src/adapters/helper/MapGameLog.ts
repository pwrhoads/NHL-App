import type { GameLogEntity } from "../../types/api/PlayerGameLogApi";
import type { SkaterStatLine } from "../../types/view/SkaterStats";
import { createEmptySkaterStatLine } from "../../utils/factories/SkaterFactory";

export function mapGameLogToStatLine(gameLog: GameLogEntity[]): SkaterStatLine {
    const statLine = createEmptySkaterStatLine();
    statLine.gamesPlayed = gameLog.length;

    for (const game of gameLog) {
    statLine.goals += game.goals;
    statLine.assists += game.assists;
    statLine.points += game.points;
    statLine.ppGoals += game.powerPlayGoals;
    statLine.ppPoints += game.powerPlayPoints;
    statLine.pim += game.pim;
    statLine.plusMinus += game.plusMinus;
    statLine.shotsOnGoal += game.shots;
    statLine.shortHandedGoals += game.shorthandedGoals;
    statLine.shortHandedPoints += game.shorthandedPoints;
    statLine.gameWinningGoals += game.gameWinningGoals;
    statLine.otGoals += game.otGoals;
    }

    return statLine;

}