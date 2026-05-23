export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }
    return await response.json() as ShallowLocations;
}

  constructor() {}

  async fetchLocation(locationName: string): Promise<Location> {
    throw new Error("not implemented");
  }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
}

export type Location = {
  // @ts-ignore add properties here
};