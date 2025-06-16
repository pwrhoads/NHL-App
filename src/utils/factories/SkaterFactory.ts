import type { CareerStats, SkaterStatLine, SkaterStats } from "../../types/view/SkaterStats";

function createEmptySkaterStatLine(): SkaterStatLine {
  return {
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
    gamesPlayed: 0,
    timeOnIce: "",
    blockedShots: 0,
    goalsPer60: 0,
    assistsPer60: 0,
    pointsPer60: 0,
    shotsPer60: 0,
    blockPer60: 0,
  };
}

function createEmptyCareerStats(): CareerStats {
    return {
        regSeason: createEmptySkaterStatLine(),
        playOffs: createEmptySkaterStatLine(),
        combined: createEmptySkaterStatLine()
    };
}

export function createEmptySkaterStats(): SkaterStats {
    return {
        id: '',
        fName: '',
        lName: '',
        fullName: '',
        currentTeamName: '',
        currentTeamAbbrev: '',
        currentSweaterNo: 0,
        mugshotUrl: '',
        seasons: [],
        careerStats: createEmptyCareerStats()
    };
}
