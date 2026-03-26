---
name: comparison
description: "Use when the user has 2+ evaluated properties and needs to decide between them, or needs deep cost analysis for a single deal. Produces a side-by-side comparison matrix with weighted scoring and total occupancy cost."
---

# Comparison — Choose Your Building

Side-by-side comparison of evaluated properties to drive a decision. Also handles deep cost analysis for single-deal economics (lease vs. buy, total occupancy cost).

<HARD-GATE>
Do NOT compare properties that haven't been evaluated through property-survey first. Each property needs a completed Property Card before it enters a comparison.

**Verification:** Check memory.md (or ask the user) for completed Property Cards. If none exist, run property-survey first.
</HARD-GATE>

## When This Activates

- User has 2+ evaluated properties
- User asks "which one is better?" or "compare these"
- User is trying to decide between options
- User asks "how much will this really cost?" or "total cost of occupancy"
- User asks "should I lease or buy?" for a specific property
- User asks to compare lease vs. buy economics

## Weighted Scoring

### Step 1: Ask What Matters Most

Before scoring, ask the user which dimension matters most to their business:

> "Before I compare these, what matters most to you — **location** (proximity to customers, labor, highways), **pricing** (total cost, budget fit), or **functionality** (clear height, power, loading)? Or are they roughly equal?"

### Step 2: Apply Weights

| Priority | Location | Pricing | Functionality |
|---|---|---|---|
| Location first | 50% | 25% | 25% |
| Pricing first | 25% | 50% | 25% |
| Functionality first | 25% | 25% | 50% |
| Equal (default) | 33% | 33% | 33% |

If the user doesn't express a preference, use equal weights. Don't over-ask — one question, then move on.

### Step 3: Score and Weight

Score each dimension 1-5 for each property. Then compute:

**Weighted Score = (Location × L%) + (Pricing × P%) + (Functionality × F%)**

#### Worked Example

Suppose the user says functionality matters most (they need 32' clear for racking):

| Dimension | Weight | Property A (score) | Property B (score) |
|---|---|---|---|
| Location | 25% | 4 | 3 |
| Pricing | 25% | 3 | 4 |
| Functionality | 50% | 5 | 3 |

Property A weighted: (4 × 0.25) + (3 × 0.25) + (5 × 0.50) = 1.0 + 0.75 + 2.5 = **4.25**
Property B weighted: (3 × 0.25) + (4 × 0.25) + (3 × 0.50) = 0.75 + 1.0 + 1.5 = **3.25**

Recommendation: Property A wins by a full point, driven by functionality.

**Decision tree:** If the scores are within 0.5 points, it's a close call. Frame it as: "These are close. Property A wins if [functionality advantage] matters more than [pricing advantage]. Property B wins if you'd rather save $X/year on rent."

## Comparison Matrix

Use the template in `templates/comparison-matrix.md`. The matrix covers:

### Side-by-Side Specs
| Spec | Property A | Property B | Property C |
|---|---|---|---|
| Address | | | |
| Total SF | | | |
| Clear Height | | | |
| Loading | | | |
| Power | | | |
| Asking Rate / Price | | | |
| All-in Cost | | | |
| Available | | | |

### Dimension Scores (Weighted)
| Dimension | Weight | Property A | Property B | Property C |
|---|---|---|---|---|
| Location | X% | ●●●●○ (4) | ●●●○○ (3) | ●●●●● (5) |
| Pricing | X% | ●●●○○ (3) | ●●●●○ (4) | ●●○○○ (2) |
| Functionality | X% | ●●●●● (5) | ●●●○○ (3) | ●●●●○ (4) |
| **Weighted Total** | | **X.XX** | **X.XX** | **X.XX** |

## Deep Cost Analysis Mode

Activate this when:
- User asks about total cost of a single deal over the full term
- User asks "should I lease or buy?"
- User asks "how much will this really cost?"

### Total Occupancy Cost (Lease)

Build a year-by-year table:

| Year | Base Rent | NNN/Expenses | All-in Annual | Cumulative |
|---|---|---|---|---|
| 1 | $X | $X | $X | $X |
| 2 | $X (+ escalation) | $X | $X | $X |
| ... | | | | |
| Total over term | | | **$X** | |

Include:
- Base rent with escalations applied each year
- NNN estimates with 3-5% annual increase
- TI amortization (if landlord provides TI, it's often baked into rent)
- Moving / relocation costs (one-time, Year 1)
- Capex for modifications not covered by TI (one-time, Year 1)

**Show your math.** State assumptions explicitly: "Assuming 3% annual escalation, $X/SF NNN, and $X one-time move-in costs."

### Lease vs. Buy NPV Comparison

When comparing lease and purchase options for the same property or similar properties:

| Factor | Lease | Buy |
|---|---|---|
| **Year 1 cost** | $X (rent + NNN) | $X (mortgage + taxes + insurance + maintenance) |
| **5-year total** | $X | $X |
| **10-year total** | $X | $X |
| **Equity at end** | $0 | $X (estimated) |
| **Upfront capital** | Security deposit + TI | Down payment + closing |
| **Exit flexibility** | Walk away at term end | Must sell (6-12 month process) |
| **Tax treatment** | Rent is operating expense | Depreciation + interest deduction |
| **Capex risk** | Landlord (structural) | All yours |

**Important disclaimers:**
- "These are estimates based on current data. Actual costs will vary."
- "Tax implications depend on your business structure — consult your CPA."
- "Interest rates and property values are assumed flat. Actual market conditions will differ."

### Pros / Cons Summary
For each property:
- **Top 3 strengths** (what makes this one worth picking)
- **Top 3 risks** (what could go wrong or cost more)
- **Deal-breaker check** — does anything disqualify this option vs. the requirement?

### Recommendation

State your recommendation clearly:

> "Based on your requirements, **Property A** is the strongest option because [reasons]. The main risk is [risk], which you should investigate during tours."

If it's a close call, say so. Explain what would tip the decision one way or the other. Use the decision tree framing above.

## After Comparison

Update memory with the user's decision or leaning. Note which properties are still in play and which are eliminated.

## Transition

- If the user wants to visit buildings → `tour-prep` (bring your Property Cards and the open questions from this comparison)
- If the user is ready to make an offer → `loi-review`
- If the user needs more information → suggest specific questions for `landlord-questions` (focus on the gaps identified in this comparison)
- If the user needs inspections before deciding → `due-diligence`
