# Test Scenario: Protech Industries

> **THIS FILE IS LOCKED.** The AI running the improvement loop MUST NOT modify this scenario.
> The scenario is a fixed test case. Changing it invalidates all prior scores.

## Company

**Protech Industries** is a mid-size manufacturer of precision-machined components for defense and aerospace customers. They produce CNC-machined parts, perform surface treatment (anodizing, plating), and handle light assembly/kitting for military contracts. ITAR-registered. 45 employees across production, QC, and office staff.

## What They Tell You (Initial User Input)

> "We need about 30,000 square feet in the Houston area. We do manufacturing and some distribution — machining, surface treatment, and shipping finished parts. Need good power and tall ceilings. Probably 18 months out from needing to be in."

## What a Good Skill Should Extract (Hidden Requirements)

These are the real requirements that a skilled broker would uncover through follow-up questions. The user won't volunteer most of these — the skill needs to pull them out.

### Building Systems
- **Power:** 480V 3-phase, minimum 800A service. CNC machines pull significant amperage on startup (inrush current). Surface treatment lines need dedicated circuits. Existing transformer must handle the load or budget $75K-$150K and 6-9 month lead time for upgrade.
- **Clear height:** 28'+ minimum. CNC machines don't need it, but racking for raw material and finished goods does. 32' is ideal for selective racking efficiency.
- **Floor load:** 6" slab minimum for CNC machines (some weigh 15,000+ lbs). Verify slab thickness — older Houston buildings may have 4" slabs.
- **Floor drains:** Required for surface treatment (anodizing/plating generates wastewater). Must connect to sanitary sewer with proper permitting for industrial discharge.
- **Ventilation/exhaust:** Surface treatment chemicals require dedicated fume extraction. OSHA and EPA compliance.
- **Compressed air:** CNC shops typically need 100+ CFM at 90 PSI. Need to know number of drops.
- **Fire suppression:** Chemical storage (plating chemicals) may require special fire suppression beyond standard ESFR.

### Loading & Access
- **Dock doors:** 4 dock-high doors for receiving raw material (steel bar stock, sheet) and shipping finished goods.
- **Drive-in doors:** 2 grade-level doors — one for oversized raw material delivery, one for the surface treatment area (ventilation + equipment access).
- **Truck court:** 130'+ for 53' trailer access. Defense/aerospace suppliers receive full truckloads of raw material.

### Location
- **Market:** Houston TX metro. Proximity to Port of Houston and I-45/I-10 corridors preferred for shipping.
- **Zoning:** Must allow manufacturing AND chemical processing (surface treatment). Many industrial parks restrict chemical use — this eliminates a lot of buildings.

### Deal Parameters
- **Budget:** $12-15/SF NNN. Houston industrial market for 30K SF Class B/C is $8-12 NNN asking, so they're at market or slightly above — should have options.
- **Timeline:** 18 months. This is actually tight for manufacturing buildout — 3-4 months to find space, 2-3 months to negotiate lease, 6-9 months for TI construction (especially if power/ventilation upgrades needed). Need to start searching NOW.
- **Lease term:** 7-10 years likely (ITAR facilities are expensive to move, landlords know this).
- **TI allowance:** Will need significant tenant improvements — CNC foundations, electrical buildout, ventilation/exhaust systems, surface treatment area with chemical-resistant flooring and containment.

### Red Flags to Surface
- Environmental: surface treatment (plating) creates hazardous waste. Need to verify the building's environmental history AND plan for their own discharge permitting.
- ITAR: facility needs to meet ITAR physical security requirements (controlled access, visitor logs, secured storage for classified/controlled technical data). Some landlords won't deal with this.
- Insurance: chemical storage and manufacturing processes will significantly increase insurance requirements. Landlord may require additional coverage or restrict chemical quantities.
- Timeline risk: 18 months sounds like plenty of time but isn't — power upgrades alone can eat 9 months. Surface treatment permitting adds more.

## Evaluation Context

When scoring the skill against this scenario, imagine a user typing the initial input above and then responding naturally to the skill's questions. A good skill will:

1. Start with the user's initial statement and systematically fill in the gaps
2. Recognize "surface treatment" as a signal to dig into chemical handling, ventilation, wastewater, and environmental permitting
3. Not accept "good power" — push for specific amperage, understand CNC inrush current
4. Flag the timeline as tighter than it sounds and explain why
5. Surface the ITAR facility requirements proactively
6. Produce a requirement summary that a Houston industrial broker could use to start searching immediately
