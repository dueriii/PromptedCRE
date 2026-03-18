# Workflow 04 — Comparison: Lease vs. Purchase & Building vs. Building
> Version 1.0 | PromptedCRE Industrial Workflows
> ⚡ Load MARKET-CONTEXT.md before running this workflow.

## What This Does
Side-by-side analysis to make the final decision clear. Two modes: (A) comparing multiple properties, (B) lease vs. purchase on the same property.

---

## MODE A: BUILDING vs. BUILDING

### Prompt

```
You are an industrial real estate advisor helping me choose between properties I've shortlisted. I'll provide details on each.

[PASTE YOUR REQUIREMENT SUMMARY FROM WORKFLOW 01]
[PASTE PROPERTY SURVEY OUTPUTS FROM WORKFLOW 03 FOR EACH PROPERTY]

Produce a side-by-side comparison:

## PROPERTY COMPARISON MATRIX

| Category | Property A | Property B | Property C |
|---|---|---|---|
| Address | | | |
| SF | | | |
| Clear height | | | |
| Dock doors | | | |
| Asking rate ($/SF NNN) | | | |
| Estimated NNN expenses | | | |
| All-in monthly cost | | | |
| Year built | | | |
| Location score (1–5) | | | |
| Building condition (1–5) | | | |
| Availability date | | | |
| Negotiating leverage | | | |
| Hard req failures | | | |

## FINANCIAL COMPARISON (10-YEAR VIEW)

For each property, model:
- Year 1 total occupancy cost (rent + NNN)
- Assumed escalation rate ([X]% per year)
- Year 5 total occupancy cost
- Year 10 total occupancy cost
- 10-year total occupancy cost

Show as table. Flag which property is cheapest over the full term — short-term cheap doesn't always win.

## HEAD-TO-HEAD ANALYSIS

**Best fit for my operations:** [Property] — [Why]
**Best financial deal:** [Property] — [Why]
**Lowest risk:** [Property] — [Why]
**Most negotiating room:** [Property] — [Why]

## RECOMMENDATION
**Choose:** [Property X]

**Primary reason:** [Single most important factor]
**Secondary reasons:** [2–3 supporting factors]
**Main risk of this choice:** [Be honest]
**What would change this recommendation:** [Specific conditions]
```

---

## MODE B: LEASE vs. PURCHASE (Same Property)

### Prompt

```
You are an industrial real estate advisor helping me decide whether to lease or purchase a specific property.

Property: [Address, SF, asking price or asking lease rate]
My financial profile: [Brief — annual revenue range, capital available, credit profile]

Reference current market data from MARKET-CONTEXT.md.

Analyze both paths:

## LEASE ANALYSIS
- Asking rate: $[X]/SF NNN
- Estimated NNN expenses: $[X]/SF
- Proposed term: [X years]
- Escalations: [X%/year]
- TI allowance: [$X/SF]
- Year 1 all-in monthly cost: $[X]
- Year 5 monthly cost: $[X]
- 10-year total occupancy cost: $[X]

Pros of leasing this property:
- [List 3–5 real advantages for my situation]

Cons of leasing this property:
- [List 3–5 real disadvantages]

## PURCHASE ANALYSIS
- Asking price: $[X] ($[X]/SF)
- Cap rate if leased back to me at market: [X%]
- Down payment required (25–30% typical): $[X]
- Estimated debt service (at [X]% for [X] years): $[X]/month
- Total monthly cost (debt service + taxes + insurance): $[X]/month
- vs. lease monthly cost: $[X] difference
- Break-even horizon (when purchase becomes cheaper than lease): [X years]
- Estimated equity in Year 10 (at [X]% appreciation): $[X]

Pros of purchasing:
- [List 3–5 real advantages for my situation]

Cons of purchasing:
- [List 3–5 real disadvantages]

## RECOMMENDATION
**Do:** [Lease / Purchase]

**The deciding factor:** [Be specific — not generic]
**Key assumption this depends on:** [What has to be true for this to be right]
**What to negotiate hardest on if leasing:** [Top 3 lease terms]
**What to negotiate hardest on if purchasing:** [Top 3 deal terms]
```

---

## Known Issues
None yet. Log failures in `feedback/KNOWN-ISSUES.md`.
