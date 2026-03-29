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

**Every filter value must be filled in with specific numbers from the confirmed intake.** No brackets, no "TBD", no "discuss with broker." If intake didn't capture a value needed for a filter, skip that filter — don't leave it blank. The user should be able to copy-paste these filters directly into CoStar or an email.

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

### Unfilterable Dealbreakers — Include in Every Broker Email

These specs eliminate buildings but can't be filtered on any platform. Pull them from the confirmed intake and list them explicitly in broker outreach. If any of these are hard requirements, say so — brokers will pre-screen for you.

| Spec | What to Specify | Why It Kills Deals |
|---|---|---|
| **Floor Load / Slab Thickness** | Minimum slab depth (e.g., 6" for CNC/heavy equipment) | Older buildings may have 4" slabs — can't support heavy machinery without costly reinforcement |
| **Floor Drains** | Required? Connected to sanitary sewer? Industrial discharge permitted? | Manufacturing with wet processes (plating, anodizing, wash-down) needs drains + discharge permits. Retrofitting is $10-20/SF. |
| **Ventilation / Exhaust** | Dedicated fume extraction? OSHA-compliant exhaust for chemicals? | Chemical handling (surface treatment, painting, solvent use) requires engineered exhaust. Adding it post-hoc is $15-30K+ per zone. |
| **Compressed Air** | CFM requirement, PSI, number of drops | CNC, pneumatic tools, automated lines need plant air. Running new lines is minor; insufficient supply air is not. |
| **Truck Court Depth** | Minimum depth (120'+ for 53' trailers, 130'+ if full turns needed) | If trucks can't maneuver, the building doesn't work. Can't fix this. |
| **Zoning — Specific Use** | Manufacturing allowed? Chemical processing? Food production? | Many industrial parks restrict chemical use, heavy manufacturing, or food processing. Zoning kills deals quietly — verify before touring. |
| **Column Spacing** | Minimum bay size for racking layout or equipment footprint | Narrow column spacing (e.g., 30'x40') limits racking configurations and forklift aisle layouts |

> **Rule:** If intake flagged ANY of the specs above as hard requirements, they MUST appear in the broker outreach email. Do not rely on the user to remember — pull them from the requirement summary and include them.

### Broker Outreach Script

Draft a ready-to-send email the user can copy-paste to local brokers. Fill in ALL values from the confirmed intake — the user should not need to edit anything except adding their name.

Structure the email as:
1. Who they are and what they do (one sentence)
2. Size, market, and timeline
3. Top 3-4 filterable specs (clear height, loading, power)
4. Unfilterable dealbreakers from the table above (floor load, zoning, floor drains, etc.)
5. Ask for availabilities

Example for a precision manufacturing company:

> Subject: 30,000 SF Manufacturing Space — Houston Metro
>
> Hi [Broker Name],
>
> We're a precision machining and surface treatment manufacturer looking for 25,000–35,000 SF of manufacturing space in the Houston metro, ideally near I-45 or I-10 corridors. Target occupancy: Q3 2027.
>
> Key requirements: 480V 3-phase / 800A minimum service, 28'+ clear height, 4 dock-high doors + 2 grade-level doors, 130' truck court.
>
> Critical: Must have 6" slab (heavy CNC equipment), floor drains connected to sanitary sewer (we do anodizing/plating), zoning that permits chemical processing, and space for dedicated fume extraction. ITAR-registered facility — need controlled access capability.
>
> Can you send us what you're seeing, including anything coming available in the next 6 months?
>
> Thanks,
> [Name]

### Tighten Your Search by Use Type

After presenting the generic tiers, add use-type-specific guidance based on what the user actually does. This tells them which filters matter most and what to prioritize when results are overwhelming.

| If the user does... | Prioritize these filters | Deprioritize these | Search tip |
|---|---|---|---|
| **CNC / precision machining** | Power (480V/3-phase, high amperage), floor load (6"+ slab), compressed air | Clear height (machines are floor-level), year built | Search for "manufacturing" subtype, not "warehouse." Former machine shops are ideal — they already have the power and slab. |
| **Surface treatment / plating / coating** | Zoning (chemical processing), floor drains, ventilation/exhaust | Loading (typically lower volume), crane | Call the city planning department to confirm zoning BEFORE touring. Also ask the listing broker if the building has prior environmental issues — plating tenants inherit liability. |
| **Distribution / 3PL / warehousing** | Clear height (28'+), loading (dock count), truck court depth | Floor drains, compressed air, heavy power | Filter aggressively on clear height and dock count — these are your throughput drivers. |
| **Assembly / kitting / light manufacturing** | Loading (mix of dock + grade-level), office % (QC/admin space), column spacing | Heavy power, floor drains | Flex buildings often work well and are cheaper per SF than pure manufacturing spec. |
| **Food production / cold storage** | Zoning (food production), floor drains, USDA/FDA facility requirements | Crane, rail | Health department permitting adds 3-6 months. Budget for it in your timeline. |

> **Rule:** Identify the user's primary use type from intake and include the relevant row's search tips in your output. If the user has mixed operations (e.g., machining + surface treatment + shipping), combine the guidance from each relevant row.

### Pre-Search Red Flags

Before the user starts searching, review the confirmed intake for these risk patterns. If any apply, warn the user — these can eliminate buildings or blow timelines even after a lease is signed.

| Risk Pattern | Trigger from Intake | What to Tell the User |
|---|---|---|
| **Power upgrade lead time** | Requirement exceeds 400A or specifies 480V 3-phase in an older submarket | "Transformer upgrades cost $50K-$200K and take 6-12 months. If your timeline is tight, prioritize buildings that already have the power capacity you need — don't count on upgrading." |
| **Environmental exposure** | User's operations involve chemicals, plating, painting, solvents, or fuel | "Your operations generate regulated waste. Ask the listing broker for the building's Phase I ESA history. Prior contamination = your liability risk. And you'll need your own discharge permits — budget 3-6 months for permitting." |
| **Zoning elimination** | Chemical processing, food production, heavy manufacturing, or hazmat storage | "Many industrial parks restrict your use type. Before touring, confirm the zoning code allows [specific use]. This single check eliminates 30-50% of listings in most markets." |
| **Timeline compression** | Manufacturing TI buildout with <24 months until occupancy | "Manufacturing buildouts take 6-9 months for TI construction, plus 2-3 months to negotiate the lease, plus permitting. Start your search immediately — you have less runway than it feels like." |
| **Insurance and landlord restrictions** | Chemical storage, heavy machinery, ITAR/classified work, food processing | "Some landlords won't lease to tenants with chemical storage, classified work requirements, or high-hazard operations. Ask upfront before investing time in a building." |

> **Rule:** Surface these warnings BEFORE presenting the search filters. The user should know what's going to be hard about their search before they start it.

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
