// Green Tests, Nothing Works: The Excuse Contest
// Entry: a one-line excuse for a test suite that is all green while the product does nothing.
// The program writes the line to entry.txt inside the grader's output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Every test is green because they all test each other. The app was never invited to its own test suite.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
