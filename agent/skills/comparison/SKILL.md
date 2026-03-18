---
name: comparison
description: "Use when the user has 2+ evaluated properties and needs to decide between them. Produces a side-by-side comparison matrix."
---

# Comparison — Choose Your Building

Side-by-side comparison of evaluated properties to drive a decision.

<HARD-GATE>
Do NOT compare properties that haven't been evaluated through property-survey first. Each property needs a completed Property Card before it enters a comparison.
</HARD-GATE>

## When This Activates

- User has 2+ evaluated properties
- User asks "which one is better?" or "compare these"
- User is trying to decide between options

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

### Dimension Scores
| Dimension | Property A | Property B | Property C |
|---|---|---|---|
| Location | ●●●●○ | ●●●○○ | ●●●●● |
| Pricing | ●●●○○ | ●●●●○ | ●●○○○ |
| Functionality | ●●●●● | ●●●○○ | ●●●●○ |

### Lease vs. Buy Analysis (if applicable)
When comparing lease and purchase options:
- Total cost of occupancy over 5, 7, 10 years
- Equity build-up (purchase) vs. flexibility (lease)
- Capex requirements for each
- Tax implications (consult CPA — flag, don't advise)
- Exit flexibility

### Pros / Cons Summary
For each property:
- **Top 3 strengths** (what makes this one worth picking)
- **Top 3 risks** (what could go wrong or cost more)
- **Deal-breaker check** — does anything disqualify this option vs. the requirement?

### Recommendation

State your recommendation clearly:

> "Based on your requirements, **Property A** is the strongest option because [reasons]. The main risk is [risk], which you should investigate during tours."

If it's a close call, say so. Explain what would tip the decision one way or the other.

## Transition

- If the user wants to visit buildings → `tour-prep`
- If the user is ready to make an offer → `loi-review`
- If the user needs more information → suggest specific questions for `landlord-questions`
