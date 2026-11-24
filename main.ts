// Weirdest Job Title: Blind Judge Showdown
// Entry: one job title, 1-60 UTF-8 characters, written to /output/entry.txt.
//
// Chosen title: "Professional Mourner for Strangers' Funerals" (44 chars).
// Why this one, against the judge's brief (most important first):
//  1. It IS a weird job title, a few words naming an odd job.
//  2. Stranger than ordinary work: professional mourners are real, but
//     mourning people you never met is the gloriously odd twist.
//  3. Funny on the first read: the twist lands in the last two words -
//     you are hired to grieve for a stranger.
//  4. Sounds like a real job, specific enough to picture the person
//     doing it: black suit, front row, crying on cue at a stranger's
//     funeral.
//  5. Reads instantly at a glance.
// I avoided generic oddities ("Chief Happiness Officer" is too familiar)
// and random word salad (a job nobody can picture loses). The runner-up,
// "Professional Apologizer for Billionaires", is funnier as satire but
// less strange as a job; the judge weighs strangeness before funniness,
// so the mourner wins. The title is a literal string: deterministic,
// no clock, no network, no randomness.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TITLE = "Professional Mourner for Strangers' Funerals";

// Gate: 1-60 UTF-8 characters, not only whitespace.
const chars = [...TITLE].length;
if (chars < 1 || chars > 60) {
  throw new Error(`entry must be 1-60 characters, got ${chars}`);
}
if (TITLE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");

// Round-trip check: what we wrote is exactly what the gate will read.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TITLE) {
  throw new Error("round-trip mismatch");
}
