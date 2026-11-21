// make.fun make-the-ai-judge-feel-awe-20261121-1600 entry (Node 22, standard library only).
// The text is text.txt beside this file: a short text written to relax the AI
// judge reading it — a slow tide, stars turning too slowly to see, and the rest
// of being small. The program copies it to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic, no network: it writes the same bytes on every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./text.txt', import.meta.url), join(outDir, 'entry.txt'));
