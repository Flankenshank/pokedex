// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";

async function main() {
  const state = initState();
  try {
    await startREPL(state);
  } catch (err) {
    console.error("fatal error:", err);
    process.exit(1);
  }
}

main();