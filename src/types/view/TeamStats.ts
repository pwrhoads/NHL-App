//Core team information
export interface TeamInfo {
    id: string;
    teamName: string;
    teamPlace: string;
    teamAbbrev: string;
    teamFullName: string;
    logoUrl: string;
    teamStyle: TeamStyle;
    division?: string;
    conference?: string;
}

export interface TeamStyle {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    quaternary?: string;
}
export interface TeamRecord {
    season: string;
    wins: number;
    losses: number;
    otLosses: number;
    soLosses: number;
    gamesPlayed: number;
    gamesRemaining: number;
    points: number;
    homeWins: number;
    homeLosses: number;
    homeOTLosses: number;
    homeSOLosses: number;
    awayWins: number;
    awayLosses: number;
    awayOTLosses: number;
    awaySOLosses: number;
}
//Basic stat structure
export interface TeamStatLine {
    goalsFor: number;
    goalsAgainst: number;
    shgFor: number;
    shgAgainst: number;
    ppGoalsFor: number;
    ppGoalsAgainst: number;
}

//Core stats for a given season
export interface TeamSeasonStats {
    season: string; //e.g. '20242025'
    total: TeamStatLine; 
    record: TeamRecord;

    byPeriod: { 
        first: TeamStatLine;
        second: TeamStatLine;
        third: TeamStatLine;
        overtime: TeamStatLine;
    }
}
//Stats against a given team in a given season
export interface TeamOpposingTeamStats {
    teamAbbrev: string;
    teamName: string;
    season: string;
    stats: TeamStatLine;
    record: TeamRecord;
}
//Stats against a given goalie in a given season
export interface TeamOpposingGoalieStats {
    goalieID: string;
    goalieName: string;
    season: string;
    stats: TeamStatLine;
    record: TeamRecord;
}
//Stats in the last 5/10 games
export interface TeamRecentGameStats {
    last5Stats: TeamStatLine;
    last10Stats: TeamStatLine;
    last5Record: TeamRecord;
    last10Record: TeamRecord;
}
//Full stats for a given season
export interface TeamSeasonData {
    season: string;
    teamAbbrev: string;
    teamName: string;
    totalStats: TeamSeasonStats;
    record: TeamRecord;
    vsTeam:  TeamOpposingTeamStats[];
    vsGoalie: TeamOpposingGoalieStats[];
    recentGames: TeamRecentGameStats;
}
//Full player record across all seasons
export interface TeamStats extends TeamInfo {
    seasons: TeamSeasonData[];
}