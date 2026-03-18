# Workflow 03 — Property Survey: Evaluate Properties Against Your Criteria
> Version 1.0 | PromptedCRE Industrial Workflows
> ⚡ Load MARKET-CONTEXT.md before running this workflow.

## What This Does
Gives you a systematic evaluation framework for every property you receive from a broker or find yourself. Stops you from falling in love with a building that has a fatal flaw, and stops you from dismissing a good deal because of something fixable.

---

## Prompt

```
You are an industrial real estate advisor helping me evaluate a property. I'll provide the property details below. Evaluate it systematically against my requirements.

[PASTE YOUR REQUIREMENT SUMMARY FROM WORKFLOW 01 HERE]

[PASTE PROPERTY DETAILS HERE — listing sheet, OM, or just describe what you know]

Produce a structured evaluation:

## PROPERTY: [Address or Name]

### HARD REQUIREMENTS CHECK
For each hard requirement, mark: ✅ Met | ⚠️ Close / Negotiable | ❌ Not Met | ❓ Unknown

| Requirement | My Need | Property | Status |
|---|---|---|---|
| Square footage | [X SF] | [X SF] | |
| Clear height | [X ft min] | [X ft] | |
| Dock doors | [X min] | [X] | |
| Grade level doors | [X min] | [X] | |
| Power | [X amps/KVA] | [X] | |
| Fire suppression | [Type] | [Type] | |
| HVAC | [Req'd] | [Avail] | |
| Yard/outdoor | [Yes/No] | [Yes/No] | |
| Location | [Submarket] | [Submarket] | |
| Availability | [Date] | [Date] | |

**Hard requirement failures:** [List any ❌ items. If any exist, recommend whether to disqualify or investigate further.]

### FINANCIAL CHECK
- Asking rate: $[X]/SF NNN
- Market range for this spec/submarket (from MARKET-CONTEXT.md): $[X]–$[X]/SF NNN
- Assessment: [Below / At / Above market — and by how much]
- Estimated NNN expenses (taxes + insurance + CAM): $[X]/SF (typical for this market: $1.50–$2.50/SF)
- Estimated all-in monthly cost: $[X]/month
- My budget: $[X]/month
- Budget gap (if any): $[X]/month — [Bridgeable or dealbreaker?]

### BUILDING CONDITION FLAGS
Based on what's known, flag potential issues:
- Age of building: [Year] — [Implications for capital expenditure]
- Roof condition: [Known / Unknown — if unknown, flag for inspection]
- Dock levelers / seals: [Known condition]
- Power infrastructure: [Adequate / Needs upgrade]
- Sprinkler system age/type: [Known]
- HVAC condition: [Known]
- Deferred maintenance signals: [Any red flags in listing photos or description]

### LOCATION SCORE
Rate 1–5 on each:
- Highway/interstate access: [Score] — [Specific access points]
- Labor pool: [Score] — [Assessment for your operation type]
- Customer/supplier proximity: [Score] — [Assessment]
- Submarket trajectory: [Score] — [Growing / Stable / Declining and why]
- Overall location: [Score/5]

### DEAL POTENTIAL
- Landlord / seller type: [Institutional / Private / Owner-user selling]
- Listed how long: [X days] — [Implications for negotiating leverage]
- Likely motivation: [What do you know or can infer about why this is available?]
- Estimated negotiating room: [Aggressive / Moderate / Tight — and why]

### VERDICT
**Recommendation:** [Tour immediately / Request more info first / Skip]
**Top 3 reasons to pursue:** [List]
**Top 3 risks:** [List]
**Key unknowns to resolve before touring:** [List]
```

---

## What to Do With the Output
- Any property with ❌ hard requirement failures needs a specific reason to proceed
- Use the financial check to anchor your first offer
- Use Key Unknowns as your pre-tour question list
- Feed shortlisted properties into `04-comparison.md`

## Known Issues
None yet. Log failures in `feedback/KNOWN-ISSUES.md`.
