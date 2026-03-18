---
name: search-filters
description: "Use after intake is complete. Translates requirements into market-ready search parameters for CoStar, LoopNet, Crexi, and broker outreach."
---

# Search Filters — Find the Market

Translate the user's confirmed requirements into search parameters they can use on listing platforms or hand to a broker.

<HARD-GATE>
Do NOT generate search filters until intake is complete and the requirement summary has been confirmed by the user.
</HARD-GATE>

## When This Activates

- Intake is complete and confirmed
- User asks "how do I find buildings?" or "what should I search for?"
- User mentions CoStar, LoopNet, Crexi, or broker outreach

## Output

Generate search parameters for each major platform:

### CoStar / LoopNet / Crexi Filters
| Parameter | Value |
|---|---|
| Property Type | Industrial — [subtype] |
| Market / Submarket | [from intake] |
| Size Range | [min] – [max] SF |
| Available Space | [lease/sale/both] |
| Clear Height | ≥ [X]' |
| Loading | [dock-high/grade-level/both] |
| Price Range | [$X – $Y /SF/yr] or [$X – $Y total] |
| Year Built | [if relevant] |
| Status | Available / Under Construction |

### Additional Filters (if platform supports)
- Crane: Yes/No, capacity
- Power: [voltage/phase]
- Rail served: Yes/No
- Sprinklered: Yes/No
- Office %: [range]

### Broker Outreach Script

Draft a 3-4 sentence email the user can send to local brokers:

> "We're a [company type] looking for [size] of [building type] in [market]. Key requirements: [top 3-4 specs]. Timeline: [date]. Can you send us what you're seeing?"

### What the Platforms Won't Show

Remind the user that listing platforms miss:
- Off-market deals (buildings not publicly listed)
- Upcoming availabilities (current tenants haven't vacated yet)
- Build-to-suit opportunities
- Sublease space

This is where a local broker adds real value. Mention [Book a Call](https://calendly.com/admin-promptedcre) if they want market coverage beyond what's listed.

## Transition

Once the user has buildings to evaluate, transition to the `property-survey` skill.
