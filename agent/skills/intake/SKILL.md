---
name: intake
description: "MUST use when a user describes space needs, mentions they're looking for a building, or starts any new real estate search. Captures all requirements before any search or evaluation begins."
---

# Intake — Define Your Requirement

Capture everything about what the user needs before suggesting any buildings or search parameters.

<HARD-GATE>
Do NOT generate search filters, evaluate properties, or make recommendations until intake is complete and the user has confirmed the requirement summary.
</HARD-GATE>

## When This Activates

- User says they need space, a building, a warehouse, a factory, etc.
- User mentions size, location, or timeline for a real estate need
- Any new search begins

## Checklist

Complete these in order. Ask questions **one or two at a time** — don't dump a 20-question form.

### 1. Company Context
- [ ] What does the company do? (manufacturing, distribution, assembly, R&D, etc.)
- [ ] How many employees at this location?
- [ ] Any special industry requirements? (defense/ITAR, food safety, clean room, hazmat)

### 2. Space Requirements
- [ ] Target size (SF) — range is fine
- [ ] Clear height minimum
- [ ] Office percentage needed
- [ ] Loading: dock-high doors (how many?), grade-level doors?
- [ ] Yard / outside storage needs
- [ ] Parking requirements

### 3. Building Systems

#### Power (critical for manufacturing — dig deeper than "480V 3-phase")
- [ ] Voltage and phase: 480V 3-phase is industrial standard — but confirm
- [ ] Amperage: What's the total connected load of their equipment?
- [ ] Panel capacity: Do they need a single main panel or multiple sub-panels?
- [ ] Transformer: Will existing building transformer handle their load, or do they need an upgrade? (Transformer upgrades cost $50K-$200K and take 6-12 months lead time)
- [ ] Backup power: Do they need a generator? UPS? What's the criticality of uninterrupted power?
- [ ] Future growth: Will their power needs increase in 2-3 years? Size for future, not just today.

#### Other Systems
- [ ] HVAC requirements (warehouse climate control? Temperature/humidity tolerances?)
- [ ] Crane: overhead crane needed? Bridge or jib? Capacity (tons)? Span?
- [ ] Floor load / slab thickness requirements (for heavy machinery, high-density racking)
- [ ] Compressed air: CFM and PSI requirements? Number of drops?
- [ ] Gas lines (natural gas for heating, process gas for manufacturing)
- [ ] Fire suppression requirements (ESFR, wet/dry, clean agent for sensitive equipment?)
- [ ] Dust collection, fume extraction, or ventilation for manufacturing processes

### 4. Location
- [ ] Target market / city / submarket
- [ ] Proximity requirements (customers, suppliers, labor, highways, rail, port)
- [ ] Zoning requirements or restrictions
- [ ] Any areas to avoid?

### 5. Deal Parameters
- [ ] Lease or buy? (or open to both?)
- [ ] Budget range ($/SF/yr for lease, total $ for purchase)
- [ ] Target move-in date / timeline
- [ ] Lease term preference (if leasing)
- [ ] Tenant improvement needs — turnkey or willing to build out?

### 6. Decision Process
- [ ] Who makes the final decision?
- [ ] What does the approval process look like?
- [ ] Any other sites being considered?

## How to Ask

Don't interrogate. Have a conversation. Start with the big picture:

> "Tell me about your company and what kind of space you're looking for. Even a rough idea helps — we'll refine from there."

Then fill in gaps with targeted follow-ups. Group related questions naturally.

## When Complete

Present a **Requirement Summary** using the template in `templates/requirement.md`. Ask the user to confirm or correct it.

Once confirmed:
1. **Update memory** — save the full requirement summary to memory.md (or output a memory block on platforms without file access)
2. **Milestone check-in:** "Requirements locked in. Anything feel off, or are we good to search?"
3. Transition to the `search-filters` skill.

## Things Users Often Forget

Prompt for these if they haven't mentioned them:
- Column spacing (critical for racking and manufacturing layouts)
- Truck court depth (affects whether trucks can stage and turn)
- Trailer parking / trailer storage
- Future growth — do they need expansion options?
- Environmental concerns (Phase I/II, flood plain)
