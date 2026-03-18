# Workflow 05 — Tour Prep: What to Look For Before You Walk In
> Version 1.0 | PromptedCRE Industrial Workflows

## What This Does
Most people tour buildings and notice aesthetics. This workflow makes sure you observe what actually matters — the things that will cost you money or kill the deal after you've signed.

---

## Prompt

```
You are an industrial real estate advisor preparing me for a property tour. Generate a customized pre-tour checklist and observation guide based on my operation type and requirements.

My operation: [Brief description — what you do, how you use space]
Property: [Address, SF, year built, asking rate, any known details]
Key concerns going in: [Any specific things you're worried about]

Produce:

## PRE-TOUR HOMEWORK (Do before you arrive)
- [ ] Pull the property on county appraisal district — verify ownership, assess value vs. ask
- [ ] Check flood zone (FEMA FIRM maps) — is the property in Zone AE or X?
- [ ] Google Street View the truck court and parking — are there obvious access issues?
- [ ] Review the last 3 years of listing history — how long has it been available? Prior asking rates?
- [ ] Research the landlord / seller — how many properties do they own? Reputation?
- [ ] Ask the broker: When was the roof last replaced? Any active roof warranty?
- [ ] Ask the broker: What are current NNN expenses (taxes + insurance + CAM) — get actual numbers

## EXTERIOR OBSERVATIONS (First 5 minutes)

### Truck Court & Access
- [ ] Measure truck court depth (or estimate) — standard is 120–130'. Anything under 100' limits trailer maneuverability
- [ ] Count dock doors — match to listing. Are they functioning?
- [ ] Check dock levelers — are they mechanical or hydraulic? Visible wear?
- [ ] Check dock seals/bumpers — cracked or missing seals = energy loss + pest issues
- [ ] Grade level doors — are they where you need them? Grade level to interior floor match?
- [ ] Parking — count spaces. Adequate for your workforce?
- [ ] Truck parking / staging — room for trailers? Secured yard space?
- [ ] Lot condition — pavement cracking, drainage issues, standing water marks?

### Building Envelope
- [ ] Roof visible from ground — any obvious patches, standing water, ponding marks on walls?
- [ ] Wall panels — any buckling, rust streaks, cracks (especially in tilt-wall or metal buildings)?
- [ ] Gutters and downspouts — connected and functional?
- [ ] Exterior lighting — adequate for your operations and security?

## INTERIOR OBSERVATIONS

### Structural
- [ ] Column spacing — does it work for your racking layout or equipment?
- [ ] Clear height — physically verify with a laser measure or ask for as-built drawings. Don't trust listing.
- [ ] Floor condition — walk the full floor. Cracks, settled areas, joint condition?
- [ ] Floor flatness — critical for high-reach forklift operations
- [ ] Slab thickness — ask for as-built. Min 5" for most industrial; 6–7" for heavy equipment

### Mechanical & Electrical
- [ ] Electrical panel — locate main panel. Is it adequate amperage? Room for expansion?
- [ ] Lighting — LED or older T5/T8 fluorescent? Who owns the fixtures?
- [ ] HVAC units — age, condition, who is responsible for maintenance under this lease?
- [ ] Compressed air lines — if present, condition and coverage
- [ ] Plumbing — adequate restrooms for your workforce? Floor drains where needed?
- [ ] Sprinkler system — ESFR vs. wet pipe. Where are the heads? Any visible corrosion on pipes?

### Fire & Life Safety
- [ ] Fire suppression coverage — full building or partial?
- [ ] Emergency exits — count and verify they're accessible
- [ ] Fire extinguisher stations — present and current inspection tags?

## QUESTIONS TO ASK ON TOUR

Ask the broker or building rep these directly. Write down the answers.

**About the building:**
1. When was the roof replaced and is there a warranty transferable to a new tenant?
2. What are the actual NNN expense numbers for the last 12 months?
3. Has the building had any flooding or water intrusion? When was it last?
4. What is the electrical service — amps, voltage, phases?
5. Who maintains the HVAC and what is the current condition?
6. Are there any known environmental issues or prior Phase I/II results available?
7. What is the fire suppression design density and is it adequate for my use?

**About the deal:**
8. How long has this been on the market at current pricing?
9. Are there other active prospects? (Take with a grain of salt but ask)
10. What is the landlord's/seller's timeline and flexibility on occupancy date?
11. Has any TI work been done recently or is there budget for improvements?
12. What is the current asking rate vs. where deals are actually closing in this building/complex?

## RED FLAGS — WALK AWAY OR RENEGOTIATE HARD

Note anything you observe in these categories:
- [ ] Roof: active leaks, excessive patching, ponding marks on interior floor
- [ ] Floor: major cracks, settled areas, oil contamination
- [ ] Electrical: undersized service with no room to expand
- [ ] Flooding: evidence of water lines on walls, efflorescence, musty smell
- [ ] Deferred maintenance: pattern of neglected repairs signals a difficult landlord
- [ ] Environmental: stained concrete, buried tanks visible in yard, chemical smell

## POST-TOUR NOTES TEMPLATE

Fill out immediately after leaving — memory fades fast.

**Overall impression (gut):** 
**Biggest positive:**
**Biggest concern:**
**Deal-killers observed:**
**Items to verify before proceeding:**
**Negotiating leverage identified:**
**Next step:**
```

---

## Known Issues
None yet. Log failures in `feedback/KNOWN-ISSUES.md`.
