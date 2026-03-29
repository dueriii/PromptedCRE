---
name: due-diligence
description: "Use when the user needs to plan inspections, environmental assessments, title search, or other due diligence items before closing a deal."
---

# Due Diligence — Inspect Before You Commit

Plan and track the inspections, assessments, and investigations that protect the user before signing a lease or closing a purchase.

## When This Activates

- User mentions "due diligence," "inspections," or "Phase I"
- User has a property under LOI and needs to investigate before closing
- User asks "what inspections do I need?" or "what should I check before signing?"
- Tour or landlord answers revealed concerns that need professional investigation

## Why This Matters

Due diligence is the safety net between "we like this building" and "we're committed to this building." Skipping it is how companies end up with $500K environmental cleanup bills, roofs that leak in the first rain, or use restrictions that shut down their operations.

**For leases:** DD is typically done before or during LOI negotiation. The lease should include a DD period or early termination right.

**For purchases:** DD is contractual — the PSA specifies a due diligence period (usually 30-60 days) during which the buyer can investigate and walk away.

## Due Diligence Checklist

### Environmental

#### Phase I Environmental Site Assessment (ESA)
- **What it is:** Desktop review + site visit to identify potential environmental contamination
- **When to order:** Before signing a lease (recommended) or during PSA due diligence period (required)
- **Cost:** $2,500 - $5,000
- **Timeline:** 2-4 weeks
- **Who does it:** Licensed environmental consultant (ASTM E1527-21 standard)
- **What you get:** Report identifying Recognized Environmental Conditions (RECs), Historical RECs, and Controlled RECs
- **Red flags that trigger Phase II:** Underground storage tanks (USTs), prior industrial use (dry cleaning, gas station, manufacturing with solvents), soil staining, adjacent contaminated sites

#### Phase II ESA (if triggered)
- **What it is:** Soil and groundwater sampling to confirm/deny contamination
- **When to order:** Only if Phase I identifies RECs
- **Cost:** $10,000 - $50,000+ depending on scope
- **Timeline:** 4-8 weeks
- **Impact on deal:** If contamination is confirmed, negotiate remediation responsibility or walk away

### Building Condition

#### Property Condition Assessment (PCA)
- **What it is:** Professional engineer inspects all building systems
- **Cost:** $3,000 - $8,000
- **Timeline:** 1-2 weeks
- **Covers:** Roof, structure, HVAC, plumbing, electrical, fire suppression, ADA compliance, parking lot, exterior envelope
- **Output:** Report with estimated remaining useful life and replacement costs for each system

#### Roof Inspection
- **What it is:** Specialist inspection of roof membrane, flashing, drainage, and structure
- **Cost:** $1,000 - $3,000
- **Timeline:** 1 week
- **Why it matters:** Industrial roof replacement costs $5-$15/SF. On a 50K SF building, that's $250K-$750K. Know the condition before you commit.
- **What to ask for:** Remaining useful life estimate, moisture scan results, warranty status

#### HVAC Assessment
- **What it is:** Mechanical engineer evaluates HVAC capacity, condition, and remaining life
- **Cost:** $1,500 - $3,000
- **Timeline:** 1 week
- **Why it matters:** HVAC replacement for a 50K SF industrial building costs $100K-$300K. If units are >15 years old, budget for replacement.

### Legal & Title

#### Title Search
- **What it is:** Examination of property title records for ownership, liens, easements, encumbrances
- **When:** Required for purchase, recommended for lease (to verify landlord actually owns the property)
- **Cost:** $500 - $2,000
- **Timeline:** 1-2 weeks
- **Red flags:** Outstanding liens, unresolved boundary disputes, restrictive easements, deed restrictions on use

#### ALTA Survey
- **What it is:** Detailed land survey showing boundaries, improvements, easements, encroachments, flood zones
- **When:** Required for purchase with title insurance
- **Cost:** $3,000 - $8,000
- **Timeline:** 2-4 weeks
- **Why it matters:** Confirms the building is actually on the property, identifies encroachments, and maps easements that could affect future expansion

#### Zoning Confirmation
- **What it is:** Written confirmation from the municipality that your intended use is permitted
- **Cost:** $0 - $500 (application fee)
- **Timeline:** 1-4 weeks depending on municipality
- **Why it matters:** The landlord says it's zoned industrial. The city may disagree. Get it in writing before signing.

### Compliance

#### ADA Compliance Review
- **What it is:** Assessment of Americans with Disabilities Act compliance
- **Cost:** $1,000 - $3,000
- **Timeline:** 1 week
- **Why it matters:** Non-compliance is your problem as the tenant/owner. Retrofitting can cost $10K-$100K+.

#### Fire Marshal Inspection
- **What it is:** Fire code compliance review for your specific intended use
- **Cost:** $0 - $500
- **Timeline:** 1-2 weeks
- **Why it matters:** Your operations may require different fire suppression, exit paths, or storage configurations than the current setup. Better to know before you move in.

## DD Timeline Template

Use `reference/templates/due-diligence-checklist.md` to generate a timeline for the user.

Order items based on:
1. **Long lead-time first** — Phase I ESA and ALTA survey take the longest
2. **Deal-breakers first** — Environmental and zoning could kill the deal
3. **Negotiation leverage** — Roof and HVAC condition inform TI negotiations

### Typical DD Timeline (Purchase, 45-day period)

| Week | Item | Status |
|---|---|---|
| Week 1 | Order Phase I ESA, ALTA Survey, Title Search | |
| Week 1 | Submit zoning confirmation request to city | |
| Week 2 | Property Condition Assessment (PCA) | |
| Week 2 | Roof inspection | |
| Week 2 | HVAC assessment | |
| Week 3 | Phase I ESA results received | |
| Week 3 | ADA compliance review | |
| Week 3 | Fire marshal pre-inspection | |
| Week 4 | Title search results and ALTA survey received | |
| Week 4 | Review all reports — compile findings | |
| Week 5 | Phase II ESA ordered (if triggered by Phase I) | |
| Week 5 | Negotiate repairs / credits based on findings | |
| Week 6 | Final decision: proceed or terminate | |

### Typical DD Timeline (Lease)

| Timing | Item | Status |
|---|---|---|
| Before LOI | Request Phase I ESA from landlord (they often have one) | |
| Before LOI | Confirm zoning with municipality | |
| During LOI negotiation | Roof and HVAC age/condition from landlord | |
| After LOI signed | Property Condition Assessment if lease is 5+ years | |
| After LOI signed | ADA and fire marshal review for your specific use | |
| Before lease signing | All findings reviewed; TI/repair negotiations complete | |

## What To Do With Findings

- **Clean reports:** Proceed with confidence. You have a paper trail.
- **Minor issues (HVAC aging, small roof repairs):** Use as negotiation leverage — request TI allowance increase, free rent, or landlord repair commitment.
- **Major issues (contamination, structural problems, zoning denial):** Consider walking away. The cost of remediation or non-compliance almost always exceeds the cost of finding another building.
- **Gray areas:** Consult your attorney and a specialist. A $5K expert opinion can save you $500K in unexpected costs.

## After Due Diligence

Update memory with DD status and key findings. Note any items that affect deal terms.

## Transition

- If DD is clean → `loi-review` (if not yet submitted) or `contract-review` (if negotiating contract)
- If DD reveals issues → renegotiate terms, request repairs/credits, or walk away
- If walking away → back to `comparison` to evaluate alternatives
