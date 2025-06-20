import type { GamesEntity } from "../types/api/ScoreApi";
import type { Game } from "../types/view/Game";
import {adaptToSingleTeamFromAbbrev} from "./TeamAdapter";


//Populate Games Type from all games retrieved in ScoreApi.GamesEntity[]
export async function adaptToGames (games: GamesEntity [] | null): Promise<Game[]>{
    if (!games) return [];

    const gamePromises = games.map(async (game): Promise<Game> => {
    const home = game.homeTeam;
    const away = game.awayTeam;

    //TODO Need to pass a date to the adapt call otherwise it breaks for old teams.
    const homeTeam = await adaptToSingleTeamFromAbbrev(home.abbrev)

    const awayTeam = await adaptToSingleTeamFromAbbrev(away.abbrev)

    if (!homeTeam || !awayTeam) throw new Error(`Missing team info: ${!homeTeam ? home.abbrev : ""} ${!awayTeam ? away.abbrev : ""}`)
        return {
            id: game.id.toString(),
            homeTeam,
            awayTeam,
            startTimeUTC: game.startTimeUTC,
            gameType: game.gameType as 2 | 3,
            homeScore: home.score ?? 0,
            awayScore: away.score ?? 0,
            homeSOG: home.sog ?? 0,
            awaySOG: away.sog ?? 0,
            gameState: game.gameState,
        };
    }); 

    return await Promise.all(gamePromises)
}