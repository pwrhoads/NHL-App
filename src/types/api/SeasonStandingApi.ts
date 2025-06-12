export interface SeasonStanding {
    currentDate: string;
    seasons: SeasonEntity[];
}

export interface SeasonEntity {
    id: string;
    conferencesInUse: boolean;
    divisionsInUse: boolean;
    pointForOTlossInUse: boolean;
    regulationWinsInUse: boolean;
    rowInUse: boolean;
    standingsEnd: string;
    standingsStart: string;
    tiesInUse: boolean;
    wildcardInUse: boolean;
}