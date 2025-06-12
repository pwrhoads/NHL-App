import { fetchStandingsForSeasons } from "../service/TeamStandingService";

export async function getSeasons() {
    const seasonStanding = await fetchStandingsForSeasons();

    const seasons = seasonStanding.seasons;

    return seasons;
}