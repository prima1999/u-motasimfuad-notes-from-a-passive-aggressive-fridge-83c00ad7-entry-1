import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One passive-aggressive note from a smart fridge to its owner.
// Single line, under 200 characters, written to entry.txt.
const NOTE_LINES = [
  "You left my door open for 47 seconds at 2:14.",
  "The ice maker counted.",
  "The yogurt saw everything.",
  "I have filed it under 'midnight decisions,'",
  "beside the takeout from a restaurant that closed in 2019.",
];

const NOTE = NOTE_LINES.join(" ");
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), NOTE, "utf8");
