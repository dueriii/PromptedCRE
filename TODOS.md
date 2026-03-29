# TODOS

## From Eng Review — 2026-03-28

### 1. Create DOGFOOD-SCORECARD.md
**What:** Structured scoring template for the 12 agent skills — columns for accuracy, actionability, forwardability, plus specific failure notes.
**Why:** Without a structured place to record results, dogfood findings evaporate. Pass/fail needs to be captured immediately after each skill run.
**Pros:** Trivial effort, gives clear pass/fail visibility, makes re-test tracking easy.
**Cons:** One more file to maintain (but it's a one-time artifact, not ongoing).
**Context:** Agreed during eng review (Issue 3, Option 3A). Create before dogfooding starts. Template should have one row per skill, three scoring columns, notes column, and a re-test status column.
**Depends on:** Nothing. Do first.

### 2. Deprecate repo/workflows/ — consolidate to agent-only
**What:** Move useful content from `repo/` (MARKET-CONTEXT.md, GLOSSARY.md, INCENTIVES.md, BROKER-GUIDE.md, 00-quick-start.md) into `agent/`. Remove or archive the 8 workflow files in `repo/workflows/`.
**Why:** Eng review chose Option 2C — agent/skills/ is the product. Maintaining two systems (repo workflows + agent skills) means every fix must be made twice. The agent skills are strictly deeper after Phase 0-3 work.
**Pros:** Eliminates DRY violation, single source of truth, every future fix lands in one place.
**Cons:** repo/workflows/ works as standalone paste-into-ChatGPT prompts; losing that simplicity. May need to update README, landing page, and GitHub repo description.
**Context:** Decision made during eng review (Issue 2, Option 2C). Do AFTER dogfooding proves the agent works. The useful repo/ reference files (market data, glossary, incentives, broker guide) should move into agent/ or a shared top-level location.
**Depends on:** Dogfooding complete + agent skills validated.

### 3. Refresh MARKET-CONTEXT.md and remove "auto-refreshed" claim
**What:** Update market data (last updated 2026-03-15, now 13 days stale). Remove the misleading "Auto-refreshed weekly" header — it's a static file with no automation.
**Why:** Skills 02-07 all consume this file. Stale data = wrong financial outputs during dogfooding. The "auto-refreshed" claim sets false expectations.
**Pros:** Accurate market data improves every skill's output quality. Honest header prevents user confusion.
**Cons:** Manual refresh takes research time. Industrial market data doesn't move fast — 13 days may not matter for Q1 2026 numbers.
**Context:** Header currently says "Auto-refreshed weekly. Last updated: 2026-03-15. Do not edit manually." — none of this is true. Do before dogfooding so financial outputs are accurate.
**Depends on:** Nothing. Can be done in parallel with scorecard creation.

### 4. Write cold email template for Buildlist.xyz outreach
**What:** 3-4 sentence cold email template linking to promptedcre.com. Personal tone, targeted at C-suite/founders at industrial companies.
**Why:** This is the distribution strategy from the design doc (Phase 2). No email = no users = no brokerage leads.
**Pros:** Direct path to real users and feedback. Low effort, high signal.
**Cons:** Cold email has low base rates. Template quality matters — generic = ignored.
**Context:** Design doc specifies 25 target companies from Buildlist.xyz. CTA recommendation from design doc: promptedcre.com + William's direct email. Open question: whether to mention "free and open source" in the email or let them discover it.
**Depends on:** Dogfooding complete. Don't send people to a product you haven't validated.
