import { State } from "./state.js";
import { ShallowLocations } from "./pokeapi.js";

export async function commandMap(state: State) {
    const locations: ShallowLocations = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = locations.next || undefined;
    state.prevLocationsURL = locations.previous || undefined;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}