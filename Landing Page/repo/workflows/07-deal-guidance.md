# Workflow 07 — Deal Guidance: Negotiation Strategy & Structure
> Version 1.0 | PromptedCRE Industrial Workflows
> ⚡ Load MARKET-CONTEXT.md before running this workflow.

## What This Does
Translates everything you've learned into a negotiation strategy. Where to push, where to concede, what to protect, and how to structure your LOI or offer to give yourself the best chance of closing on favorable terms.

---

## Prompt

```
You are an industrial real estate advisor helping me build a negotiation strategy for a specific deal.

[PASTE YOUR REQUIREMENT SUMMARY FROM WORKFLOW 01]
[PASTE THE PROPERTY SURVEY FROM WORKFLOW 03]
[PASTE KEY ANSWERS FROM YOUR LANDLORD/SELLER CONVERSATIONS]

Reference current market conditions from MARKET-CONTEXT.md.

Situation: [Leasing / Purchasing]
My leverage position: [Describe — competing options, timeline flexibility, credit strength, market knowledge]
Landlord/seller motivation: [What you know or have inferred]

Produce a complete negotiation strategy:
```

---

## THE FRAMEWORK

### Step 1 — Establish Your Walk-Away Point

Before you make a single offer, know your number.

**For leasing:**
- Maximum all-in monthly cost: $[X]
- Minimum acceptable lease term: [X years]
- Minimum TI required to make space work: $[X]/SF
- Any hard non-negotiables (specific clause requirements, use restrictions, etc.)

**For purchasing:**
- Maximum purchase price: $[X]
- Minimum cap rate (if tenanted): [X%]
- Maximum price per SF: $[X]
- Financing contingency: [Yes/No — and amount]

Write these down and don't share them.

---

### Step 2 — Assess Your Leverage

**You have leverage when:**
- The space has been on market >90 days
- There are visible or known vacancies in the landlord's portfolio
- You have a competing option (even a weak one — mention it)
- Your timeline is flexible
- You have strong credit and can move quickly
- Market vacancy is rising (more supply than demand)

**You have weak leverage when:**
- You have a hard deadline (lease expiring, current space sold)
- There are other active prospects
- The space is rare for your specs in that submarket
- Market vacancy is very tight (<5%)
- You've already shown too much enthusiasm

**Current market leverage assessment:**
Houston overall vacancy ~6.3% — moderate leverage for tenants. Small-bay infill is tighter — less leverage there. SA/I-35 — some softening, more tenant-friendly than 2022.

---

### Step 3 — Your Opening Position

**The rule:** Your first offer should be aggressive enough to create room to move, but not so aggressive that it insults the landlord and poisons the relationship.

A good rule of thumb: **10–15% below asking on rate for leases, 5–10% below ask on purchase price** depending on days on market and your read of motivation.

**For leasing — LOI term sheet structure:**
```
Premises: [SF]
Term: [X years]
Commencement: [Date]
Base Rent: $[X]/SF NNN (Year 1)
Escalations: [X%] per year
Free Rent: [X months] at commencement
TI Allowance: $[X]/SF (landlord-funded)
Option to Renew: [X] options of [X years] each at [fair market / fixed rate]
Option to Expand: [Right of first refusal on Suite X]
Early Termination: [After Year X with X months notice + X months rent penalty]
Delivery Condition: [As-is / with specific improvements by landlord]
Personal Guarantee: [X months rent]
```

**For purchasing — LOI / offer structure:**
```
Purchase Price: $[X]
Earnest Money: $[X] (hard at day [X] / soft through inspection period)
Inspection Period: [X days]
Financing Contingency: [Yes/No — [X] days]
Closing Date: [X days from executed PSA]
Seller Representations: [List key reps you need]
Excluded items: [Any personal property you want removed]
Leaseback (if applicable): [Terms]
```

---

### Step 4 — Concession Strategy

Know in advance what you'll give up and in what order. Never give a concession without getting something in return.

**Concession hierarchy for leasing (give these up in this order):**
1. Free rent months (reduce from 4 to 3 to 2)
2. TI allowance (reduce from ask, or convert to above-market base rent)
3. Personal guarantee (extend from 1 year to 2 years)
4. Term length (extend if landlord needs longer commitment)
5. Escalation rate (accept 3% instead of 2.5%)
6. Base rent (last to move — protect this hardest)

**What to get in return for each concession:**
- Give up free rent → get faster delivery / sooner commencement
- Give up TI → get base rent reduction
- Give longer guarantee → get renewal options at locked rates
- Give longer term → get expansion rights or early termination option

---

### Step 5 — Deal Killers to Protect Against

These clauses can turn a good deal into a nightmare. Know them before you sign anything.

**For leases:**
- **No expense cap** on NNN — landlord can pass through any cost increase. Negotiate: cap controllable expenses at 5% annual increase.
- **No subletting rights** — you're trapped if your business changes. Negotiate: right to sublet with landlord approval (not to be unreasonably withheld).
- **Unlimited HVAC replacement liability** — you could inherit a $50K–$150K replacement bill. Negotiate: cap tenant HVAC responsibility at $X/year; landlord replaces if system fails.
- **Personal guarantee for full lease term** — 10-year guarantee on a struggling business is catastrophic. Negotiate: 1–2 years, or a burn-down guarantee.
- **Restoration clause with no definition** — "restore to original condition" is blank-check liability. Define what alterations require restoration upfront.
- **No early termination option** — if your business doubles, you're trapped. Try to get a window starting Year 3–5.

**For purchases:**
- **Short inspection period** — 15 days is not enough for industrial. Push for 30–45 days.
- **Hard earnest money too early** — try to keep money soft through full inspection period.
- **No environmental reps** — if seller won't represent clean title and no known environmental issues, walk away or price it in.
- **No roof/mechanical reps** — at minimum, get a roof inspection contingency.

---

## LOI DRAFTING PROMPT

```
Draft a Letter of Intent for the following industrial real estate [lease / purchase] based on these terms:

Property: [Address]
Transaction type: [Lease / Purchase]
[Paste your term sheet from Step 3]

Format as a professional but non-binding LOI. Include:
- Standard non-binding language
- Exclusivity period request ([15/30] days)
- My company name and signatory
- Deadline for landlord/seller to respond ([X] days)

Tone: direct and professional. Not aggressive. Show I'm a serious, credible counterparty.
```

---

## Known Issues
None yet. Log failures in `feedback/KNOWN-ISSUES.md`.
