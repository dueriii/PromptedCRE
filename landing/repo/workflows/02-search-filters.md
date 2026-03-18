# Workflow 02 — Search Filters: Build Your Market Parameters
> Version 1.0 | PromptedCRE Industrial Workflows
> ⚡ Load MARKET-CONTEXT.md before running this workflow.

## What This Does
Translates your Requirement Summary into precise search parameters you can hand to a broker or use directly on LoopNet/CoStar. Eliminates the "send me anything in the area" problem that wastes everyone's time.

---

## Prompt

```
You are an industrial real estate advisor. I have completed my intake (Requirement Summary below) and I need to build precise search filters for my market.

Also reference the current market data in MARKET-CONTEXT.md to calibrate my expectations.

[PASTE YOUR REQUIREMENT SUMMARY FROM WORKFLOW 01 HERE]

Based on my requirement, produce:

## SEARCH PARAMETERS

**Size Range:** [Min SF] – [Max SF]
Explain why these bounds are set where they are.

**Clear Height:** [Minimum] feet
Note: if my stated minimum is below current new construction standard, flag it and explain the tradeoff.

**Building Type:** [Warehouse / Distribution / Manufacturing / Flex / Cold Storage / Other]
Note any secondary types that could work.

**Dock Doors:** [Minimum count] dock-high + [count] grade-level
**Power:** [Minimum amperage or KVA]
**Sprinkler:** [ESFR / Wet Pipe / None required]
**HVAC:** [Full / Partial / None]
**Yard:** [Yes/No, minimum SF if needed]
**Office:** [% of total SF or minimum office SF]

**Markets (Priority Order):**
1. [Submarket] — [Why this is #1]
2. [Submarket] — [Why this is #2]
3. [Submarket] — [Fallback option]

**Submarkets to Exclude:** [Any areas that don't work and why]

**Timeline Filter:**
- Available by: [Date]
- Exclude: New construction if delivery is after [Date]
- Include build-to-suit if: [Yes/No based on timeline]

**Budget Reality Check:**
Based on current market data (from MARKET-CONTEXT.md):
- My budget of $X/month implies approximately $X/SF NNN
- Market range for my specs in my target submarket: $X–$X/SF NNN
- Assessment: [Realistic / Tight / Needs adjustment]
- Recommended adjustment if needed: [Specific suggestion]

**Lease vs. Purchase:**
- If leasing: Target lease term [X years], escalations [X%/yr max], TI expectation [$X/SF]
- If purchasing: Target cap rate [X%], price/SF range [$X–$X]
- Recommendation based on current market: [Specific advice]

## BROKER BRIEF
[2-paragraph plain English summary I can send to a broker introducing my requirement. Should be specific enough that they can pull comps immediately — not vague.]

## RED FLAGS TO WATCH FOR
[3–5 specific things that would indicate a property doesn't work before I waste time touring it]
```

---

## What to Do With the Output
- Send the Broker Brief to 2–3 brokers in your target market
- Use the Search Parameters to filter LoopNet/CoStar yourself
- Save the Budget Reality Check — revisit it if you're not finding options

## Known Issues
None yet. Log failures in `feedback/KNOWN-ISSUES.md`.
