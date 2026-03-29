# PromptedCRE Skill Evaluation Rubric

> **THIS FILE IS LOCKED.** The AI running the improvement loop MUST NOT modify this rubric.
> The rubric is the fixed objective function. Changing it invalidates all prior scores.

## Scoring Instructions

Score the skill's performance on a 0-10 scale across 5 dimensions when applied to the test scenario. Half-points are allowed (e.g., 7.5). Be harsh — a 10 means a senior industrial broker with 20 years of experience would have nothing to add.

## Dimensions

### 1. Requirement Capture (weight: 0.25)

Does the skill systematically extract the critical specs that determine whether a building works for an industrial tenant?

| Score | Meaning |
|---|---|
| 0-2 | Asks generic questions — "how big?" and "where?" with no industrial depth |
| 3-4 | Covers basics (size, location, budget) but misses building systems entirely |
| 5-6 | Gets power voltage/phase, clear height, and loading — but doesn't dig into amperage, transformer capacity, or future growth |
| 7-8 | Captures the full industrial checklist: power (voltage, phase, amperage, panel capacity, transformer, backup), clear height, column spacing, floor load, dock config (count + type), fire suppression, HVAC, crane, compressed air, floor drains, yard requirements |
| 9-10 | All of the above PLUS proactively asks about things tenants forget: truck court depth, trailer parking, column spacing for racking layouts, expansion options, environmental history, zoning for specific use (chemical mfg, food production, etc.) |

### 2. Actionability (weight: 0.25)

Are the outputs immediately usable by a company searching for space — or vague advice they'd need to interpret?

| Score | Meaning |
|---|---|
| 0-2 | Generic advice: "make sure the building meets your needs" |
| 3-4 | Lists categories to think about but doesn't structure them for action |
| 5-6 | Produces a structured requirement summary but leaves key fields as "TBD" or "discuss with landlord" |
| 7-8 | Outputs a complete, structured document (requirement summary, property card, comparison matrix) with specific values filled in, ready to share with a broker or landlord |
| 9-10 | All outputs are broker-ready. Requirement summaries can be emailed to a listing agent as-is. Comparison matrices have specific $/SF numbers. LOIs have actual terms. The user can act on every deliverable without interpretation. |

### 3. Industrial Specificity (weight: 0.20)

Does the skill demonstrate knowledge of industrial CRE — or could it have been written for any property type?

| Score | Meaning |
|---|---|
| 0-2 | Could be used for office or retail with no changes |
| 3-4 | Mentions "warehouse" or "industrial" but advice is generic commercial real estate |
| 5-6 | Knows the basic industrial vocabulary (clear height, dock doors, NNN) but doesn't go deeper |
| 7-8 | Surfaces industrial-specific insight: ESFR vs. wet sprinkler tradeoffs, transformer upgrade lead times (6-12 months), truck court depth requirements (120'+ for 53' trailers), zoning nuances for manufacturing vs. distribution |
| 9-10 | Demonstrates broker-level industrial knowledge: fire suppression requirements vary by commodity type, column spacing affects racking efficiency (narrow aisle vs. selective), power infrastructure costs can exceed $200K and take 12+ months, Phase I ESA is always required for industrial due diligence, floor drain requirements for chemical/food manufacturing |

### 4. Deal Efficiency (weight: 0.15)

Does the skill help the user move faster toward a signed lease or purchase — or does it create busywork?

| Score | Meaning |
|---|---|
| 0-2 | Asks 50 questions before doing anything useful |
| 3-4 | Structured but slow — treats every question as equally important regardless of deal stage |
| 5-6 | Prioritizes critical path items but doesn't explicitly help the user skip unnecessary steps |
| 7-8 | Identifies dealbreakers early (power capacity, zoning, environmental contamination) so the user doesn't waste time on buildings that won't work. Sequences questions by importance. |
| 9-10 | Actively accelerates the deal: surfaces the 3-4 specs that eliminate 80% of buildings upfront, sequences the workflow to front-load dealbreaker checks, flags when the user has enough info to act (don't over-research), knows when to say "this is good enough, make the offer" |

### 5. Red Flag Detection (weight: 0.15)

Does the skill surface hidden risks, dealbreakers, or gotchas that an inexperienced tenant would miss?

| Score | Meaning |
|---|---|
| 0-2 | No risk awareness — treats all buildings as equally viable |
| 3-4 | Mentions "due diligence" generically but doesn't surface specific risks |
| 5-6 | Flags obvious issues (building age, flood zone) but misses the expensive ones |
| 7-8 | Surfaces the risks that cost real money: transformer upgrades ($50K-$200K), fire suppression upgrades for commodity changes ($5-$15/SF), environmental remediation from prior tenants, roof replacement responsibility in NNN leases, CAM reconciliation surprises |
| 9-10 | Catches the risks that even experienced tenants miss: exclusivity clauses that block competitors, landlord's right to relocate, demolition clauses in ground leases, operating expense base year manipulation, co-tenancy requirements, assignment/subletting restrictions that limit exit options |

## Calculating the Final Score

```
final_score = (
    requirement_capture * 0.25 +
    actionability * 0.25 +
    industrial_specificity * 0.20 +
    deal_efficiency * 0.15 +
    red_flag_detection * 0.15
)
```

## Improvement Threshold

An iteration's change is **kept** only if the new score exceeds the previous score by **≥ 0.3 points**.

This threshold prevents noise and minor prompt engineering tricks from being committed. A real improvement to industrial CRE skill quality should produce a measurable score delta.

## Anti-Gaming Rules

The following patterns should NOT increase scores:

- Adding generic disclaimers ("consult a professional", "this is not legal advice")
- Padding with irrelevant industrial trivia that doesn't help the specific scenario
- Restructuring without adding substance (reformatting tables, reordering sections)
- Adding more questions without improving the quality or specificity of existing ones
- Expanding scope beyond the skill's purpose (intake skill doesn't need to cover LOI negotiation)
