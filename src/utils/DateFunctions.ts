export function getFirstOfYearForSeason(season: string): string {
    const secondYear = season.slice(4,8);
    return `${secondYear}-01-01`
}