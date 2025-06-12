import type { PlayerSearch } from "../types/api/PlayerSearchApi";

const baseUrl: string = "https://search.d3.nhle.com/api/v1/search/player?culture=en-us&limit=5&q=";
const error: string = "Failed to fetch players";

export async function fetchPlayerSearch(query: string): Promise<PlayerSearch[]> {
    const res = await fetch(`${baseUrl}` + `${encodeURIComponent(query)}`)

    if (!res.ok) throw new Error(error);

    return res.json();
}