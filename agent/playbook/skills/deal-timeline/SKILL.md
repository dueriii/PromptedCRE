---
name: deal-timeline
description: "Use when the user wants a milestone schedule for their deal, asks 'what's next?', or needs to track key dates and deadlines."
---

# Deal Timeline — Know What's Next

Generate a milestone schedule for the user's deal so they know what to do, when to do it, and what deadlines matter.

**Important limitation:** This skill generates a static timeline document. It does not monitor deadlines or send reminders. The user is responsible for tracking dates. Recommend they set calendar reminders for critical deadlines.

## When This Activates

- User asks "what's next?" or "where are we in the process?"
- User has an active deal and needs to plan next steps
- User mentions deadlines, timelines, or scheduling
- User seems unsure what to do after completing a workflow step

## How to Build the Timeline

### Step 1: Determine Current Stage

Check memory.md (or ask the user) for the current deal stage:

| Stage | Typical Activities |
|---|---|
| **Intake** | Defining requirements |
| **Search** | Searching listings, receiving broker recommendations |
| **Survey** | Evaluating specific properties |
| **Compare** | Deciding between shortlisted options |
| **Tour** | Visiting buildings, gathering on-site data |
| **Due Diligence** | Inspections, environmental, title, zoning |
| **LOI** | Drafting, submitting, negotiating LOI |
| **Contract** | Reviewing and negotiating lease or PSA |
| **Closing** | Executing documents, beginning buildout |

### Step 2: Generate Forward-Looking Timeline

Based on the current stage, generate milestones for everything that comes next. Use the template in `reference/templates/deal-timeline.md`.

### Key Dates to Capture

Ask the user for any known dates:
- Target move-in date (work backwards from here)
- LOI response deadline (if submitted)
- Due diligence period expiration (if under contract)
- Financing contingency deadline (if purchasing)
- Lease commencement date (if agreed)
- Buildout / TI construction timeline

### Standard Timeline Estimates

| Phase | Typical Duration | Notes |
|---|---|---|
| Search → shortlist | 2-4 weeks | Depends on market and availability |
| Tours | 1-2 weeks | Schedule 3-5 tours in 1-2 days if possible |
| Due diligence | 2-6 weeks | Phase I ESA is the long pole (3-4 weeks) |
| LOI negotiation | 1-3 weeks | 2-3 rounds typical |
| Lease negotiation | 2-4 weeks | Attorney review adds 1-2 weeks |
| PSA negotiation | 3-6 weeks | More complex than lease |
| Buildout / TI | 4-16 weeks | Depends on scope — simple paint/carpet vs. heavy manufacturing buildout |
| Move-in | 1-2 weeks | Coordinate with operations team |

**Working backwards from move-in:** If the user has a hard move-in date, count backwards to determine when each phase must start. Flag if the timeline is tight.

## Output Format

Use `reference/templates/deal-timeline.md`. Present as a simple table with:

```
## Deal Timeline — [Company Name] / [Property or Market]

Generated: [date]
Target move-in: [date]
Current stage: [stage]

| # | Milestone | Target Date | Status | Notes |
|---|-----------|-------------|--------|-------|
| 1 | Complete intake | [date] | ✅ Done | |
| 2 | Search & shortlist | [date] | ✅ Done | |
| 3 | Tour shortlisted properties | [date] | 🔄 In progress | 3 tours scheduled |
| 4 | Due diligence (Phase I ESA) | [date] | ⬜ Upcoming | Order 4 weeks before deadline |
| 5 | Submit LOI | [date] | ⬜ Upcoming | |
| 6 | LOI negotiation | [date] | ⬜ | Budget 2-3 rounds |
| 7 | Lease/PSA negotiation | [date] | ⬜ | Attorney review needed |
| 8 | Execute documents | [date] | ⬜ | |
| 9 | Buildout begins | [date] | ⬜ | |
| 10 | Move-in | [date] | ⬜ | TARGET |

⚠️ Critical deadlines:
- [DD period expires: date — must decide by this date or lose earnest money]
- [Financing contingency: date]
```

## Timeline Warnings

Flag these automatically:
- **Less than 12 weeks to move-in and no LOI submitted** — timeline is tight, consider accelerating
- **DD period expiring within 1 week** — critical decision point, do not let this lapse
- **Phase I ESA not ordered and closing is within 6 weeks** — Phase I takes 3-4 weeks, order immediately
- **No attorney engaged and contract review is upcoming** — find commercial real estate attorney now (takes 1-2 weeks to engage)

## After Generating

Update memory with the timeline and any critical dates. Recommend the user set calendar reminders for:
1. DD period expiration
2. Financing contingency deadline
3. Any response deadlines on LOIs or contracts

## Transition

- If user needs help with the next milestone → activate the appropriate skill
- If timeline reveals they need to hurry → flag urgency and suggest parallel-tracking steps
- If user asks about costs → `comparison` (deep cost analysis mode)
