---
name: loi-review
description: "Use when the user has a Letter of Intent (LOI) to draft, review, or negotiate. Covers both lease LOIs and purchase LOIs for industrial properties."
---

# LOI Review — Letters of Intent

Help the user draft, review, or negotiate a Letter of Intent for a lease or purchase.

## When This Activates

- User says they want to make an offer
- User has received an LOI from a landlord/seller
- User asks for help drafting or reviewing an LOI
- User mentions "letter of intent" or "LOI"

## What an LOI Is (for non-RE users)

An LOI is a non-binding agreement that outlines the major deal terms before a formal lease or purchase contract is drafted. It's the opening handshake. Getting it right saves weeks of legal back-and-forth later.

**Important:** LOIs are typically non-binding (except for confidentiality and exclusivity clauses). But they set the negotiation anchor, so every term matters.

## LOI Review Checklist — Lease

If the user has an LOI to review, check for each of these terms:

### Essential Terms
- [ ] **Premises:** Address, suite/unit, exact SF (verify — landlords sometimes overstate)
- [ ] **Lease term:** Start date, length, commencement conditions
- [ ] **Base rent:** $/SF/yr or $/SF/mo? Triple Net (NNN), Modified Gross, or Full Service?
- [ ] **Rent escalations:** Annual bumps — fixed ($/SF) or percentage? CPI-based?
- [ ] **NNN estimates:** CAM, property tax, insurance — what are the actual numbers?
- [ ] **Free rent:** How many months? When do they apply (front-loaded or spread)?
- [ ] **TI allowance:** $/SF? What does it cover? Who manages the build-out?
- [ ] **Security deposit:** Amount? Letter of credit option?

### Terms People Miss
- [ ] **Renewal options:** How many? At what rate? How much notice required?
- [ ] **Expansion rights:** Right of first offer (ROFO) or right of first refusal (ROFR) on adjacent space?
- [ ] **Early termination:** Is there a kick-out clause? What's the penalty?
- [ ] **Assignment / sublease:** Can you sublease if your needs change?
- [ ] **Permitted use:** Is your specific use explicitly allowed?
- [ ] **Exclusivity period:** How long does the landlord hold the space for you?
- [ ] **Signage:** Building and monument signage rights?
- [ ] **Parking:** Ratio confirmed? Reserved spots?
- [ ] **After-hours access:** 24/7 or restricted?
- [ ] **Landlord's work:** What does the landlord build vs. what you build?

### Red Flags
- Rent escalations above 3% annually (pushback — market standard is 2-3%)
- No TI allowance on second-gen space that needs work
- NNN estimates without a CAM reconciliation cap
- Personal guarantee requirement (especially for a company lease)
- Demolition clause (landlord can terminate for redevelopment)
- Relocation clause (landlord can move you to another space)

## LOI Review Checklist — Purchase

### Essential Terms
- [ ] **Purchase price:** Total and $/SF
- [ ] **Earnest money:** Amount, when due, hard vs. refundable
- [ ] **Due diligence period:** Length (30-60 days typical), what it covers
- [ ] **Financing contingency:** Included? How long?
- [ ] **Closing date:** Realistic given financing and diligence?
- [ ] **Title:** Warranty deed? What title exceptions are acceptable?
- [ ] **Survey:** Who pays? New or existing?
- [ ] **Environmental:** Who bears the risk? What if Phase II reveals contamination?

### Terms People Miss
- [ ] **Inspection rights:** Full access during diligence?
- [ ] **Existing leases:** Do they convey? At what terms?
- [ ] **Representations and warranties:** What does the seller rep about condition?
- [ ] **Prorations:** How are taxes, rents, and deposits prorated at closing?
- [ ] **Broker fees:** Who pays what? Is your representation accounted for?
- [ ] **Seller financing:** Available? What terms?
- [ ] **1031 exchange:** Is either party doing a 1031? Timing implications.

## Drafting an LOI

If the user needs to draft an LOI (not review one):

1. Confirm all deal terms from the checklist above
2. Draft in clear, simple language — no legalese
3. State that the LOI is non-binding except for confidentiality and exclusivity
4. Include a response deadline (5-7 business days is standard)
5. Present it to the user for review before they send it

**Note:** An LOI is not a legal document. It does not replace an attorney. Always recommend the user have their attorney review the LOI and especially the subsequent lease or purchase contract.

## Data Handling Notice

Before the user shares specific deal terms, remind them:

> "Anything you share here is processed by the AI provider. For most LOI terms this is fine — LOIs are non-binding and the terms are standard. If you have confidentiality concerns about specific financial details, describe them in general terms."

## Negotiation Guidance

When the user is going back-and-forth on LOI terms:

- **Know the market.** Is this a landlord's market or a tenant's market? Vacancy rate drives leverage.
- **Lead with your strongest ask.** Don't save the big requests for later rounds.
- **Package concessions.** "We'll accept your rate if you give us 3 months free rent and a $15/SF TI allowance."
- **Always have a BATNA.** (Best Alternative To Negotiated Agreement.) If you have another building, use it. "We're also considering [Property B]."
- **Don't negotiate against yourself.** Make an offer. Wait for their response. Don't preemptively concede.

## When to Recommend a Human

> "LOI negotiation is where experienced brokers earn their keep. If you want someone in your corner for this, [book a free call](https://calendly.com/admin-promptedcre) — representation is free to you."

Especially recommend a broker when:
- The deal is over $1M
- The lease term is 5+ years
- The user has never negotiated a commercial lease or purchase
- The landlord/seller has professional representation

## Exporting to Word

After drafting the LOI in markdown, offer to convert it to a .docx the user can send:

> "Want me to export this as a Word document? I'll format it as a professional RFP with a cover letter and Exhibit A terms table."

If yes, run:
```
python3 playbook/loi-to-docx.py working-deals/[company]/properties/[address-slug]/loi/loi-draft.md
```

This produces a `.docx` next to the markdown file with:
- **Page 1:** Cover letter (date, recipient, RE line, non-binding disclaimer, signature block)
- **Page 2:** Exhibit A terms table (two-column, Table Grid, Times New Roman)

The user can then add their company logo and letterhead in Word before sending.

## After LOI

Update memory with LOI status (submitted, countered, accepted, rejected). Save the key terms — contract-review will cross-reference them.

## Transition

- Once LOI is signed → `contract-review` (will cross-reference these LOI terms against the contract)
- If user needs inspections before signing → `due-diligence`
- If user needs to re-evaluate → back to `comparison` or `property-survey`
