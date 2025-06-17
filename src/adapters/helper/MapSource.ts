import type {
  Last5GamesEntity,
  RegularSeasonOrPlayoffs1,
} from "../../types/api/PlayerLandingApi";
import type { SkaterStatLine } from "../../types/view/SkaterStats";
import { calculateValuePer60 } from "../../utils/helpers/SkaterStatHelpers";

export function mapCareerStatSourceToStatLine(
  source: RegularSeasonOrPlayoffs1
): SkaterStatLine {
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
    goalsPer60: calculateValuePer60(
      source.avgToi!,
      source.goals!,
      source.gamesPlayed!
    ),
    assistsPer60: calculateValuePer60(
      source.avgToi!,
      source.assists!,
      source.gamesPlayed!
    ),
    pointsPer60: calculateValuePer60(
      source.avgToi!,
      source.points!,
      source.gamesPlayed!
    ),
    shotsPer60: calculateValuePer60(
      source.avgToi!,
      source.shots!,
      source.gamesPlayed!
    ),
    // TODO: Add blocks, blockPer60 when available
    blockedShots: 0,
    blockPer60: 0,
  };
}

export function mapLast5GamesSourceToStatLine(
  source: Last5GamesEntity[]
): SkaterStatLine {
  return source.reduce<SkaterStatLine>(
    (acc, game) => {
      acc.goals += game.goals ?? 0;
      acc.assists += game.assists ?? 0;
      acc.points += game.points ?? 0;
      acc.ppGoals += game.powerPlayGoals ?? 0;
    //   acc.ppPoints ?? 0;
      acc.pim += game.pim ?? 0;
      acc.plusMinus += game.plusMinus ?? 0;
      acc.shotsOnGoal += game.shots ?? 0;
      acc.shortHandedGoals += game.shorthandedGoals ?? 0;
    //   acc.shortHandedPoints ?? 0;
    //   acc.shootingPct ?? 0;
    //   acc.faceOffPct ?? 0;
    //   acc.gameWinningGoals ?? 0;
    //   acc.otGoals ?? 0;
    //   acc.blockedShots ?? 0
    //   acc.timeOnIce ?? "";
      return acc;
    },
    {
      goals: 0,
      assists: 0,
      points: 0,
      ppGoals: 0,
      ppPoints: 0,
      pim: 0,
      plusMinus: 0,
      shotsOnGoal: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shootingPct: 0,
      faceOffPct: 0,
      gameWinningGoals: 0,
      otGoals: 0,
      timeOnIce: "",
      blockedShots: 0,
    }
  );
}
