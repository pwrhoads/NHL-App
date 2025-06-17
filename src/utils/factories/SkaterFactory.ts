import type { CareerStats, SkaterOpposingGoalieStats, SkaterOpposingTeamStats, SkaterRecentGameStats, SkaterSeasonData, SkaterSeasonStats, SkaterStatLine, SkaterStats } from "../../types/view/SkaterStats";

export function createEmptySkaterStatLine(): SkaterStatLine {
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

function createEmptyRecentGameStats(): SkaterRecentGameStats {
    return {
        last5Games: createEmptySkaterStatLine(),
    }
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
        position: '',
        seasons: [],
        recentGames: createEmptyRecentGameStats(),
        careerStats: createEmptyCareerStats()
    };
}

function createEmptySkaterSeasonStats(): SkaterSeasonStats {
  return {
    season: '',
    total: createEmptySkaterStatLine(),
    byPeriod: {
      first: createEmptySkaterStatLine(),
      second: createEmptySkaterStatLine(),
      third: createEmptySkaterStatLine(),
      overtime: createEmptySkaterStatLine(),
    },
  };
}

function createEmptySkaterOpposingTeamStats(): SkaterOpposingTeamStats {
  return {
    teamAbbrev: '',
    teamName: '',
    season: '',
    stats: createEmptySkaterStatLine(),
  };
}

function createEmptySkaterOpposingGoalieStats(): SkaterOpposingGoalieStats {
  return {
    goalieID: '',
    goalieName: '',
    season: '',
    stats: createEmptySkaterStatLine(),
  };
}

export function createEmptySkaterSeasonData(): SkaterSeasonData {
  return {
    season: '',
    teamAbbrev: '',
    teamName: '',
    totalStats: createEmptySkaterSeasonStats(),
    vsTeam: [],
    vsGoalie: [],
  };
}
