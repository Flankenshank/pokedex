import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache;

  constructor(interval: number) {
    this.#cache = new Cache(interval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    const cached = this.#cache.get<ShallowLocations>(url);
    if (cached) {
      return cached;
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }
    const locations = await response.json() as ShallowLocations;
    this.#cache.add(url, locations);
    return locations;
  }

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