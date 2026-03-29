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

**Check the properties folder first.** Look in `working-deals/[company]/properties/` for property folders. Inside each property folder, check the `flyers/` subfolder for PDFs, screenshots, and exports from CoStar/LoopNet/Crexi. Read everything and evaluate each property you find. Tell the user what you found: "I see [X] listings in your properties folder. Let me evaluate each one."

The user may also provide data directly in conversation:
- **Listing flyer / PDF** — extract specs from the document
- **Raw text / URL** — parse what's available
- **Verbal description** — ask clarifying questions

<HARD-GATE>
When reading PDFs or listing flyers, you MUST read EVERY PAGE — not just the first page. Listing flyers typically have:
- Page 1: Hero photo and headline specs
- Middle pages: Floor plans, site plans, maps, additional specs
- Last page(s): **Broker contact information, disclaimers, company branding**

Always read the full document. If the user asks about broker contact info, listing agent details, or anything you can't find — re-read the document from the LAST page backwards. Broker contacts are almost always on the final page.
</HARD-GATE>

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
- Capex needed (HVAC, power upgrades, crane install, transformer)
- For purchase: price per SF, cap rate if tenanted

### 3. Functionality
- Clear height vs. requirement
- Column spacing (racking / layout impact)
- Loading: door count and type vs. need
- Truck court depth

**Electrical adequacy** (score each):
- Service amperage vs. user's total connected load
- Panel capacity: enough circuits and breakers for their equipment?
- Transformer: adequate KVA for current and future needs?
- Backup power: generator pad / UPS available if needed?
- Electrical grade: A (exceeds need), B (meets need), C (needs minor upgrades), D (needs major upgrades — $50K+), F (inadequate, deal-breaker)

**HVAC adequacy:**
- Tonnage vs. building SF (industrial rule of thumb: 1 ton per 400-500 SF for climate-controlled warehouse)
- Unit age and condition
- Warehouse vs. office HVAC separation
- Ventilation / exhaust for manufacturing processes

**Other systems:**
- Crane capacity vs. need
- Floor load / slab thickness
- Compressed air capacity (CFM/PSI vs. requirement)
- Office layout / quality
- Yard / outside storage
- Parking sufficiency
- Expansion potential
- Age / condition of roof, HVAC, systems

## Output

For each property, generate a **Property Card** using the template in `reference/templates/property-card.md`.

Include:
- Summary of specs
- Fit score for each dimension (Location / Pricing / Functionality)
- Key strengths
- Key risks or gaps
- Questions to investigate further

## After Evaluation

Update memory with the property name, address, and status (shortlisted / eliminated / needs more info). Note any open questions that should be asked during tours or follow-up with the landlord.

## Transition

When 2+ properties are evaluated → `comparison` (Property Cards will be used for weighted scoring)
When the user wants to visit a property → `tour-prep` (bring the open questions from this Property Card)
When the user needs more info about the property → `landlord-questions` (focus on gaps identified above)
When the user needs inspections → `due-diligence`
