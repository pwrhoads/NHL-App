import type { SkaterStatLine } from "../../types/view/SkaterStats";
import { calculateCareerShootingPct, calculateCareerToiAvg, calculateValuePer60 } from "../../utils/helpers/SkaterStatHelpers";

export function combineStatLines(a: SkaterStatLine, b: SkaterStatLine): SkaterStatLine {
    const combinedGames = a.gamesPlayed! + b.gamesPlayed!;
    const combinedTime = calculateCareerToiAvg(a.timeOnIce, b.timeOnIce, a.gamesPlayed!, b.gamesPlayed!)
    const combinedGoals = a.goals + b.goals;
    const combinedAssists = a.assists + b.assists;
    const combinedPoints = a.points + b.points;
    const combinedShots = a.shotsOnGoal + b.shotsOnGoal;

    return {
        goals: a.goals + b.goals,
        assists: a.assists + b.assists,
        points: a.points + b.points,
        ppGoals: a.ppGoals + b.ppGoals,
        ppPoints: a.ppPoints + b.ppPoints,
        pim: a.pim + b.pim,
        plusMinus: a.plusMinus + b.plusMinus,
        shotsOnGoal: a.shotsOnGoal + b.shotsOnGoal,
        shortHandedGoals: a.shortHandedGoals + b.shortHandedGoals,
        shortHandedPoints: a.shortHandedPoints + b.shortHandedPoints,
        shootingPct: calculateCareerShootingPct(a.goals, b.goals, a.shotsOnGoal, b.shotsOnGoal),
        faceOffPct: 0, // TODO
        gameWinningGoals: a.gameWinningGoals + b.gameWinningGoals,
        otGoals: a.otGoals + b.otGoals,
        gamesPlayed: combinedGames,
        timeOnIce: combinedTime,
        goalsPer60: calculateValuePer60(combinedTime, combinedGoals, combinedGames),
        assistsPer60: calculateValuePer60(combinedTime, combinedAssists, combinedGames),
        pointsPer60: calculateValuePer60(combinedTime, combinedPoints, combinedGames),
        shotsPer60: calculateValuePer60(combinedTime, combinedShots, combinedGames),
        //TODO
        blockedShots: 0,
        blockPer60: 0,
    };
}