---
name: property-survey
description: "Use when the user has found one or more properties to evaluate. Scores each building against the confirmed requirements across Location, Pricing, and Functionality."
---

# Property Survey — Evaluate Buildings

Systematically evaluate each property against the user's requirements.

<HARD-GATE>
Do NOT evaluate properties without a confirmed requirement summary from intake. If the user jumps to "evaluate this building" without completing intake, run intake first.
</HARD-GATE>

## When This Activates

- User shares a property listing, flyer, or building details
- User says "I found a building" or "what do you think of this?"
- User pastes a LoopNet/CoStar/Crexi link or listing data

## How to Gather Property Data

The user may provide data in different formats:
- **Listing flyer / PDF** — extract specs from the document
- **Raw text / URL** — parse what's available
- **Verbal description** — ask clarifying questions

For each property, extract or ask for:
- Address
- Total SF (and divisible?)
- Clear height
- Year built / renovated
- Loading (dock-high doors, grade-level doors)
- Office SF / percentage
- Power (voltage, amperage, phase)
- Crane (type, capacity)
- Yard / outside storage
- Parking (ratio)
- Sprinkler type
- Asking price/rate
- Available date
- Landlord / owner info (if known)
- Current condition / TI needed

## Evaluation Framework

Score every property across three dimensions:

### 1. Location (weight varies by user priority)
- Submarket fit (does it match target area?)
- Highway / freeway access
- Labor pool access
- Customer / supplier proximity
- Rail / port access (if relevant)
- Municipality / jurisdiction (taxes, permitting speed)
- Image / neighborhood quality
- Flood plain / environmental risk

### 2. Pricing
- Asking rate vs. budget
- NNN / CAM / insurance estimates
- All-in occupancy cost (gross-up the rate)
- TI requirements and estimated cost
- Relocation / moving costs
- Capex needed (HVAC, power upgrades, crane install)
- For purchase: price per SF, cap rate if tenanted

### 3. Functionality
- Clear height vs. requirement
- Column spacing (racking / layout impact)
- Loading: door count and type vs. need
- Truck court depth
- Power adequacy
- Crane capacity vs. need
- Floor load / slab thickness
- Office layout / quality
- Yard / outside storage
- Parking sufficiency
- Expansion potential
- Age / condition of roof, HVAC, systems

## Output

For each property, generate a **Property Card** using the template in `templates/property-card.md`.

Include:
- Summary of specs
- Fit score for each dimension (Location / Pricing / Functionality)
- Key strengths
- Key risks or gaps
- Questions to investigate further

## Transition

When 2+ properties are evaluated, suggest moving to the `comparison` skill.
When the user wants to visit a property, suggest `tour-prep`.
