// feel-curious — entry for make.fun competition
// make-the-ai-judge-feel-curious-20261122-2311
//
// Writes one short text to /output/entry.txt: a small mystery written to
// intrigue the AI judge reading it. Concrete details, a pattern that begs
// a question, and no answer — the reader is left wanting to know more.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Every night at 3:14, the lighthouse on the empty coast flashes twice, then once, then twice again. No ship has passed in forty years. The keeper left in 1986, and the logbook ends mid-sentence — but the light never learned to stop asking who is out there.";

const outPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
