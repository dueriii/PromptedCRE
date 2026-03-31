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
- [ ] Dock-high doors: how many? (receiving and shipping may need separate docks)
- [ ] Grade-level / drive-in doors: how many? What for? (oversized deliveries, equipment access, ventilation for process areas)
- [ ] Truck court depth: 130'+ needed for 53' trailer turning and staging. Ask if they receive full truckloads.
- [ ] Trailer parking / drop lot: how many spots? (frequent shippers may need 5-10 trailer spots)
- [ ] Yard / outside storage: fenced? secured? what's stored? (raw materials, finished goods, equipment)
- [ ] Parking requirements (employee count + visitor/customer parking)

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

### 6. Process-Specific Follow-Ups

Based on the user's operation type, trigger these targeted questions. These catch requirements that generic checklists miss.

**If CNC machining / heavy manufacturing:**
- Inrush current: CNC machines draw 3-5x rated amperage on startup. Total connected load must account for simultaneous starts. Ask how many machines run at once.
- Slab thickness: machines over 10,000 lbs need 6"+ reinforced slab. Older buildings often have 4" slabs — verify before touring.
- Vibration isolation: precision machining may need isolated foundations. Adjacent tenant activity matters too.
- Compressed air: CNC shops typically need 100+ CFM at 90 PSI with dedicated drops per machine.

**If surface treatment (anodizing, plating, coating):**
- Floor drains: required for wastewater from treatment lines. Must connect to sanitary sewer, NOT storm drain.
- Industrial discharge permit: wastewater from plating contains heavy metals. Permitting takes 2-6 months and not all municipalities will approve it. Check BEFORE signing a lease.
- Chemical-resistant flooring and secondary containment: EPA requires containment for chemical storage areas.
- Dedicated ventilation/fume extraction: OSHA requires it for chemical fumes. Size the system for the specific chemicals used.
- Chemical storage: quantity and type determine fire suppression requirements, insurance, and sometimes zoning approval.

**If food production / cold storage:**
- USDA/FDA facility requirements (floor drains with proper slope, washable walls, positive air pressure)
- Refrigeration: power load for cold storage is enormous. Size transformer accordingly.
- Sanitary waste handling and grease traps
- Separate employee facilities (locker rooms, break rooms per OSHA)

**If defense / ITAR:**
- Physical security: controlled access points, visitor management system, secured storage for controlled technical data
- Cybersecurity infrastructure: NIST 800-171 compliant network may need dedicated server room
- Some landlords won't allow the access restrictions ITAR requires — confirm landlord willingness early

### 7. Decision Process
- [ ] Who makes the final decision?
- [ ] What does the approval process look like?
- [ ] Any other sites being considered?

## Dealbreaker-First Sequencing

After the user's initial description, prioritize questions that **eliminate buildings** before questions that **compare buildings**:

**Round 1 — Eliminators** (ask these first):
1. Power: voltage, phase, and total amperage. If their load needs a transformer upgrade, 80% of buildings are out or require 6-12 months of lead time.
2. Zoning: manufacturing, chemical processing, food production, hazmat — each restricts the building pool dramatically. Confirm the specific zoning code their operations require.
3. Environmental: if they generate wastewater, handle chemicals, or need discharge permits — many buildings and parks won't allow it.
4. Clear height + floor load: these are structural and cannot be changed. Wrong slab or low ceilings = dead deal.

**Round 2 — Differentiators** (compare remaining options):
5. Loading configuration, dock count, truck court depth
6. HVAC, compressed air, crane, ventilation
7. Office percentage, parking, yard

**Round 3 — Deal terms:**
8. Budget, timeline, lease term, TI expectations

### Timeline Reality Check

Before finalizing intake, calculate a rough backward timeline from their target move-in date:
- Subtract 6-9 months for TI construction (manufacturing/chemical buildouts are complex)
- Subtract 2-3 months for lease negotiation
- Subtract 3-4 months for search + evaluation
- If power or ventilation upgrades are needed, add 6-12 months

If the math shows they're already behind, **say so directly.** Don't let a user think they have plenty of time when they don't.

## How to Ask

Don't interrogate. Have a conversation. Start with the big picture:

> "Tell me about your company and what kind of space you're looking for. Even a rough idea helps — we'll refine from there."

Then fill in gaps with targeted follow-ups. Group related questions naturally — but always hit the eliminators first.

## When Complete

Present a **Requirement Summary** using the template in `reference/templates/requirement.md`. The output must meet these standards:

### Output Requirements
- **No TBD on critical specs.** Power (voltage/phase/amperage), clear height, floor load, loading config, and zoning must have specific values. If the user doesn't know, help them estimate from their equipment list or operation description. Only mark truly optional items as TBD.
- **Dealbreakers section.** List the top 3-4 specs that will eliminate the most buildings. Example: "480V 3-phase 800A minimum — eliminates most spec buildings under 50K SF" or "Zoning must allow chemical processing — most Houston industrial parks restrict this."
- **Broker Brief.** Write a 3-4 sentence paragraph summarizing the requirement that can be copy-pasted into an email to a listing agent. Include: company type, size range, market, critical building specs, timeline, and budget. A broker reading this should be able to start pulling options immediately.
- **Timeline reality check.** Include a backward-schedule showing whether the user's target date is achievable, with specific month counts for each phase.

Ask the user to confirm or correct the summary.

Once confirmed:
1. **Update memory** — save the full requirement summary to memory.md (or output a memory block on platforms without file access). If memory.md is empty or contains only template fields, also write the company profile (company name, industry, team size, decision timeline) as the first deal entry. If memory.md already has a different deal, add a new deal section.
2. **Milestone check-in:** "Requirements locked in. Anything feel off, or are we good to search?"
3. Transition to the `search-filters` skill.

## Next Step

After intake is confirmed → transition to `search-filters` to generate CoStar/LoopNet/Crexi search parameters from the locked requirements.

## Red Flags to Surface

Proactively flag these during intake — don't wait for due diligence:

- **Power upgrade timeline:** If their load exceeds a building's existing transformer capacity, budget $50K-$200K and 6-12 months. This alone can blow a timeline. Ask early.
- **Environmental liability:** If the user handles chemicals, plating, coatings, or solvents — the building's environmental history matters (prior contamination = their problem). AND their own operations will need discharge permits, which take months.
- **Chemical storage insurance:** Manufacturing with chemicals (plating, anodizing, coatings) dramatically increases insurance requirements. Landlords may restrict chemical types/quantities or require additional coverage.
- **ITAR / security requirements:** Defense/aerospace tenants need controlled access, visitor logs, secured storage. Some landlords won't accommodate. Some buildings can't be retrofitted cost-effectively. Flag this immediately.
- **Timeline compression:** Manufacturing buildouts take 6-9 months for TI construction AFTER lease signing. Add 3-4 months to find space and 2-3 months to negotiate. An "18-month" timeline means searching starts NOW.
- **Zoning for specific use:** Many industrial parks allow distribution but restrict manufacturing, chemical processing, or food production. This eliminates buildings before you ever tour them — confirm zoning compatibility early.
- **Fire suppression mismatch:** Chemical storage, flammable commodities, or high-pile storage may require fire suppression upgrades beyond standard ESFR. Upgrades run $5-$15/SF.

## Things Users Often Forget

Prompt for these if they haven't mentioned them:
- Column spacing (critical for racking and manufacturing layouts)
- Truck court depth (affects whether trucks can stage and turn)
- Trailer parking / trailer storage
- Future growth — do they need expansion options?
- Environmental concerns (Phase I/II, flood plain)
