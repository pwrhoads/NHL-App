//Core skater information
export interface SkaterInfo {
    id: string;
    fName: string;
    lName: string;
    fullName: string
    currentTeamName: string;
    currentTeamAbbrev: string;
    currentSweaterNo: number;
    mugshotUrl: string;
}
//Basic stat structure
export interface SkaterStatLine {
    goals: number;
    assists: number;
    points: number;
    ppGoals: number;
    ppPoints: number;
    pim: number;
    plusMinus: number;
    shotsOnGoal: number;
    shortHandedGoals: number;
    shortHandedPoints: number;
    shootingPct: number;
    faceOffPct: number;
    gameWinningGoals: number;
    otGoals: number;
    gamesPlayed: number;
    timeOnIce: string;
    blockedShots: number;
    goalsPer60: number;
    assistsPer60: number;
    pointsPer60: number;
    shotsPer60: number;
    blockPer60: number;
}
//Core stats for a given season
export interface SkaterSeasonStats {
    season: string; //e.g. '20242025'
    total: SkaterStatLine; //G, A, P, SOG, Block, SHG, and PIM for a given season

    byPeriod: { //G, A, P, SOG per period for a given season
        first: SkaterStatLine;
        second: SkaterStatLine;
        third: SkaterStatLine;
        overtime: SkaterStatLine;
    }

}
//Stats against a given team in a given season
export interface SkaterOpposingTeamStats {
    teamAbbrev: string;
    teamName: string;
    season: string;
    stats: SkaterStatLine;
}
//Stats against a given goalie in a given season
export interface SkaterOpposingGoalieStats {
    goalieID: string;
    goalieName: string;
    season: string;
    stats: SkaterStatLine;
}
//Stats in the last 5/10 games
export interface SkaterRecentGameStats {
    last5Games: SkaterStatLine;
    last10Games: SkaterStatLine
}
//Full stats for a given season
export interface SkaterSeasonData {
    season: string;
    teamAbbrev: string;
    teamName: string;
    totalStats: SkaterSeasonStats;
    vsTeam:  SkaterOpposingTeamStats[];
    vsGoalie: SkaterOpposingGoalieStats[];
    recentGames: SkaterRecentGameStats;
}

export interface CareerStats {
    regSeason: SkaterStatLine;
    playOffs: SkaterStatLine;
    combined: SkaterStatLine;
}
//Full player record across all seasons
export interface SkaterStats extends SkaterInfo {
    seasons: SkaterSeasonData[];
    careerStats: CareerStats;
}