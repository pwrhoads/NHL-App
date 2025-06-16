import type { RegularSeasonOrPlayoffs1 } from "../../types/api/PlayerLandingApi";
import type { SkaterStatLine } from "../../types/view/SkaterStats";
import { calculateValuePer60 } from "../../utils/helpers/SkaterStatHelpers";

export function mapCareerStatSourceToStatLine(source: RegularSeasonOrPlayoffs1): SkaterStatLine {
    return {
        goals: source.goals!,
        assists: source.assists!,
        points: source.points!,
        ppGoals: source.powerPlayGoals!,
        ppPoints: source.powerPlayPoints!,
        pim: source.pim!,
        plusMinus: source.plusMinus!,
        shotsOnGoal: source.shots!,
        shortHandedGoals: source.shorthandedGoals!,
        shortHandedPoints: source.shorthandedPoints!,
        shootingPct: source.shootingPctg!,
        faceOffPct: source.faceoffWinningPctg!,
        gameWinningGoals: source.gameWinningGoals!,
        otGoals: source.otGoals!,
        gamesPlayed: source.gamesPlayed!,
        timeOnIce: source.avgToi!,
        goalsPer60: calculateValuePer60(source.avgToi!, source.goals!, source.gamesPlayed!),
        assistsPer60: calculateValuePer60(source.avgToi!, source.assists!, source.gamesPlayed!),
        pointsPer60: calculateValuePer60(source.avgToi!, source.points!, source.gamesPlayed!),
        shotsPer60: calculateValuePer60(source.avgToi!, source.shots!, source.gamesPlayed!),
        // TODO: Add blocks, blockPer60 when available
        blockedShots: 0,
        blockPer60: 0,
    };
}