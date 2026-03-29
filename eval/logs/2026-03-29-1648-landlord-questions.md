# Eval: landlord-questions skill — Run 1

**Date:** 2026-03-29
**Scenario:** Protech Industries (scenario-protech.md)
**Rubric:** rubric.md (v1, locked)

## Baseline Score

```
BASELINE_SCORES:
requirement_capture: 4.0
actionability: 5.0
industrial_specificity: 3.0
deal_efficiency: 5.0
red_flag_detection: 4.0
weighted_total: 4.20
```

**Baseline assessment:** The skill was a generic CRE question bank — 45 questions that could apply to office, retail, or industrial with no changes. No questions about power specs (voltage/phase/amperage), clear height, floor load, compressed air, floor drains, or ventilation. Red flags were generic (vague answers, reluctance to share financials). No dealbreaker-first sequencing. No structured output format for the listing broker.

---

## Iteration 1: Add Industrial Building Systems Questions

**HYPOTHESIS:** Add an "Industrial Building Systems & Infrastructure" question category covering power (voltage/phase/amperage/transformer), clear height, floor load/slab thickness, compressed air, ventilation, fire suppression type, floor drains, crane, dock config, truck court, and column spacing. This primarily improves Industrial Specificity and Requirement Capture.

**TARGET_DIMENSION:** Industrial Specificity (3.0) + Requirement Capture (4.0)
**EXPECTED_DELTA:** +0.8

```
NEW_SCORES:
requirement_capture: 5.5
actionability: 5.0
industrial_specificity: 5.5
deal_efficiency: 5.0
red_flag_detection: 4.0
weighted_total: 4.975
```

**VERDICT: KEPT**
**DELTA: +0.775**
**REASON:** Added 13 industrial-specific building systems questions covering all major mechanical/electrical/structural specs an industrial tenant needs to verify with a landlord.

---

## Iteration 2: Add Industrial-Specific Red Flags with Cost Context

**HYPOTHESIS:** Expand the "Red Flags in Answers" section with industrial-specific cost gotchas: transformer upgrade costs/timelines ($50K–$200K, 6–12 months), fire suppression upgrade costs ($5–$15/SF), environmental remediation, NNN roof exposure ($150K–$250K for 30K SF), CAM reconciliation surprises, and chemical/manufacturing insurance impacts.

**TARGET_DIMENSION:** Red Flag Detection (4.0) + Industrial Specificity (5.5)
**EXPECTED_DELTA:** +0.6

```
NEW_SCORES:
requirement_capture: 5.5
actionability: 5.0
industrial_specificity: 6.5
deal_efficiency: 5.0
red_flag_detection: 6.5
weighted_total: 5.55
```

**VERDICT: KEPT**
**DELTA: +0.575**
**REASON:** Added 9 industrial-specific red flags with dollar amounts and timelines. For Protech: transformer upgrade risk, fire suppression for chemical storage, floor drain EPA violations, slab thickness verification, and insurance impacts from chemical handling are all directly relevant.

---

## Iteration 3: Add Dealbreaker-First Priority Tiers

**HYPOTHESIS:** Add a 3-tier priority system to question selection: Tier 1 = dealbreakers (power, zoning, environmental, slab), Tier 2 = cost drivers (fire suppression, transformer, roof, TI), Tier 3 = leverage builders (vacancy, offers, rate history). Includes explicit "stop if Tier 1 fails" logic.

**TARGET_DIMENSION:** Deal Efficiency (5.0)
**EXPECTED_DELTA:** +0.5

```
NEW_SCORES:
requirement_capture: 5.5
actionability: 5.5
industrial_specificity: 6.5
deal_efficiency: 7.0
red_flag_detection: 6.5
weighted_total: 6.075
```

**VERDICT: KEPT**
**DELTA: +0.525**
**REASON:** Dealbreaker-first sequencing with industrial-specific examples (power capacity vs. timeline, chemical zoning, wastewater permitting, slab thickness). For Protech: would immediately surface whether a building can handle 800A 480V service and chemical processing zoning before wasting time on lease terms.

