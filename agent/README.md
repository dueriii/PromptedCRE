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
cp memory.template.md memory.md
```

Then open the `agent/` folder in your AI tool and say:

> "I need a 50,000 SF warehouse in Houston with 32' clear height and 3-phase 480V power."

The agent takes it from there.

## Works With

| Tool | Config File | How |
|---|---|---|
| **Claude Code** | `CLAUDE.md` | Auto-detected when you open the folder |
| **Cursor** | `CLAUDE.md` | Open the `agent/` folder so Cursor picks up the instructions here |
| **Codex CLI** | `AGENTS.md` | Auto-detected when you open the folder |
| **Gemini CLI** | `GEMINI.md` | Auto-detected when you open the folder |
| **Claude.ai Projects** | Upload files | Add `CLAUDE.md` + skills as project knowledge |
| **ChatGPT** | Paste | Copy `CLAUDE.md` into custom instructions |
| **Any IDE** | Paste | Copy relevant skill files into your AI context |

## What It Does

PromptedCRE has 10 core workflows that activate based on where you are in the process. Two supporting skills handle orientation and memory behind the scenes.

| # | Skill | What It Does |
|---|---|---|
| 1 | **Intake** | Captures your space needs, building requirements, and deal parameters |
| 2 | **Search Filters** | Translates requirements into CoStar / LoopNet / Crexi search params |
| 3 | **Property Survey** | Evaluates each building against your criteria (Location · Pricing · Functionality) |
| 4 | **Comparison** | Side-by-side analysis — lease vs. buy, Building A vs. Building B |
| 5 | **Tour Prep** | Pre-tour checklists, observation guides, and photos to take |
| 6 | **Landlord Questions** | 45+ strategic questions that surface hidden problems and build leverage |
| 7 | **Due Diligence** | Inspection planning, title, zoning, environmental, and other DD workstreams |
| 8 | **Deal Timeline** | Milestone planning for what happens next in the deal |
| 9 | **LOI Review** | Draft, review, or negotiate Letters of Intent |
| 10 | **Contract Review** | Review lease agreements and purchase contracts — flag risks for your attorney |

Skills activate automatically. You don't need to memorize commands or follow a rigid sequence. Just describe what you need and the agent picks the right workflow.

## How Properties Are Evaluated

Every building is scored across three dimensions:

- **Location** — submarket fit, highway access, labor pool, customer proximity
- **Pricing** — asking rate, NNN expenses, all-in cost, TI needs, capex
- **Functionality** — clear height, power, loading, crane, column spacing, floor load, yard, parking

## Repo Structure

```
agent/
├── CLAUDE.md                      # Agent instructions (Claude Code / Cursor)
├── AGENTS.md                      # Agent instructions (Codex and cross-platform)
├── GEMINI.md                      # Agent instructions (Gemini CLI)
├── memory.template.md             # Copy to memory.md to enable persistence
├── playbook/
│   └── skills/
│       ├── using-promptedcre/     # Orientation skill
│       ├── memory/                # Persistent context
│       ├── intake/                # Requirement gathering
│       ├── search-filters/        # Market search parameters
│       ├── property-survey/       # Building evaluation
│       ├── comparison/            # Side-by-side analysis
│       ├── tour-prep/             # Tour checklists
│       ├── landlord-questions/    # Strategic questions
│       ├── due-diligence/         # DD planning
│       ├── deal-timeline/         # Milestone planning
│       ├── loi-review/            # Letter of Intent
│       └── contract-review/       # Lease & purchase contracts
├── reference/
│   ├── templates/                 # Structured output templates
│   ├── examples/                  # Sample outputs
│   └── market-data/               # Market context, glossary, incentives, broker guide
├── working-deals/                 # Active deals (gitignored)
└── README.md
```

## Want a Human in the Loop?

The agent handles analysis. When you're ready to tour buildings, negotiate a lease, or close an acquisition — talk to someone who's been in the room before.

**[Book a free call](https://calendly.com/admin-promptedcre)** — representation costs you nothing. The landlord or seller pays broker fees. That's how commercial real estate works.

## License

MIT
