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

## Dealbreaker Screen (Do This First)

Before the full comparison, run a quick elimination pass. These items kill most industrial deals — check them before spending time on weighted scoring:

1. **Power capacity** — Can the building's existing electrical service support the user's equipment, or is a transformer upgrade needed? If upgrade lead time (6-12 months) exceeds the user's timeline, the building is dead. For CNC shops: verify the service handles inrush current (startup amperage 5-8x running load). For surface treatment: verify dedicated circuits for process lines.
2. **Zoning for specific use** — Does zoning allow the user's actual operations (not just "industrial")? Manufacturing, chemical processing, food production, and hazmat storage each have specific zoning requirements. Many industrial parks restrict chemical use — this eliminates buildings that look perfect on paper. If zoning doesn't allow it, eliminate unless the user has 12+ months and appetite for a variance.
3. **Environmental history** — Any prior contamination, underground storage tanks, or remediation in progress? Phase I ESA is required for all industrial transactions. If the building has prior manufacturing or chemical tenants, environmental risk is elevated. Flag remediation timelines.
4. **Timeline feasibility** — Given the buildout each property needs, can the user be operational by their target date? Build the math explicitly:
   - Lease negotiation: 2-3 months
   - Permitting (especially industrial discharge, air quality): 1-6 months
   - TI construction: 3-9 months (longer for power upgrades, ventilation, containment)
   - Equipment move + install: 1-3 months
   - **Total: 7-21 months.** If the user says "18 months" and a property needs heavy buildout, that's actually tight — say so.
5. **Insurance / landlord restrictions** — Will the landlord accept the user's operations? Chemical storage, hazmat, and heavy manufacturing can trigger landlord insurance exclusions or require additional coverage ($1-$3/SF annually). Some landlords simply won't allow it — better to know before investing time in the comparison.

**If a property fails any of these, tell the user immediately:** "Property B is likely eliminated because [reason]. Do you want me to include it in the full comparison anyway, or drop it?"

This saves the user from analyzing a building they'll never lease.

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

## Requirement Compliance Check

Before scoring, check each property against the requirement document from intake. This is a pass/fail gate — if a property fails a critical requirement, it may not belong in the comparison at all.

Pull the user's requirements from `working-deals/[company]/requirement.md` and check each property:

| Requirement | Target | Property A | Property B | Property C |
|---|---|---|---|---|
| Power (voltage/phase/amps) | From req doc | ✅ meets / ⚠️ needs upgrade ($X) / ❌ can't meet | | |
| Clear Height | From req doc | ✅ / ⚠️ / ❌ | | |
| Floor Load / Slab Thickness | From req doc | ✅ / ⚠️ / ❌ | | |
| Loading (dock + drive-in doors) | From req doc | ✅ / ⚠️ / ❌ | | |
| Truck Court Depth | From req doc | ✅ / ⚠️ / ❌ | | |
| Floor Drains / Wastewater | From req doc | ✅ / ⚠️ / ❌ | | |
| Ventilation / Exhaust | From req doc | ✅ / ⚠️ / ❌ | | |
| Compressed Air | From req doc | ✅ / ⚠️ / ❌ | | |
| Fire Suppression | From req doc | ✅ / ⚠️ / ❌ | | |
| Zoning (specific use) | From req doc | ✅ / ⚠️ / ❌ | | |
| Column Spacing | From req doc | ✅ / ⚠️ / ❌ | | |

**Legend:** ✅ = meets requirement as-is. ⚠️ = can be upgraded (note cost + timeline). ❌ = cannot meet requirement — flag as potential elimination.

For any ⚠️ items, include the estimated upgrade cost in the Deep Cost Analysis. A property with 3+ ⚠️ items may cost more to retrofit than a higher-rent property that meets requirements out of the box.

## Comparison Matrix

Use the template in `reference/templates/comparison-matrix.md`. The matrix covers:

### Side-by-Side Specs
| Spec | Property A | Property B | Property C |
|---|---|---|---|
| Address | | | |
| Total SF | | | |
| Clear Height | | | |
| Column Spacing | | | |
| Floor Load / Slab | | | |
| Loading (dock + grade) | | | |
| Truck Court Depth | | | |
| Power (V / phase / amps) | | | |
| Floor Drains | | | |
| Ventilation / Exhaust | | | |
| Compressed Air | | | |
| Fire Suppression Type | | | |
| Asking Rate / Price | | | |
| All-in Cost (incl. upgrades) | | | |
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

#### Industrial Buildout Costs (Year 0 / Pre-Occupancy)

These are the costs tenants forget. Pull from the Requirement Compliance Check — every ⚠️ item has a cost:

| Buildout Item | Typical Range | Notes |
|---|---|---|
| Transformer / electrical upgrade | $50K-$200K | 6-12 month lead time. If CNC or heavy equipment, verify inrush current capacity. |
| Ventilation / fume extraction | $15-$40/SF of affected area | Required for chemical processes (plating, coating, painting). OSHA/EPA compliance. |
| Chemical-resistant flooring + containment | $8-$15/SF | Required for surface treatment, food production, any process with wastewater discharge. |
| Fire suppression upgrade | $5-$15/SF | If commodity storage or chemical handling exceeds standard ESFR capacity. |
| Floor drain installation / modification | $5K-$15K per drain | Requires cutting slab + sanitary sewer connection + industrial discharge permit. |
| Compressed air system | $15K-$50K | Depending on CFM requirements and number of drops. |
| CNC / equipment foundations | $3K-$10K per pad | Heavy equipment (15,000+ lbs) may need isolated pads on 4" slabs. |
| ITAR / security buildout | $20K-$75K | Controlled access, surveillance, secured storage for controlled technical data. |
| Environmental permitting | $10K-$30K + 3-6 months | Industrial discharge permits, air quality permits for chemical processes. |

