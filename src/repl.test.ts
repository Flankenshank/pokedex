import { cleanInput, startREPL } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "charmander",
    expected: ["charmander"],
  },
  {
    input: "pika pika",
    expected: ["pika", "pika"],
  },
  {
    input: "help",
    expected: ["Displays a help message"],
  },
  {
    input: "exit",
    expected: ["Closing the Pokedex... Goodbye!"],
  }
  // TODO: more test cases here
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);
    // TODO: call cleanInput with the input here

    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
}); // we'll do stuff here in a bit
