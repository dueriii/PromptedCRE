<!-- /autoplan restore point: /root/.gstack/projects/dueriii-PromptedCRE/claude-check-gstack-install-tZC2a-autoplan-restore-20260325-213340.md -->
# Plan: Refine Tenant Rep Agent & Improve Skills

## Problem Statement

The PromptedCRE tenant rep agent has a solid 10-skill architecture covering the industrial real estate workflow from intake through contract review. However, several gaps weaken the agent's ability to serve as a true end-to-end advisor. Skills don't compound intelligence across sessions (memory isn't wired), key workflow stages are missing (due diligence, deal timeline, financial modeling), and existing skills need depth improvements (comparison scoring, cross-skill context, industrial-specific contract review).

## Goal

Transform the agent from a "pre-transaction advisor" into a comprehensive tenant representation system that compounds knowledge, manages deal lifecycles, and provides industrial-specific depth that matches what a human broker would deliver.

## Current State

- **10 skills**: memory, using-promptedcre, intake, search-filters, property-survey, comparison, tour-prep, landlord-questions, loi-review, contract-review
- **3 templates**: requirement.md, property-card.md, comparison-matrix.md
- **1 example**: sample-intake.md
- **Memory system**: Exists but empty/unused
- **Cross-platform**: CLAUDE.md, AGENTS.md, GEMINI.md, .cursor/rules

## Proposed Changes

### Phase 1: Fix Foundation (Skills That Exist But Need Work)

#### 1.1 Wire Up Memory System
- Update memory skill to include concrete write triggers with examples
- Add session-start reminder in CLAUDE.md to always read memory.md
- Add memory update prompts at the end of each skill's workflow
- Create a sample populated memory.md in examples/

#### 1.2 Deepen Using-PromptedCRE Skill
- Expand from 2 paragraphs to a proper orientation
- Include visual workflow diagram (text-based)
- Add "what each skill does" summary with example triggers
- Add "what the agent can NOT do" section (no live database search, no legal advice, no transaction execution)

#### 1.3 Add Weighted Scoring to Comparison Skill
- Add user-configurable dimension weights (e.g., "location matters most for us")
- Add decision tree logic: "If you'd pay $X more for better location, Property A wins"
- Add total cost of occupancy comparison (rent + NNN + TI + capex + relocation over lease term)
- Update comparison-matrix.md template

#### 1.4 Improve Cross-Skill Context
- Each skill's transition section should reference specific outputs to carry forward
- Tour-prep should remind user to bring Property Card and open questions from property-survey
- Comparison should reference which landlord-questions to ask next based on gaps
- Contract-review should reference LOI terms to verify against

#### 1.5 Deepen Contract Review for Industrial
- Add industrial-specific clause analysis:
  - CAM reconciliation and base year impact on manufacturing operations
  - Roof/structure maintenance allocation for heavy-use tenants
  - Environmental liability for manufacturing processes
  - Use clause specificity for industrial operations (welding, hazmat, outdoor storage)
  - Utility infrastructure clauses (who pays for transformer upgrades, generator pads)
  - Noise/vibration/emission restrictions
- Add "industrial red flags" table beyond generic commercial lease items

#### 1.6 Expand Power & Building Systems in Intake + Property Survey
- Intake: Add panel capacity vs. load, transformer sizing, backup power, generator needs, future growth capacity
- Property-survey: Add electrical adequacy scoring, HVAC tonnage vs. space, compressed air CFM requirements
- Update requirement.md and property-card.md templates

### Phase 2: New Skills (Fill Workflow Gaps)

#### 2.1 Due Diligence Planning Skill
- Activation: After tour or before LOI, user mentions "due diligence" or "inspections"
- Checklist: Phase I ESA (when to order, what to expect, cost, timeline), Phase II triggers, property condition assessment, roof inspection, ALTA survey, title search, zoning confirmation, ADA compliance, fire marshal inspection
- Output: Due diligence timeline with deadlines and responsible parties
- Template: due-diligence-checklist.md

#### 2.2 Deal Timeline Skill
- Activation: User has active deal, mentions deadlines, or asks "what's next?"
- Tracks: Key milestones (intake complete, tours scheduled, LOI submitted, due diligence period, financing contingency, closing date)
- Flags: Upcoming deadlines, expired contingencies, stale deals
- Output: Timeline view with status indicators
- Template: deal-timeline.md

#### 2.3 Financial Modeling Skill
- Activation: User asks about total cost, "how much will this really cost?", or comparing lease vs. buy economics
- Covers: Total occupancy cost (base rent + NNN + TI amortization + capex + moving costs), lease escalation modeling over term, lease vs. buy NPV comparison, tax implications overview (not advice)
- Output: Cost summary table
- Template: cost-analysis.md

### Phase 3: Polish & Examples

#### 3.1 Add More Examples
- sample-property-card.md (completed evaluation)
- sample-comparison.md (2-3 property comparison with recommendation)
- sample-loi.md (draft LOI with annotations)

#### 3.2 Update CLAUDE.md / AGENTS.md / GEMINI.md
- Reflect new skills in workflow description
- Add new skill activation triggers
- Update human handoff triggers if any changed

#### 3.3 Update README
- Reflect new skill count and capabilities
- Add "what's new" section

## Files Affected

### Modified
- `.gitignore` — Add agent/memory.md
- `agent/CLAUDE.md` — Updated workflow, new skill triggers, skill disambiguation table, analytics prompts
- `agent/AGENTS.md` — Mirror CLAUDE.md changes (with sync validation)
- `agent/GEMINI.md` — Mirror CLAUDE.md changes (with sync validation)
- `agent/skills/memory/SKILL.md` — Platform fallback, concrete write triggers, cross-skill integration
- `agent/skills/using-promptedcre/SKILL.md` — Expanded orientation, memory fallback instructions
- `agent/skills/comparison/SKILL.md` — Weighted scoring, deep cost analysis mode (absorbed financial-modeling), worked examples
- `agent/skills/tour-prep/SKILL.md` — Cross-skill references with explicit verification steps
- `agent/skills/landlord-questions/SKILL.md` — Cross-skill references with explicit verification steps
- `agent/skills/contract-review/SKILL.md` — Industrial-specific depth, data-handling disclaimer
- `agent/skills/loi-review/SKILL.md` — Data-handling disclaimer
- `agent/skills/intake/SKILL.md` — Expanded power/systems section
- `agent/skills/property-survey/SKILL.md` — Expanded systems scoring
- `agent/templates/requirement.md` — New fields
- `agent/templates/property-card.md` — New fields
- `agent/templates/comparison-matrix.md` — Weighted scoring columns, deep cost section

### New Files
- `agent/memory.template.md` — Template for memory (actual memory.md is gitignored)
- `agent/skills/due-diligence/SKILL.md` — Due diligence planning skill
- `agent/skills/deal-timeline/SKILL.md` — Deal timeline generation skill (static, not real-time)
- `agent/templates/due-diligence-checklist.md` — DD checklist template
- `agent/templates/deal-timeline.md` — Timeline template
- `agent/examples/sample-property-card.md` — Example output
- `agent/examples/sample-comparison.md` — Example output (includes deep cost analysis)
- `agent/examples/sample-loi.md` — Example output
- `agent/examples/sample-memory.md` — Example populated memory (multi-deal)

### Removed (merged)
- ~~`agent/skills/financial-modeling/SKILL.md`~~ — Merged into comparison
- ~~`agent/templates/cost-analysis.md`~~ — Merged into comparison-matrix.md

## Out of Scope
- Post-occupancy / dispute resolution skill (ocean — too many legal variables)
- Portfolio / multi-site strategy skill (ocean — requires different agent architecture)
- Live database integration (requires API work, separate project)
- Exit/renewal planning skill (defer to Phase 2 of a future plan)

## Success Criteria
- All 12 skills activate correctly on their trigger phrases (see test plan)
- Memory persists across simulated multi-session conversations (Claude Code)
- Memory fallback works on non-file-write platforms (ChatGPT, Claude.ai)
- Comparison produces weighted scores and total cost analysis with consistent math
- Contract review catches industrial-specific red flags
- Due diligence skill produces actionable checklist with timeline
- Deal timeline generates milestone document (not real-time tracking)
- All templates updated and consistent
- Examples demonstrate real-world quality output
- Hard gates enforced on adversarial inputs (tested)
- Skill disambiguation rules resolve ambiguous triggers
- memory.md is gitignored; sensitive deal data never committed
- Lightweight feedback/analytics mechanism captures user progression

## Phase 0: Prerequisites (Before Any Implementation)

### 0.1 Gitignore memory.md
- Add `agent/memory.md` to `.gitignore`
- Rename current `agent/memory.md` to `agent/memory.template.md`
- Users copy the template to create their own memory.md (which is gitignored)

### 0.2 Memory Platform Fallback
- Design a "memory block" output format for platforms without file-write
- At end of each session on non-file-write platforms, agent outputs a copyable memory block
- At start of next session, user pastes the memory block
- Document this in the memory skill and using-promptedcre skill

### 0.3 Skill Disambiguation Table
- Add a conflict resolution section to CLAUDE.md
- Map overlapping trigger phrases to correct skills
- Include disambiguation rules for cost-related queries (comparison deep mode vs standalone)

### 0.4 Lightweight Analytics / Feedback
- Add a "milestone check-in" prompt at end of intake, comparison, and LOI review
- Simple: "How was that? Anything I should do differently?"
- Track which skills users actually reach (via memory.md stages on file-write platforms)

## Changes from /autoplan Review

### Merged: Financial Modeling → Comparison
- `financial-modeling` skill merged into `comparison` as a "deep cost analysis" mode
- Activated when user asks about total cost for a single property or lease-vs-buy NPV
- Reduces skill count from 13 → 12, eliminates trigger overlap
- Removed: `agent/skills/financial-modeling/SKILL.md`, `agent/templates/cost-analysis.md`
- Modified: `agent/skills/comparison/SKILL.md` (add deep cost mode)

### Reframed: Deal Timeline
- Renamed conceptually from "deal tracking" to "deal timeline generation"
- Agent generates a static milestone document, does NOT monitor or alert
- Limitation documented clearly in SKILL.md

### Added: Data Handling Disclaimers
- `contract-review` and `loi-review` skills now include AI data retention warning
- Agent reminds users about provider data policies before sensitive document review

### Added: Cross-Skill Verification Steps
- Each cross-skill reference now includes explicit "read memory.md" or "ask user" instruction
- Fallback for platforms without file access

### Added: Worked Examples in Weighted Scoring
- Comparison SKILL.md includes complete worked example with numbers
- Prevents LLM from freestyling the math differently each run

<!-- AUTONOMOUS DECISION LOG -->
## Decision Audit Trail

| # | Phase | Decision | Principle | Rationale | Rejected |
|---|-------|----------|-----------|-----------|----------|
| 1 | CEO-0D | SELECTIVE EXPANSION mode | P1+P3 | Plan is well-scoped; hold baseline, surface expansions individually | SCOPE EXPANSION (would bloat), HOLD SCOPE (too conservative) |
| 2 | CEO-0C | Full plan (Option A) over foundation-only or new-skills-only | P1+P2 | All markdown, ~2hr CC, boilable lake | Option B (leaves gaps), Option C (leaves weak skills) |
| 3 | CEO-7 | Add lightweight analytics/feedback mechanism | P1 | Building blind is the top strategic risk; simple milestone check-ins cost nothing | Skip analytics (accepted by user choice) |
| 4 | CEO-10 | Add outcome-based success criteria | P1 | Feature-completeness metrics don't validate user value | Leave criteria as-is |
| 5 | ENG-1 | Merge financial-modeling into comparison | P4+P5 | 60% overlap, trigger ambiguity, DRY violation to have both | Separate skill (cleaner separation but adds confusion) |
| 6 | ENG-1 | Add skill disambiguation table to CLAUDE.md | P5 | 12 skills need explicit routing rules; LLM can't reliably disambiguate | Trust LLM judgment (too fragile at 12 skills) |
| 7 | ENG-2.1 | Design memory fallback for non-file-write platforms | P1 | Memory is the plan's thesis; it must work everywhere | Accept platform asymmetry (breaks for majority of users) |
| 8 | ENG-3 | Write test plan artifact with scripted conversations | P1 | No tests = no verification that changes work | Skip tests (unacceptable for 12-skill system) |
| 9 | ENG-4.1 | Gitignore memory.md, rename to template | P1 | Deal data in public repo = data leak | Leave as-is (security risk) |
| 10 | ENG-4.2 | Add data-handling disclaimers to contract/LOI skills | P1 | Users paste confidential documents; providers may retain | Skip disclaimer (negligent) |
| 11 | ENG-5.1 | Include worked examples in weighted scoring | P5 | LLMs freestyle math without examples; consistency requires demonstration | Instructions-only (inconsistent outputs) |
| 12 | ENG-5.4 | Reframe deal-timeline as generation, not tracking | P5 | LLMs have no clock/calendar; false expectations harm trust | Keep "tracking" framing (misleading) |
| 13 | CEO-GATE | Accept plan + add analytics | USER | User chose this option at premise gate | Reframe to listing integration, hosted version |

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 1 | DONE | 10 findings (3 critical, 4 high, 3 medium) |
| Codex Review | `codex` | Independent 2nd opinion | 0 | UNAVAILABLE | Codex not available in environment |
| Eng Review | `/plan-eng-review` | Architecture & tests | 1 | DONE | 15 findings (1 critical, 6 high, 7 medium, 1 low) |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | SKIPPED | No UI scope detected |

**VERDICT:** REVIEWED — 13 auto-decisions made, plan updated with all findings. Test plan artifact written.
