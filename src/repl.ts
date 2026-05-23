import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(word => word !== "");
}

export async function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on('line', async (input: string) => {
    const line = cleanInput(input);
    if (line.length === 0) {
      state.readline.prompt();
      return;
    }
    if (line[0] in state.commands) {
      try {
        await state.commands[line[0]].callback(state);
      } catch (error) {
        console.error("Error occurred while executing command:", error);
      }
    } else {
      console.log(`Unknown command:`);
    }
    state.readline.prompt();
  });
}