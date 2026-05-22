import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { CLICommand } from "./commands.js";

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
}

export function initState(): State {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return {
        readline,
        commands: getCommands(),
    };
}  