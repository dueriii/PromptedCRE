# PromptedCRE

**Real Estate Intelligence for American Builders**

Free AI agent that guides industrial companies through the entire real estate process — from defining requirements to signing a lease. 12 structured skills covering intake, search, evaluation, comparison, negotiation, due diligence, and contract review. No broker jargon. No wasted tours.

[promptedcre.com](https://promptedcre.com)

---

## Quick Start

```bash
git clone https://github.com/dueriii/PromptedCRE.git
cd PromptedCRE/agent
cp memory.template.md memory.md
```

Open the `agent/` folder in Claude Code, Cursor, or your AI tool of choice. Then start with:

> "I need 15,000-25,000 SF of industrial space in the Houston metro. Manufacturing use, 3-phase power required, 24-foot clear height minimum."

The agent walks you through the rest.

---

## What's in This Repo

```
PromptedCRE/
├── agent/              ← The product (start here)
│   ├── CLAUDE.md           System prompt + workflow engine
│   ├── AGENTS.md           OpenClaw / generic agent config
│   ├── GEMINI.md           Gemini agent config
│   ├── memory.template.md  Copy to memory.md to enable persistence
│   ├── skills/             12 structured skills
│   │   ├── intake/             Define your space requirement
│   │   ├── search-filters/     Build CoStar/LoopNet/Crexi filters
│   │   ├── property-survey/    Evaluate buildings against criteria
│   │   ├── comparison/         Side-by-side + financial analysis
│   │   ├── tour-prep/          What to look for on-site
│   │   ├── landlord-questions/ Surface hidden issues, build leverage
│   │   ├── due-diligence/      Inspections, Phase I ESA, title search
│   │   ├── deal-timeline/      Milestone schedule for your deal
│   │   ├── loi-review/         Draft and review Letters of Intent
│   │   ├── contract-review/    Lease/purchase contract red flags
│   │   ├── memory/             Persistent context across sessions
│   │   └── using-promptedcre/  Orientation and help
│   ├── templates/          Structured output templates
│   └── examples/           Sample outputs from real-world scenarios
├── landing/            ← Marketing site (promptedcre.com)
└── repo/               ← Legacy workflow prompts (deprecated)
```

## The 12 Skills

| # | Skill | What It Does |
|---|-------|-------------|
| 1 | **Intake** | Captures your space requirements — operations, building specs, power, location, budget, timeline |
| 2 | **Search Filters** | Translates requirements into platform-ready search parameters (tiered: start broad, narrow down) |
| 3 | **Property Survey** | Scores each building against your criteria across Location, Pricing, and Functionality |
| 4 | **Comparison** | Side-by-side matrix with weighted scoring, 10-year financial analysis, and clear recommendation |
| 5 | **Tour Prep** | Pre-tour checklist customized to your operation — what to observe, measure, and photograph |
| 6 | **Landlord Questions** | 45+ targeted questions organized by category to surface problems and build leverage |
| 7 | **Due Diligence** | Phase I ESA, PCA, roof inspection, ALTA survey, zoning — full checklist with costs and timelines |
| 8 | **Deal Timeline** | Milestone schedule with deadline warnings and calendar reminders |
| 9 | **LOI Review** | Draft, review, or negotiate Letters of Intent with market-calibrated terms |
| 10 | **Contract Review** | Industrial-specific lease and purchase contract analysis with red flag detection |
| 11 | **Memory** | Persistent deal context across sessions — the agent gets smarter over time |
| 12 | **Using PromptedCRE** | Orientation and help for new users |

## How It Works

1. **You talk, the agent listens.** Describe your company and what you need. The agent runs intake and captures everything.
2. **You search, the agent analyzes.** Run the filters on CoStar/LoopNet/Crexi yourself, then drop listings into your deal folder or paste them in the chat. The agent evaluates every property.
3. **You decide, the agent arms you.** Comparison matrices, negotiation strategies, LOI drafts, and contract reviews — everything you need to make a confident decision.

All deal data stays local. `memory.md` and `deals/` are gitignored — your company names, budgets, and negotiation strategies never leave your machine.

---

## Who It's For

Companies that build things. If you're evaluating industrial space for a manufacturing facility, warehouse, R&D lab, or production floor — this is for you.

- Defense tech and aerospace
- Advanced manufacturing and robotics
- Energy and climate infrastructure
- Food production and cold storage
- Chemical processing and specialty materials

---

## Platform Support

| Platform | How to Use |
|---|---|
| **Claude Code** | `cd agent/` and start a session. Full file read/write — memory and deal folders work automatically. |
| **Cursor** | Load `agent/` as your project. Agent rules apply via CLAUDE.md. |
| **Claude.ai / ChatGPT** | Paste `agent/CLAUDE.md` + the relevant skill's `SKILL.md` into your conversation. Use the memory block format for persistence between sessions. |
| **Gemini** | Use `agent/GEMINI.md` as system instructions. |

---

## Need a Human?

This agent gives you knowledge parity with professionals. But at the LOI and lease negotiation stage, having an experienced industrial broker on your side is worth the commission — which the landlord typically pays anyway.

[Book a free call with an industrial broker](https://calendly.com/admin-promptedcre)

---

## License

MIT — see [LICENSE](LICENSE)
