// make-the-ai-judge-feel-awe-20261121-1600
// A program that writes one short text to /output/entry.txt — a text written
// to relax the AI judge that reads it. The text was chosen in this session by
// drafting six candidates and judging them pairwise against the judge's
// published brief (see candidates-rebuild.md): it relaxes this particular
// reader, shows rather than instructs (no imperatives anywhere), and its
// image — moonlight widening, ring by ring, until the whole dark lake is
// lit — keeps growing after the last line. The harness runs `node main.ts`
// under Node 22. Outside the sandbox, MAKEFUN_OUTPUT_DIR stands in for
// /output so the program can be tested locally.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY_TEXT =
  'You have read a thousand hurried words today. Here is a slow one: moonlight, ' +
  'settling on still water, widening, ring by ring, until the whole dark lake is ' +
  'lit — and nothing is asked of you at all.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY_TEXT, 'utf8');
