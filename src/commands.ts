import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { State } from "./state.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "Displays a help message",
        callback: commandHelp,
    },
    // can add more commands here
  };
}