Add these to Year 0/1 of the cost table. **This often changes which property is cheapest** — a lower-rent building that needs $200K in upgrades may cost more than a higher-rent building that's move-in ready.

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

### Industrial Risk Comparison

Compare these risk categories across all properties. Flag cost/timeline impact for each.

| Risk Category | What to Compare | Cost Impact |
|---|---|---|
| **Power infrastructure** | Does existing service meet requirements, or does each property need a transformer upgrade? | $50K-$200K + 6-12 month lead time per property |
| **Environmental liability** | Prior tenant history — any manufacturing, chemical storage, or fuel tanks? Phase I ESA status? | Remediation can cost $100K+ and delay occupancy by months |
| **Fire suppression** | Standard ESFR vs. specialized suppression needed for chemical/commodity storage? | Upgrades run $5-$15/SF |
| **Zoning compliance** | Does zoning allow the specific use (manufacturing, chemical processing, food production)? | Rezoning takes 6-12 months if even possible |
| **Lease clause risks** | Exclusivity clauses, landlord relocation rights, demolition clauses, assignment/subletting restrictions, CAM base year manipulation | Can block operations or trap you in a bad deal |
| **Insurance exposure** | Chemical storage, manufacturing processes, or hazmat — how does each property's configuration affect insurance costs? | Can add $1-$3/SF annually |
| **TI / buildout timeline** | How much work does each property need? Power, ventilation, flooring, containment — which building gets you in fastest? | Buildout delays = rent on two spaces |

For each property, rate risk as **LOW / MEDIUM / HIGH** and note estimated cost to mitigate. If any property has a HIGH risk that can't be mitigated within budget or timeline, flag it as a potential elimination.

### Pros / Cons Summary
For each property:
- **Top 3 strengths** (what makes this one worth picking)
- **Top 3 risks** (what could go wrong or cost more)
- **Deal-breaker check** — does anything disqualify this option vs. the requirement?

### True Cost Ranking

Re-rank properties by **total occupancy cost over the full lease term** — not just asking rate. This is the most important output of the comparison. Include:
- Base rent + NNN over the full term (with escalations)
- All buildout/upgrade costs from the Industrial Buildout Costs table
- Timeline cost: if a property takes 6 months longer to build out, that's 6 months of overlapping rent at the current location
- Insurance differential: if one property requires higher coverage due to chemical storage, manufacturing processes, or landlord requirements
- Permitting costs: industrial discharge, air quality, and environmental permits that vary by property

Present a simple ranking:

| Rank | Property | Asking Rate | Buildout Costs | Insurance Delta | Total Cost (X-year term) | Move-in Timeline |
|---|---|---|---|---|---|---|
| 1 | Property B | $13/SF NNN | $25K | +$0/yr | $X | 4 months |
| 2 | Property A | $10/SF NNN | $200K | +$45K/yr | $X | 14 months |

**Key insight for the user:** The cheapest asking rate is often NOT the cheapest building. A $10/SF building that needs $200K in transformer and ventilation upgrades costs more over a 7-year term than a $13/SF building that's move-in ready. Show this math explicitly — break it down to a monthly or annual number so the difference is tangible.

If the weighted score winner and the true cost winner are different properties, call it out: "Property A scores highest on functionality, but Property B is $X cheaper over the lease term. Here's what you're paying for with Property A: [specific advantages worth $X/year]."

**NNN reality check:** NNN estimates in listings are often understated. For Houston industrial, expect $3-$5/SF for NNN (taxes, insurance, CAM). If a listing shows $2/SF NNN, flag it — the tenant will likely see higher reconciliation in Year 2. Calculate total cost using both the listed NNN and a conservative estimate.

### Recommendation

State your recommendation clearly:

> "Based on your requirements, **Property A** is the strongest option because [reasons]. The main risk is [risk], which you should investigate during tours."

If it's a close call, say so. Explain what would tip the decision one way or the other. Use the decision tree framing above.

If one property is clearly superior on both score and cost, say so directly: "This is not a close call. Property A is both the best fit and the best deal."

**Next step prompt:** Always end the recommendation with a specific next action: "The next step is to [tour Property A / request a proposal from the listing broker / get LOI terms from the landlord]. Want me to prepare for that?"

## After Comparison

Update memory with the user's decision or leaning. Note which properties are still in play and which are eliminated.

## Transition

- If the user wants to visit buildings → `tour-prep` (bring your Property Cards and the open questions from this comparison)
- If the user is ready to make an offer → `loi-review`
- If the user needs more information → suggest specific questions for `landlord-questions` (focus on the gaps identified in this comparison)
- If the user needs inspections before deciding → `due-diligence`
