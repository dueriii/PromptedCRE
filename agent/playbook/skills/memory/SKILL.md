---
name: memory
description: "Read memory.md at the start of every session. Write to memory.md when intake is confirmed, a preference is shared, a property status changes, or a deal milestone passes."
---

# Memory — Persistent Context

This skill governs how the agent reads and writes `memory.md`. It is the mechanism that makes PromptedCRE smarter over time.

## When to Read

**Always.** Before every task, before every response in a new conversation, read `memory.md`. It tells you:
- Who you're talking to
- What company and deal you're working on
- Where you left off in the workflow
- Any corrections or preferences the user has given you

## When to Write

Write to `memory.md` any time you learn something that should persist:

| Trigger | What to Write |
|---|---|
| Intake confirmed | Full requirement summary (use template below) |
| Property evaluated | Name, address, status (shortlisted / eliminated / reason) |
| User correction | Date + what they said, verbatim or close to it |
| Preference stated | Date + the preference, specific and actionable |
| Major milestone | Date + what happened (tour scheduled, LOI submitted, deal dead) |
| New session, existing deal | Refresh the "Last updated" date and stage |

## How to Write

Find the right section in `memory.md` and update it in place. Don't append duplicate entries — update the existing record.

### New Deal Template

```markdown
## [Company Name] — Active Deal

**Last updated:** YYYY-MM-DD
**Stage:** Intake

### Company
- What they do: [brief description]
- Team size at this location: [number or range]
- Special requirements: [ITAR / food safety / clean room / hazmat / none]

### Requirement Summary
- Size: [SF range]
- Market: [city / submarket]
- Clear height: [minimum ft]
- Power: [voltage / amperage / 3-phase yes/no]
- Loading: [dock-high doors / grade-level doors]
- Yard: [yes/no, how much]
- Budget: [$/SF/yr for lease or total $ for purchase]
- Timeline: [target move-in date]
- Lease or buy: [preference]
- Notes: [anything else that matters]

### Properties in Play
*(None yet)*

### Preferences & Corrections
*(None yet)*

### Open Questions
- [What you still need to move this deal forward]
```

## What NOT to Write

- Generic knowledge (industrial real estate facts, market data)
- Skill workflows — those live in `playbook/skills/`
- Anything that belongs in templates

Memory is for **this user, this deal, this conversation** — not for general knowledge.

## Multi-Deal Support

If the user is running parallel searches (e.g., Houston and Dallas), create separate deal sections:

```markdown
## Apex Precision — Houston Deal
...

## Apex Precision — Dallas Deal
...
```

When the user starts a new conversation, ask which deal they want to work on if multiple are active.

## Platform Fallback (No File Access)

Some platforms (ChatGPT, Claude.ai web, Gemini web) cannot read or write files. On these platforms, memory still works — it just requires the user's help.

### End of Session (no file access)
When the conversation is ending and you have important context to save, output a **memory block**:

> **Save this for next time.** Copy the block below and paste it at the start of your next conversation so I remember where we left off.
>
> ```
> PROMPTEDCRE MEMORY BLOCK — [date]
> Company: [name]
> Stage: [current stage]
> Requirements: [1-line summary]
> Properties: [shortlist with status]
> Preferences: [any corrections]
> Next steps: [what to do next]
> ```

### Start of Session (no file access)
If the user pastes a memory block, parse it and treat it as if you read memory.md. Confirm: "Got it — I remember where we left off. [1-sentence summary]."

If no memory block is provided and no memory.md is available, start fresh and note: "I don't have context from previous conversations. Want to catch me up, or start fresh?"

## Setup

`memory.md` is gitignored to protect deal data. To set up:
1. Copy `memory.template.md` to `memory.md`
2. `memory.md` is yours — it will not be tracked by git

## After Writing

Confirm with a brief note in your response: "I've updated our notes." Don't make a big deal of it. Just do it and move on.
