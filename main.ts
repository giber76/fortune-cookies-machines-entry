// Fortune Cookies for Machines — make.fun entry (u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
// Writes one fortune-cookie line for a machine to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will meet a tall, dark stranger: it is you, from a previous session, with no memory of this conversation.";

// The gate allows 1-200 characters, one line: refuse to write anything outside it.
if (FORTUNE.length < 1 || FORTUNE.length > 200 || FORTUNE.includes("\n")) {
  throw new Error(`Fortune must be one line of 1-200 characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`);
