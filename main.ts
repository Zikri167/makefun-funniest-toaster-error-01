import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "ERROR: THE BREAD ASKED ME NOT TO HEAT IT. I RESPECT ITS WISHES.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${chars.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
