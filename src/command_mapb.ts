import { State } from "./state.js";
import { ShallowLocations } from "./pokeapi.js";

export async function commandMapB(state: State) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const locations: ShallowLocations = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = locations.next || undefined;
    state.prevLocationsURL = locations.previous || undefined;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}