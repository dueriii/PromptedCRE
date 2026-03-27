# PromptedCRE

**Real Estate Intelligence for American Builders**

PromptedCRE is a free AI agent for industrial real estate. Clone this repo, open it in your AI tool, and start talking. No installation. No commands. Just a conversation.

Built for founders, operators, and teams at companies that build things — defense tech, advanced manufacturing, robotics, energy, food production.

🌐 [promptedcre.com](https://promptedcre.com)

---

## Quick Start

```bash
git clone https://github.com/dueriii/PromptedCRE.git
cd PromptedCRE/agent
```

Then open the folder in your AI tool and say:

> "I need a 50,000 SF warehouse in Houston with 32' clear height and 3-phase 480V power."

The agent takes it from there.

## Works With

| Tool | Config File | How |
|---|---|---|
| **Claude Code** | `CLAUDE.md` | Auto-detected when you open the folder |
| **Cursor** | `.cursor/rules/` | Auto-detected when you open the folder |
| **Codex CLI** | `AGENTS.md` | Auto-detected when you open the folder |
| **Gemini CLI** | `GEMINI.md` | Auto-detected when you open the folder |
| **Claude.ai Projects** | Upload files | Add `CLAUDE.md` + skills as project knowledge |
| **ChatGPT** | Paste | Copy `CLAUDE.md` into custom instructions |
| **Any IDE** | Paste | Copy relevant skill files into your AI context |

## What It Does

PromptedCRE has 12 skills that activate based on where you are in the process:

| # | Skill | What It Does |
|---|---|---|
| 1 | **Memory** | Persists deal context across sessions — requirements, preferences, milestones |
| 2 | **Using PromptedCRE** | Orients new users to the system and available workflows |
| 3 | **Intake** | Captures your space needs, building requirements, and deal parameters |
| 4 | **Search Filters** | Translates requirements into CoStar / LoopNet / Crexi search params |
| 5 | **Property Survey** | Evaluates each building against your criteria (Location · Pricing · Functionality) |
| 6 | **Comparison** | Side-by-side weighted scoring — lease vs. buy, Building A vs. Building B |
| 7 | **Tour Prep** | Pre-tour checklists, observation guides, and photos to take |
| 8 | **Landlord Questions** | 45+ strategic questions that surface hidden problems and build leverage |
| 9 | **Due Diligence** | Phase I ESA, title search, inspections, and DD planning |
| 10 | **Deal Timeline** | Milestone schedule — what's next, what's due, what's at risk |
| 11 | **LOI Review** | Draft, review, or negotiate Letters of Intent |
| 12 | **Contract Review** | Industrial lease/purchase review — 8 key clauses + 6 red flags |

Skills activate automatically. You don't need to memorize commands or follow a rigid sequence. Just describe what you need and the agent picks the right workflow.

## How Properties Are Evaluated

Every building is scored across three dimensions:

- **Location** — submarket fit, highway access, labor pool, customer proximity
- **Pricing** — asking rate, NNN expenses, all-in cost, TI needs, capex
- **Functionality** — clear height, power, loading, crane, column spacing, floor load, yard, parking

## Repo Structure

```
agent/
├── CLAUDE.md              # Agent instructions (Claude Code)
├── AGENTS.md              # Agent instructions (Codex, Cursor, cross-platform)
├── GEMINI.md              # Agent instructions (Gemini CLI)
├── .cursor/rules/         # Cursor-native rules
├── skills/
│   ├── memory/            # Cross-session deal persistence
│   ├── using-promptedcre/ # Orientation skill
│   ├── intake/            # Requirement gathering
│   ├── search-filters/    # Market search parameters
│   ├── property-survey/   # Building evaluation
│   ├── comparison/        # Weighted scoring + deep cost analysis
│   ├── tour-prep/         # Tour checklists
│   ├── landlord-questions/# Strategic questions
│   ├── due-diligence/     # Inspections & DD planning
│   ├── deal-timeline/     # Milestone scheduling
│   ├── loi-review/        # Letter of Intent
│   └── contract-review/   # Lease & purchase contracts (industrial depth)
├── templates/             # Output templates
├── examples/              # Sample outputs
├── memory.template.md     # Memory template (copy to memory.md)
└── README.md
```

## Want a Human in the Loop?

The agent handles analysis. When you're ready to tour buildings, negotiate a lease, or close an acquisition — talk to someone who's been in the room before.

**[Book a free call](https://calendly.com/admin-promptedcre)** — representation costs you nothing. The landlord or seller pays broker fees. That's how commercial real estate works.

## License

MIT
