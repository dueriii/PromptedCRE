# Eval Log: search-filters skill — Run 1

**Date:** 2026-03-29
**Scenario:** Protech Industries (precision machining + surface treatment, Houston, 30K SF)
**Skill:** `agent/playbook/skills/search-filters/SKILL.md`

## Baseline Scores

| Dimension | Score | Notes |
|---|---|---|
| Requirement Capture | 4.0 | Tier 1-3 cover basics (type, size, price, clear height, loading, crane, power, rail, sprinkler). Misses floor load, floor drains, ventilation, compressed air, truck court, chemical zoning, column spacing. |
| Actionability | 6.0 | Good tiered table structure, broker outreach template. But generic "[from intake]" placeholders — no instruction to fill with specific values. |
| Industrial Specificity | 4.5 | Tier 3 mentions crane, voltage/phase, ESFR. Platform support notes show some knowledge. No deeper industrial content. |
| Deal Efficiency | 5.5 | "Start broad, narrow down" tier approach is solid. No dealbreaker prioritization or timeline awareness. |
| Red Flag Detection | 3.0 | "What Platforms Won't Show" covers off-market gaps but surfaces zero actual risks. |
| **Weighted Total** | **4.675** | |

## Iteration 1 — KEPT (+1.0)

**Hypothesis:** Add "Unfilterable Dealbreakers" section listing industrial specs that can't be filtered on platforms but must be communicated to brokers — floor load, floor drains, ventilation, compressed air, truck court, chemical zoning, column spacing.

**Target:** Requirement Capture (0.25 weight)

| Dimension | Before | After | Delta |
|---|---|---|---|
| Requirement Capture | 4.0 | 5.5 | +1.5 |
| Actionability | 6.0 | 6.5 | +0.5 |
| Industrial Specificity | 4.5 | 6.0 | +1.5 |
| Deal Efficiency | 5.5 | 6.0 | +0.5 |
| Red Flag Detection | 3.0 | 4.0 | +1.0 |
| **Weighted Total** | **4.675** | **5.675** | **+1.0** |

**What changed:** Added 7-row table of unfilterable dealbreakers with specific values and cost impact. Added rule requiring all hard requirements from intake appear in broker email.

## Iteration 2 — KEPT (+0.8)

**Hypothesis:** Add "Pre-Search Red Flags" section that warns about power upgrade lead times, environmental exposure, zoning elimination, timeline compression, and insurance/landlord restrictions before the user starts searching.

**Target:** Red Flag Detection (0.15 weight)

| Dimension | Before | After | Delta |
|---|---|---|---|
| Requirement Capture | 5.5 | 5.5 | 0 |
| Actionability | 6.5 | 6.5 | 0 |
| Industrial Specificity | 6.0 | 7.0 | +1.0 |
| Deal Efficiency | 6.0 | 7.0 | +1.0 |
| Red Flag Detection | 4.0 | 6.5 | +2.5 |
| **Weighted Total** | **5.675** | **6.475** | **+0.8** |

**What changed:** Added 5-row red flag table with specific triggers from intake and exact language to tell the user. Added rule to surface warnings before presenting filters.

## Iteration 3 — KEPT (+0.425)

**Hypothesis:** Improve actionability by adding explicit "fill in all values" instruction and a complete worked example of a broker outreach email for a manufacturing tenant.

**Target:** Actionability (0.25 weight)

| Dimension | Before | After | Delta |
|---|---|---|---|
| Requirement Capture | 5.5 | 6.0 | +0.5 |
| Actionability | 6.5 | 7.5 | +1.0 |
| Industrial Specificity | 7.0 | 7.0 | 0 |
| Deal Efficiency | 7.0 | 7.0 | 0 |
| Red Flag Detection | 6.5 | 6.5 | 0 |
| **Weighted Total** | **6.475** | **6.90** | **+0.425** |

**What changed:** Added "no brackets, no TBD" instruction. Replaced generic broker email template with structured format + complete worked example showing all Protech-relevant specs filled in.

## Iteration 4 — REVERTED (+0.175, below 0.3 threshold)

**Hypothesis:** Move power to Tier 2 with inrush current guidance, enhance fire suppression with ESFR/wet/chemical distinction.

**Target:** Requirement Capture + Industrial Specificity

| Dimension | Before | After | Delta |
|---|---|---|---|
| Requirement Capture | 6.0 | 6.5 | +0.5 |
| Actionability | 7.5 | 7.5 | 0 |
| Industrial Specificity | 7.0 | 7.5 | +0.5 |
| Deal Efficiency | 7.0 | 7.0 | 0 |
| Red Flag Detection | 6.5 | 6.5 | 0 |
| **Weighted Total** | **6.90** | **7.075** | **+0.175** |

**Why reverted:** Real improvement but spread across two moderate-weight dimensions. Delta below 0.3 threshold.

## Iteration 5 — KEPT (+0.40)

**Hypothesis:** Add "Tighten Your Search by Use Type" section with use-type-specific filter prioritization, deprioritization, and search tips for CNC, surface treatment, distribution, assembly, and food production.

**Target:** Deal Efficiency + Requirement Capture

| Dimension | Before | After | Delta |
|---|---|---|---|
| Requirement Capture | 6.0 | 6.5 | +0.5 |
| Actionability | 7.5 | 7.5 | 0 |
| Industrial Specificity | 7.0 | 7.5 | +0.5 |
| Deal Efficiency | 7.0 | 7.5 | +0.5 |
| Red Flag Detection | 6.5 | 7.0 | +0.5 |
| **Weighted Total** | **6.90** | **7.30** | **+0.40** |

**What changed:** Added 5-row use-type table with filter priority, deprioritization, and practical search tips. Includes rule to combine rows for mixed-use operations.

## Final Scores

| Dimension | Baseline | Final | Delta |
|---|---|---|---|
| Requirement Capture | 4.0 | 6.5 | +2.5 |
| Actionability | 6.0 | 7.5 | +1.5 |
| Industrial Specificity | 4.5 | 7.5 | +3.0 |
| Deal Efficiency | 5.5 | 7.5 | +2.0 |
| Red Flag Detection | 3.0 | 7.0 | +4.0 |
| **Weighted Total** | **4.675** | **7.30** | **+2.625** |

## Summary of Changes

3 of 5 iterations kept. The skill improved from 4.675 to 7.30 (+2.625 total).

**Changes kept:**
1. **Unfilterable Dealbreakers table** — 7 industrial specs (floor load, floor drains, ventilation, compressed air, truck court, zoning, column spacing) with cost impact and rule to include in broker emails
2. **Pre-Search Red Flags table** — 5 risk patterns (power upgrade, environmental, zoning, timeline, insurance) with specific triggers and user-facing warnings, surfaced before search filters
3. **Actionable broker email** — "No brackets, no TBD" instruction + complete worked example with all industrial specs filled in
4. **Use-type search guidance** — Filter prioritization by operation type (CNC, surface treatment, distribution, assembly, food) with deprioritization and practical tips

**Remaining gaps for future runs:**
- Requirement Capture (6.5): Could add power amperage/inrush current guidance and fire suppression type distinctions (attempted in iteration 4, didn't meet threshold alone)
- Red Flag Detection (7.0): Missing lease-specific risks (exclusivity clauses, relocation rights, CAM manipulation) — but these may belong in LOI/contract skills, not search-filters
- Actionability (7.5): Filter values still use bracket placeholders in Tier 1-3 templates (the "fill in" instruction covers this behaviorally but templates still show brackets)
