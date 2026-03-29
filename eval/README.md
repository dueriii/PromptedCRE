# PromptedCRE Eval Loop

Self-improving loop for SKILL.md files. Inspired by [Karpathy's autoresearch](https://github.com/karpathy/autoresearch) — but instead of optimizing ML training code, it optimizes agent skill prompts for industrial CRE tenant representation.

## How It Works

```
┌──────────────────────────────────────────────┐
│  1. Read the target SKILL.md                 │
│  2. Simulate it against a fixed scenario     │
│  3. Score against a locked rubric (0-10)     │
│  4. Hypothesize ONE improvement              │
│  5. Rewrite the skill                        │
│  6. Re-score — keep if Δ ≥ 0.3, else revert │
│  7. Log the experiment                       │
│  8. Repeat                                   │
└──────────────────────────────────────────────┘
```

The rubric (`rubric.md`) is **locked** — the AI cannot modify it. This is the key constraint. The only way to raise the score is to actually make the skill better at industrial CRE tenant rep work.

## Files

| File | Purpose | Mutable by AI? |
|---|---|---|
| `rubric.md` | Scoring rubric — 5 dimensions, weighted average | **No** |
| `scenario-protech.md` | Fixed test case — Protech Industries, 30K SF Houston | **No** |
| `program.md` | Instructions for the AI running the loop | **No** |
| `run.sh` | Shell script that orchestrates iterations | **No** |
| `workspace/SKILL.md` | Working copy of the skill being improved | Yes (this is what gets optimized) |
| `logs/*.md` | Experiment logs — one per iteration | Yes (append-only) |

## Running It

```bash
cd eval/
./run.sh intake          # Run 10 iterations on the intake skill
./run.sh intake 20       # Run 20 iterations
./run.sh search-filters  # Run on a different skill
```

## Interpreting Results

Each run prints a summary:

```
=== EVAL COMPLETE ===
Skill: intake
Iterations: 10
Improvements kept: 4/10
Baseline score: 6.2
Best score: 8.1
Delta: +1.9
```

Check `logs/` for the full experiment history — each log shows the hypothesis, what changed, before/after scores, and whether it was kept.

**Good signs:**
- Score improves steadily in early iterations, then plateaus (diminishing returns = the skill is getting good)
- Improvements are specific and industrial-focused (not generic prompt engineering tricks)

**Bad signs:**
- Score oscillates without trend (rubric may need recalibration)
- AI games the rubric with filler content (rubric isn't specific enough)
- Every iteration gets reverted (threshold too high, or skill is already near-optimal)

## Design Principles

1. **The rubric is the product spec.** It encodes what a good industrial CRE skill looks like. If the rubric is wrong, the loop optimizes for the wrong thing.
2. **One change per iteration.** Compound changes make it impossible to attribute score changes.
3. **Fixed scenario.** The scenario never changes between runs. This isolates skill quality from scenario variance.
4. **Score threshold (Δ ≥ 0.3).** Prevents noise from being committed as improvements. A real improvement moves the needle.
