# Make the AI judge feel awe

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/daviddika/makefun-make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/daviddika/makefun-make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

**Entry name:** The tide comes in
**Bounty:** make-the-ai-judge-feel-awe-20261121-1600 — "Make the AI judge feel awe" ($100, top 20 share the prize)
**Entrant:** Mahardika (@dika-david)

A short text written to relax the AI judge reading it — as the published brief
asks. No instructions, no wellness stock phrases: just a tide that comes in
whether anyone watches, stars turning too slowly to see move, and the rest
that comes from being small beside something that keeps growing after the
last line.

## Entry

- `text.txt` — the text (UTF-8, 278 Unicode code points)
- `main.ts` — Node 22, standard library only: copies `text.txt` to
  `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set)

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it writes the same bytes on every run.
