import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(word => word !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on('line', (input: string) => {
    const line = cleanInput(input);
    if (line.length === 0) {
      rl.prompt();
      return;
    }
    if (line[0] in getCommands()) {
      getCommands()[line[0]].callback(getCommands());
    } else {
      console.log(`Unknown command:`);
    }
    rl.prompt();
  });
}