# CHANGELOG

## v2.0 — 2026-03-27

**Major upgrade: 12 skills, weighted scoring, industrial depth.**

- Expanded from 8 workflows to 12 agent skills
- New skills: **due-diligence** (Phase I ESA, title, inspections) and **deal-timeline** (milestone scheduling)
- Added **memory** skill with cross-session persistence and platform fallback (ChatGPT/Claude.ai copyable blocks)
- Added **using-promptedcre** orientation skill
- **Weighted comparison scoring** with configurable Location/Pricing/Functionality weights and worked examples
- **Industrial-specific contract review** — 8 key clauses (CAM reconciliation, roof/structure allocation, environmental liability, utility infrastructure, noise/vibration) + 6 red flags
- **Cross-skill context** — skills reference each other's outputs for continuity
- 5 rich examples: sample-intake, sample-property-card, sample-comparison, sample-loi, sample-memory
- 5 output templates: requirement, property-card, comparison-matrix, deal-timeline, due-diligence-checklist
- Skill disambiguation table in CLAUDE.md for ambiguous user phrases
- `memory.md` gitignored to protect deal data; `memory.template.md` provided
- Multi-platform agent support: Claude Code, Cursor, Codex CLI, Gemini CLI, ChatGPT, Claude.ai
- GitHub presence: overhauled README, issue templates, PR template, CONTRIBUTING.md

## v1.0 — 2026-03-15

**Initial release.**

- All 8 core workflows built from scratch
- `MARKET-CONTEXT.md` seeded with Q4 2025 / Q1 2026 Houston and SA industrial market data
- Self-improving structure established: KNOWN-ISSUES.md feedback loop, versioned files, weekly market refresh cadence
- Market data sources: Avison Young Houston Q4 2025, WareCRE 2026, Crexi SA 2026, Matthews Q4 2025, houston.org Q4 2025

**Authored by:** William Alcorn, Finial Group — with Henry (AI)
