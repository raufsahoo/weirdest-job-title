// Weirdest Job Title: one job title of 60 characters or fewer. Node 22, standard library only.
// Writes it to /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output locally).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const title = 'Regional Manager of Haunted Escalator Compliance';

// The gate takes 1 to 60 characters: fail loudly rather than enter an invalid title.
if ([...title].length > 60 || title.trim() === '') throw new Error(`title is ${[...title].length} characters`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), title);
