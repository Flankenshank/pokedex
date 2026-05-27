import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { CLICommand } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL?: string;
    prevLocationsURL?: string;
    interval: number;
}

export function initState(): State {
    const interval = 600000;
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    return {
        readline,
        commands: getCommands(),
        pokeapi: new PokeAPI(interval),
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
        interval: interval
    };
}  