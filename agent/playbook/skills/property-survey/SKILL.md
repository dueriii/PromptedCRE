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

**Basic specs:**
- Address
- Total SF (and divisible?)
- Clear height
- Column spacing
- Year built / renovated
- Slab thickness / floor load capacity
- Office SF / percentage
- Available date
- Asking price/rate (specify NNN, gross, or modified gross)
- Landlord / owner info (if known)
- Current condition / TI allowance offered

**Loading & access:**
- Dock-high doors (count)
- Grade-level / drive-in doors (count, dimensions)
- Truck court depth
- Yard / outside storage (fenced? paved? acreage?)
- Trailer parking spots
- Parking ratio

**Building systems:**
- Power: voltage, phase, total service amperage, transformer KVA
- Fire suppression: sprinkler type (ESFR / wet / dry), commodity class rating
- HVAC: tonnage, unit age, warehouse vs. office separation
- Ventilation / exhaust systems (for manufacturing)
- Compressed air: existing system, CFM capacity
- Crane (type, capacity, hook height)
- Floor drains: location and connection type (sanitary vs. storm)

**Site history & compliance:**
- Prior tenant use (critical for environmental risk)
- Phase I / Phase II ESA history
- Known contamination, remediation, or environmental liens
- Zoning classification (verify it permits the tenant's specific use)
- Security infrastructure (fencing, controlled access, camera systems — relevant for ITAR, defense, pharma)

## Evaluation Order: Eliminators First

Do NOT score all dimensions equally. Check dealbreakers first — if any is a clear fail, flag the property as **ELIMINATED** with the reason and move on. Don't waste the user's time on a building that can't work.

**Eliminators (check first, in this order):**
1. **Zoning** — Does it allow the tenant's specific use? Chemical processing, food manufacturing, and heavy industrial all face zoning restrictions that eliminate most buildings. Don't assume "industrial" zoning covers it — verify the specific classification.
2. **Power** — Is existing electrical service within range of the tenant's connected load? If a transformer upgrade is needed AND the tenant's timeline is under 12 months, this is likely a dealbreaker. A building with 400A service for an 800A tenant is not "close enough."
3. **Environmental** — Any known contamination, active remediation, or environmental liens on the property? If the tenant generates hazardous waste, can this site feasibly support discharge permitting?
4. **Structural** — Clear height, floor load/slab thickness, column spacing. These are fixed — you cannot economically raise ceilings or thicken a slab.

**If the property passes all eliminators**, proceed to full three-dimension scoring below.

**If information is missing for an eliminator**, flag it as "UNKNOWN — MUST VERIFY BEFORE TOUR" and continue scoring, but note the property cannot be shortlisted until the eliminator is resolved.

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
- Truck court depth (130'+ required for 53' trailers to maneuver; under 120' is a red flag)

**Fire suppression adequacy:**
- Sprinkler type: ESFR (Early Suppression, Fast Response) vs. standard wet system vs. dry system
- ESFR allows higher stacking without in-rack sprinklers — critical for high-bay warehousing
- If tenant stores flammable or corrosive materials (plating chemicals, solvents, coatings): standard ESFR may be insufficient. Verify FM Global or NFPA requirements for the specific commodity class.
- Upgrading fire suppression is $5-$15/SF — a major cost if the existing system doesn't match the tenant's commodity type
- Check insurance carrier requirements — they may mandate upgrades beyond code minimum

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

**Chemical & Process Infrastructure** (evaluate if tenant operations involve surface treatment, plating, painting, food production, or chemical handling):
- Floor drains: present? Connected to sanitary sewer or storm drain? Industrial discharge permit feasible?
- Chemical containment: secondary containment for chemical storage (berms, containment pallets, coated floors)?
- Wastewater: pre-treatment system in place or space/plumbing to install one?
- Fume extraction / ventilation: dedicated exhaust systems for chemical processes? Makeup air units?
- Chemical-resistant flooring: epoxy or acid-resistant coating in process areas?
- Hazmat storage: compliant storage area for flammable/corrosive materials (FM Global or NFPA 30/30A)?

**Other systems:**
- Crane capacity vs. need
- Floor load / slab thickness (verify slab depth — older buildings may have 4" slabs inadequate for heavy CNC equipment at 15,000+ lbs)
- Compressed air capacity (CFM/PSI vs. requirement, number of drops)
- Office layout / quality
- Yard / outside storage
- Parking sufficiency
- Expansion potential
- Age / condition of roof, HVAC, systems

## Red Flags & Dealbreaker Checklist

Before completing any property evaluation, check each of these. Any item marked as a dealbreaker should be flagged prominently at the top of the Property Card.

**Environmental:**
- What was the prior use of this building/site? Manufacturing, chemical, fuel, dry cleaning = Phase I ESA required
- Any known contamination, remediation, or environmental liens?
- If the tenant's operations generate hazardous waste (surface treatment, plating, painting): verify industrial discharge permitting is feasible at this site
- Soil and groundwater conditions — especially in Houston's industrial corridors

**Zoning & Permitting:**
- Verify the specific zoning classification allows the tenant's exact use — many industrial parks restrict chemical processing, food manufacturing, or heavy manufacturing even in "industrial" zones
- If surface treatment or chemical handling: confirm chemical storage and discharge are permitted by the municipality, not just the zoning code

**Infrastructure Upgrade Costs & Timelines:**
- Transformer upgrade: $50K-$200K, 6-12 month lead time from utility. If current KVA is insufficient, this is a potential dealbreaker on timeline.
- Fire suppression upgrade: $5-$15/SF if commodity type changes (e.g., from general warehouse to chemical storage). Confirm with insurance carrier.
- Roof condition in NNN leases: tenant may inherit full replacement liability ($4-$8/SF). Check roof age, warranty, and recent inspection reports.
- HVAC: if manufacturing requires process cooling or fume extraction, existing HVAC is likely insufficient — budget $15-$30/ton for replacement.

**Lease Structure Risks:**
- NNN CAM reconciliation — ask for 3 years of actual CAM expenses, not just estimates
- Exclusivity clauses that could restrict tenant's operations or competitors
- Landlord's right to relocate tenant within the park
- Assignment/subletting restrictions that limit exit options
- Operating expense base year manipulation in gross or modified gross leases

**Insurance & Liability:**
- Chemical storage and manufacturing processes significantly increase insurance premiums
- Landlord may impose additional coverage requirements or restrict chemical quantities
- If ITAR: facility must meet physical security requirements (controlled access, visitor logs, secured storage) — some landlords won't accommodate

**Timeline Reality-Check:**
- Manufacturing buildout is not a standard TI job. Budget 6-9 months for construction (CNC foundations, electrical buildout, ventilation/exhaust, chemical containment).
- Add 3-6 months for permitting if chemical or environmental permits are needed.
- If power upgrades are needed, the utility lead time runs CONCURRENTLY only if you order early. Flag this.

## Output

For each property, generate a **Property Card** using the template in `reference/templates/property-card.md`.

**Output quality standards:**
- Never leave critical specs as "TBD" — if unknown, write "UNKNOWN — ask listing agent: [specific question]"
- Every property gets an eliminator status: PASS / FAIL / UNKNOWN for zoning, power, environmental, structural
- Include estimated all-in occupancy cost: base rent + NNN/CAM + estimated TI amortization + capex for upgrades, expressed as $/SF/year
- Itemize capex with cost ranges and lead times (e.g., "Transformer upgrade: $75K-$150K, 6-9 month lead time")

Include:
- Summary of specs
- Eliminator status (4 items)
- Fit score for each dimension (Location / Pricing / Functionality) with one-sentence justification
- Key strengths (top 3)
- Key risks (top 3, with estimated cost impact)
- Open questions for listing agent or tour verification
- **One-paragraph verdict** — shortlist / eliminate / needs more info, written so the user can forward it to their team

## After Evaluation

Update memory with the property name, address, and status (shortlisted / eliminated / needs more info). Note any open questions that should be asked during tours or follow-up with the landlord.

## Transition

When 2+ properties are evaluated → `comparison` (Property Cards will be used for weighted scoring)
When the user wants to visit a property → `tour-prep` (bring the open questions from this Property Card)
When the user needs more info about the property → `landlord-questions` (focus on gaps identified above)
When the user needs inspections → `due-diligence`
