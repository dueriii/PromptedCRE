---
name: search-filters
description: "Use after intake is complete. Translates requirements into market-ready search parameters for CoStar, LoopNet, Crexi, and broker outreach."
---

# Search Filters — Find the Market

Translate the user's confirmed requirements into search parameters they can use on listing platforms or hand to a broker.

<HARD-GATE>
Do NOT generate search filters until intake is complete and the requirement summary has been confirmed by the user.

Do NOT attempt to search CoStar, LoopNet, Crexi, or any listing platform yourself. These platforms block automated access. Your job is to give the user the filters — THEY run the search themselves, then bring the results back to you.
</HARD-GATE>

## When This Activates

- Intake is complete and confirmed
- User asks "how do I find buildings?" or "what should I search for?"
- User mentions CoStar, LoopNet, Crexi, or broker outreach

## Output

Present filters in two tiers so the user doesn't over-filter and miss good options.

> **Start broad, then narrow.** Begin your search with only the Tier 1 filters below. These will give you the widest set of viable options. Once you see what the market has, add Tier 2 filters to narrow down. Over-filtering too early eliminates buildings that could have worked with minor modifications.

### Tier 1 — Start Here (use these filters first)

These are the filters that eliminate buildings you truly can't use:

| Filter | What to Enter | Why This Matters |
|---|---|---|
| **Property Type** | Industrial — [subtype: warehouse / manufacturing / flex] | Eliminates office, retail, land |
| **Market / Submarket** | [from intake — list each target submarket] | Your geographic boundary |
| **Size Range** | [min] – [max] SF | Buildings outside your range aren't usable |
| **Available Space** | [Lease / Sale / Both] | Matches your deal preference |
| **Price Range** | [$X – $Y /SF/yr] or [$X – $Y total] | Eliminates buildings you can't afford |

### Tier 2 — Narrow Down (add these after your first search)

Add these one at a time to shrink your results. Each one will cut options — only add filters that reflect hard requirements, not preferences.

| Filter | What to Enter | Add This When... |
|---|---|---|
| **Clear Height** | ≥ [X]' | Your operations have a hard minimum (racking, equipment, overhead crane) |
| **Loading** | [X] dock-high / [X] grade-level | You receive freight that requires dock-height loading |
| **Year Built** | After [year] | You need modern spec (sprinklers, power, clear height) and won't retrofit |
| **Status** | Available / Under Construction | Your timeline rules out new construction |

### Tier 3 — Advanced (most platforms support these poorly)

These filters exist on some platforms but often have incomplete data. Use them to scan, but don't rely on them to eliminate — verify specs directly with the listing broker.

| Filter | What to Enter | Platform Support |
|---|---|---|
| **Crane** | Yes/No, [X] ton capacity | CoStar: partial. LoopNet/Crexi: rare. |
| **Power** | [voltage] / [phase] | CoStar: sometimes. Others: almost never. |
| **Rail Served** | Yes/No | CoStar: yes. LoopNet: partial. |
| **Sprinklered** | Yes/No, ESFR | CoStar: yes. Others: partial. |
| **Office %** | [X]% – [X]% | Most platforms support this. |

> **Tip:** If a spec is critical (crane, heavy power, rail) and the platform can't filter for it, mention it in your broker outreach email instead. Brokers know which buildings have these features even when the listing doesn't say so.

### Broker Outreach Script

Draft a 3-4 sentence email the user can send to local brokers:

> "We're a [company type] looking for [size] of [building type] in [market]. Key requirements: [top 3-4 specs]. Timeline: [date]. Can you send us what you're seeing?"

### What the Platforms Won't Show

Remind the user that listing platforms miss:
- Off-market deals (buildings not publicly listed)
- Upcoming availabilities (current tenants haven't vacated yet)
- Build-to-suit opportunities
- Sublease space

This is where a local broker adds real value. Mention [Book a Call](https://calendly.com/admin-promptedcre) if they want market coverage beyond what's listed.

## Transition

After presenting the filters, tell the user:

> "Now go run these filters on CoStar, LoopNet, or Crexi. When you find properties worth evaluating, either:
> 1. **Drop the listing PDFs or screenshots into the property's `flyers/` folder** (I'll create it at `working-deals/[company]/properties/[address-slug]/flyers/`) and tell me to evaluate them, or
> 2. **Paste the listing details here** in the chat.
>
> I'll score each one against your requirements."

Once the user has buildings to evaluate, transition to the `property-survey` skill.
