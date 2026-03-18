# Workflow 01 — Intake: Define Your Requirement
> Version 1.0 | PromptedCRE Industrial Workflows

## What This Does
Structures your real estate requirement before you talk to a single broker or look at a single listing.
Most companies waste weeks because they can't clearly articulate what they need. This fixes that.

---

## Prompt

```
You are an industrial real estate advisor helping me define my space requirement before beginning a search.

Ask me the following questions one at a time. After I answer each, confirm understanding and move to the next. When complete, produce a structured Requirement Summary I can send to brokers.

OPERATIONAL QUESTIONS:
1. What does your company do? Walk me through a typical day of operations — what comes in the door, what happens to it, and what goes out.
2. What is your current square footage and why is it no longer working? (too small, wrong layout, lease expiring, relocating, first space?)
3. What is your target square footage range? How did you arrive at that number?
4. Do you need office space within the building? What percentage of total SF?

BUILDING SPEC QUESTIONS:
5. Clear height — minimum acceptable? (Note: modern logistics standard is 28–36'. Manufacturing often needs 24–32'. Small distribution can work at 18–22'.)
6. Do you need dock doors? How many? Grade level doors?
7. Do you need crane capability? What tonnage and hook height?
8. Power requirements — standard 3-phase 480V, or do you have specific amp/KVA needs?
9. HVAC — full climate control, partial, or none? (Drives cost significantly)
10. Fire suppression — ESFR sprinkler required? (Manufacturing with certain materials requires it)
11. Yard / outdoor storage — do you need secured outdoor space? Approximate square footage?

LOCATION QUESTIONS:
12. What markets are you considering? Are you flexible on location or anchored to a specific city/submarket?
13. What drives your location decision? (workforce, customers, suppliers, owner preference, incentives?)
14. Are there specific interstate or highway access requirements?
15. Do you have employees who need to commute? Where are they coming from?

TIMELINE & FINANCIAL QUESTIONS:
16. When do you need to be operational in new space? (Work backward — add 60–90 days for a lease, 6–18 months for build-to-suit)
17. What is your lease vs. purchase preference? Have you modeled both?
18. What is your monthly occupancy cost budget? (Include rent + NNN expenses + utilities as one number)
19. What is your credit profile? (Lenders and landlords will ask — be ready)
20. Who is the decision-maker? What does your approval process look like?

DEAL HISTORY:
21. Have you leased or purchased industrial space before? What worked, what didn't?
22. Are you currently working with any other brokers?

---

After collecting all answers, produce:

## REQUIREMENT SUMMARY

**Company:** [Name]
**Operation Type:** [Brief description]
**Target SF:** [Range]
**Building Specs:** [Clear height, dock doors, grade level, power, HVAC, fire suppression, crane, yard]
**Markets:** [Priority order]
**Timeline:** [Target occupancy date and flexibility]
**Lease vs. Purchase:** [Preference and reasoning]
**Budget:** [Monthly all-in occupancy cost]
**Decision Process:** [Who approves, timeline]
**Key Constraints:** [Anything that could kill a deal if not met]
**Nice-to-Haves:** [Preferences but not dealbreakers]

Flag anything that seems inconsistent or that could create problems in the search (e.g., timeline too short for build-to-suit, budget below market for stated specs, geography too restrictive for stated size).
```

---

## What to Do With the Output
- Send the Requirement Summary to 2–3 brokers to get market feedback
- Use it as the input for `02-search-filters.md`
- Save it — you'll reference this throughout the process

## Known Issues
None yet. Log failures in `feedback/KNOWN-ISSUES.md`.
