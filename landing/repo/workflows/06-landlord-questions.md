# Workflow 06 — Landlord Questions: What to Ask Before You LOI
> Version 1.0 | PromptedCRE Industrial Workflows
> ⚡ Load MARKET-CONTEXT.md before running this workflow.

## What This Does
The questions most tenants and buyers never ask — but should. Industrial landlords and sellers will tell you a lot if you ask the right things. This workflow prepares you for the conversation that determines deal terms and surfaces problems before they're your problem.

---

## Prompt

```
You are an industrial real estate advisor preparing me for a negotiation conversation with a landlord or seller. Generate customized questions based on my situation.

My situation: [Leasing / Purchasing]
Property: [Address, SF, asking rate or price, year built]
Landlord/seller type: [Institutional fund / Private investor / Owner-user / Developer]
My leverage: [Strong / Moderate / Weak — and why]
Reference current market conditions from MARKET-CONTEXT.md.

Generate questions in these categories:
```

---

## THE QUESTION BANK

Use these directly or have AI customize them to your situation.

### For Landlords (Leasing)

**Deal Structure**
1. What is your preferred lease term? Is there flexibility for a shorter initial term with options?
2. What TI allowance are you prepared to offer, and what improvements are you willing to fund?
3. How much free rent are you offering, and is it front-loaded or spread across the term?
4. What is your floor on rent — where have deals in this building actually closed vs. asking?
5. Are you open to a stepped rent structure (lower in Year 1, ramping to market)?
6. What are the annual escalation caps written into your standard lease?
7. Is there a personal guarantee requirement? What is your minimum — 1 year, 2 years, full term?
8. Do you have an existing lease form or are you open to the tenant's counsel drafting?

**Building & Operations**
9. What are the actual NNN expense numbers — taxes, insurance, CAM — for the last 12 months?
10. What is the expense cap on controllable expenses in the lease?
11. Who is responsible for HVAC maintenance and replacement? Is there a cap on my repair obligations?
12. When was the roof replaced? Is there a warranty and does it transfer to the tenant?
13. What electrical service is available and can it be upgraded if I need more capacity?
14. Is there a generator or UPS system, and who owns/maintains it?
15. What is the fire suppression design density and is it adequate for [my specific use]?
16. Have there been any water intrusion or flooding events? When? What was done?
17. Are there any environmental issues, prior remediation, or Phase I/II results you can share?
18. What alterations am I permitted to make and what must be restored at lease end?

**Landlord Motivations & History**
19. How long has this space been vacant? Why did the prior tenant leave?
20. What is your current portfolio vacancy? (Reveals whether they need this deal)
21. Is this property in a fund with a defined hold period? When does the fund end?
22. Are there any encumbrances, liens, or planned refinancings I should know about?
23. Do you have other tenants in this building and are there any use restrictions or exclusives that affect me?

**Renewal & Flexibility**
24. What are the renewal option terms and how far in advance must I exercise them?
25. Is there a right of first refusal or first offer on adjacent space if I need to expand?
26. Is there an early termination option? Under what conditions and what is the penalty?
27. Do you have a standard assignment/subletting clause? Will you pre-approve a qualified subtenant?

---

### For Sellers (Purchasing)

**Motivation & History**
1. What is driving the decision to sell? (Timeline pressure, portfolio rebalancing, estate, retirement?)
2. How long have you owned this property and what did you pay for it?
3. Have you had prior offers that fell through? At what price and why did they fail?
4. Is there a defined timeline for closing? Hard deadline or flexible?
5. Are there any partners or co-owners whose approval is required?

**Property Condition**
6. What capital improvements have you made in the last 5 years and what did they cost?
7. What deferred maintenance are you aware of?
8. Has there been any flooding, roof failure, or major structural event? What was done?
9. Are there any active or pending insurance claims?
10. Do you have as-built drawings, prior inspection reports, or Phase I/II we can review?

**Tenancy & Income**
11. Walk me through the current tenant's lease — term, rate, escalations, renewal options.
12. What is the tenant's payment history? Any late payments, defaults, or concessions granted?
13. Is the tenant aware the property is for sale? How is your relationship?
14. What are the tenant's expansion plans or intentions at lease expiration?
15. What NNN expenses does the tenant pay vs. what does the landlord cover?

**Deal Structure**
16. Are you open to seller financing and if so, at what terms?
17. Is there flexibility on the price if I can close quickly / all-cash / with minimal contingencies?
18. What is your preferred closing timeline?
19. Are you open to a leaseback if the property is owner-occupied?
20. What is your basis in the property and are there tax considerations driving your structure preferences? (They may not answer, but worth asking — sometimes opens creative structure conversations)

---

## HOW TO ASK THESE

**For institutional landlords/sellers:** Direct and professional. They've heard everything. Lead with your credibility and timeline. Skip the small talk.

**For private/family owners:** Build rapport first. Ask about the history of the property. They often share more than they intend to if you're genuinely curious. The motivation behind the sale is worth more than any individual answer.

**For owner-users selling:** Treat them like a partner. Their relationship with the building is personal. Acknowledge that. Then go deep on condition — they know every flaw and many will tell you if you ask respectfully.

---

## RED FLAGS IN THEIR ANSWERS

- Vague or evasive answers on NNN expense history → get 3 years of actual operating statements
- "We've had a lot of interest" without specifics → likely posturing
- Prior tenant left before lease expiration → find out why before you proceed
- Roof, flooding, or environmental questions deflected → make Phase I a hard requirement
- Seller unwilling to share prior inspection reports → what are they hiding?
- Unusual urgency to close → find out why. Refinancing due? Fund redemptions? Divorce?

---

## Known Issues
None yet. Log failures in `feedback/KNOWN-ISSUES.md`.
