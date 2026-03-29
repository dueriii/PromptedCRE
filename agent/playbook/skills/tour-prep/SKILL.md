---
name: tour-prep
description: "Use when the user is about to tour or visit a building. Generates a pre-tour checklist, observation guide, and questions to ask on-site."
---

# Tour Prep — Before You Walk the Building

Prepare the user to get maximum value from a property tour.

## When This Activates

- User says they're going to visit / tour a building
- User has selected a shortlist and wants to see them in person
- User asks "what should I look for?"

## Before Generating the Checklist

Check memory.md (or ask the user) for an existing Property Card for this building. If one exists, pull out:
- **Open questions** from the property survey — these become priority items to investigate on-site
- **Gaps in specs** — things the listing didn't specify that you need to verify in person
- **Red flags** — anything concerning from the initial evaluation

If no Property Card exists, note which specs are unknown and flag them in the observation guide.

## Pre-Tour Checklist

### Before You Go
- [ ] Confirm tour date/time with listing broker or landlord
- [ ] Get the listing broker's cell phone (in case you can't find the building)
- [ ] Download or print the property flyer / listing sheet
- [ ] **Review your Property Card** for this building (from property-survey) — bring the open questions list
- [ ] **Print or save the comparison matrix** if comparing multiple buildings on the same tour day
- [ ] Bring a tape measure or laser measurer
- [ ] Wear closed-toe shoes (warehouse floors, loading docks)
- [ ] Bring your phone — take photos of EVERYTHING

### On-Site Observation Guide

Walk through these in order:

#### Exterior (5-10 min)
- [ ] Truck court: Can a 53' trailer turn around? How deep?
- [ ] Loading doors: Count dock-high and grade-level. Condition of levelers and seals.
- [ ] Yard / outside storage: Fenced? Paved or gravel? Drainage?
- [ ] Parking: Count spaces. Condition of lot. Employee vs. visitor.
- [ ] Roof: Age? Material? Any visible patches, ponding, or equipment?
- [ ] Signage: Visibility from the road?
- [ ] Neighboring uses: Anything concerning? (chemicals, heavy traffic, noise)

#### Interior — Warehouse (10-15 min)
- [ ] Clear height: Does it match the listing? Measure if possible.
- [ ] Column spacing: Walk the grid. Will your racking / equipment fit?
- [ ] Floor condition: Cracks, joints, levelness? Sealed or unsealed?
- [ ] Lighting: Type (LED, fluorescent, HID)? Adequate for your operations?
- [ ] Power: Find the main electrical panel. Read the specs. Take a photo.
- [ ] Fire suppression: Sprinkler type? ESFR? Adequate for your inventory?
- [ ] Crane: If present — type, capacity, span, runway condition
- [ ] HVAC: Warehouse heated? Cooled? Fans? Adequate ventilation?
- [ ] Restrooms: Count, condition, ADA compliance

#### Interior — Office (5 min)
- [ ] Layout: Private offices vs. open plan? Fits your team?
- [ ] Condition: Move-in ready or needs renovation?
- [ ] Restrooms, break room, conference room
- [ ] IT: Data wiring, server room, internet access points

### Photos to Take
1. Every loading door (inside and out)
2. Electrical panel (close-up of specs)
3. Roof condition (from ground + interior underside)
4. Column spacing (stand at one column, photo toward the next)
5. Floor condition (especially any cracks or damage)
6. HVAC equipment
7. Truck court (wide shot showing turning radius)
8. Office areas
9. Any damage, deferred maintenance, or concerns
10. Exterior / street view (for your team back at the office)

### Questions to Ask the Tour Guide

- What's the age of the roof? Last replaced?
- Any environmental issues? Phase I/II done?
- What's the HVAC capacity? Age of units?
- Who pays for what in NNN? Get the CAM/tax/insurance breakdown.
- Any restrictions on use, hours, or noise?
- What's the landlord's TI budget? Willing to build out?
- How long has it been vacant? Why did the last tenant leave?
- What other offers are you seeing?
- What's the landlord's timeline — how motivated are they?

## After the Tour

Rate the property on your three dimensions (Location / Pricing / Functionality) based on what you saw. Update the Property Card with your observations.

If touring multiple buildings, keep notes fresh — tour fatigue causes you to blend buildings together. Write your top impression of each building within 30 minutes of leaving.

## After the Tour — Memory Update

Update memory with tour observations: what stood out, what concerned you, and your updated dimension scores.

## Transition

- After tours, if the user has follow-up questions → `landlord-questions` (focus on issues discovered during the tour)
- If the user needs inspections before deciding → `due-diligence` (especially if environmental, structural, or roof concerns were noted)
- If the user is ready to make an offer → `loi-review`
- If the user needs to re-compare → `comparison`