---

## Iteration 4: Add Structured Output Format

**HYPOTHESIS:** Add dual output format — (1) Strategy Brief for the user with question + why it matters + red flag answer + priority tier, and (2) Email-Ready Question List the user can copy-paste to the listing broker, stripped of strategy notes.

**TARGET_DIMENSION:** Actionability (5.5)
**EXPECTED_DELTA:** +0.4

```
NEW_SCORES:
requirement_capture: 5.5
actionability: 7.0
industrial_specificity: 6.5
deal_efficiency: 7.0
red_flag_detection: 6.5
weighted_total: 6.45
```

**VERDICT: KEPT**
**DELTA: +0.375**
**REASON:** Dual output makes skill immediately actionable — user gets strategy context AND a broker-ready email they can send without editing. The separation of strategy notes from the email prevents accidentally revealing leverage-building intent to the landlord's broker.

---

## Iteration 5: Add Manufacturing/Chemical Process Deep-Dive + Lease Gotchas

**HYPOTHESIS:** Add two new question categories: (1) "Manufacturing & Chemical Process" covering wastewater discharge permits, chemical storage restrictions, ITAR/DPAS security infrastructure, high-inrush dedicated circuits, HVAC zoning with makeup air, and landlord modification approval process; (2) "Lease Gotchas" covering exclusivity clauses, relocation rights, assignment/subletting restrictions, demolition clauses, base year manipulation, and co-tenancy requirements.

**TARGET_DIMENSION:** Requirement Capture (5.5) + Red Flag Detection (6.5)
**EXPECTED_DELTA:** +0.65

```
NEW_SCORES:
requirement_capture: 7.0
actionability: 7.0
industrial_specificity: 7.5
deal_efficiency: 7.0
red_flag_detection: 7.0
weighted_total: 7.10
```

**VERDICT: KEPT**
**DELTA: +0.65**
**REASON:** For Protech: Manufacturing & Chemical Process questions would directly capture wastewater discharge permits (surface treatment generates hazardous waste), chemical storage limits (plating chemicals), ITAR security infrastructure (controlled access, visitor logs), and dedicated circuits for CNC inrush current. Lease Gotchas catch risks even experienced tenants miss — exclusivity, relocation rights, and assignment restrictions that limit exit options for an ITAR facility that's expensive to move.

---

## Summary

| Metric | Baseline | Final | Delta |
|---|---|---|---|
| Requirement Capture | 4.0 | 7.0 | +3.0 |
| Actionability | 5.0 | 7.0 | +2.0 |
| Industrial Specificity | 3.0 | 7.5 | +4.5 |
| Deal Efficiency | 5.0 | 7.0 | +2.0 |
| Red Flag Detection | 4.0 | 7.0 | +3.0 |
| **Weighted Total** | **4.20** | **7.10** | **+2.90** |

**Iterations kept:** 5/5

### Changes Made
1. **Industrial Building Systems questions (Q1–13):** Power specs, transformer, clear height, slab, fire suppression, compressed air, floor drains, ventilation, column spacing, crane, dock config, truck court
2. **Industrial-Specific Red Flags:** 9 cost-quantified red flags covering transformer upgrades, fire suppression, environmental, slab, floor drains, NNN roof, CAM, insurance, chemical/ITAR landlord resistance
3. **Dealbreaker-First Priority Tiers:** 3-tier system with stop-early logic and industrial-specific dealbreaker examples
4. **Structured Output Format:** Dual output — Strategy Brief (user-facing with red flag analysis) + Email-Ready Question List (broker-facing, clean)
5. **Manufacturing & Chemical Process questions (Q14–20) + Lease Gotchas (Q21–26):** Wastewater discharge, chemical restrictions, ITAR security, CNC circuits, HVAC zoning, modification approvals, exclusivity, relocation, assignment, demolition, base year, co-tenancy
