# PromptedCRE

**Real Estate Intelligence for American Builders**

Free AI agent that guides industrial companies through the entire real estate process. From defining requirements to signing a lease. Built by an industrial broker, not a developer guessing about CRE.

[promptedcre.com](https://promptedcre.com)

---

## Quick Start

```bash
git clone https://github.com/dueriii/PromptedCRE.git
cd PromptedCRE/agent
cp memory.template.md memory.md
```

Open the `agent/` folder in Claude Code (recommended), Cursor, or your AI tool of choice.

**Then say something like:**

> "I need 15,000-25,000 SF of industrial space in the Houston metro. Manufacturing use, 3-phase power required, 24-foot clear height minimum."

Or:

> "Here's a listing I found on LoopNet. Can you evaluate it against my requirements?"

Or:

> "Compare these three properties and tell me which one to tour first."

The agent walks you through the rest.

---

## What's in This Repo

```
PromptedCRE/
├── agent/                      <- The product (start here)
│   ├── CLAUDE.md                   System prompt + workflow engine
│   ├── AGENTS.md                   OpenClaw / generic agent config
│   ├── GEMINI.md                   Gemini agent config
│   ├── memory.template.md          Copy to memory.md to enable persistence
│   ├── playbook/
│   │   └── skills/                 10 structured workflows
│   │       ├── intake/                 Define space requirements
│   │       ├── search-filters/         Build search parameters
│   │       ├── property-survey/        Evaluate buildings
│   │       ├── comparison/             Side-by-side analysis
│   │       ├── tour-prep/              Pre-visit checklist
│   │       ├── landlord-questions/     Surface hidden issues
│   │       ├── due-diligence/          Inspections + DD planning
│   │       ├── deal-timeline/          Milestone schedule
│   │       ├── loi-review/             Draft + review LOIs
│   │       ├── contract-review/        Lease/purchase red flags
│   │       ├── memory/                 Persistent context
│   │       └── using-promptedcre/      Orientation + help
│   ├── reference/
│   │   ├── templates/              Structured output templates
│   │   ├── examples/               Sample outputs from real scenarios
│   │   └── market-data/            Glossary, incentives, broker guide
│   └── working-deals/              Your active deals (gitignored)
├── landing/                    <- Marketing site (promptedcre.com)
└── repo/                       <- Legacy workflows (deprecated, use agent/)
```

## The 10 Workflows

| # | Workflow | What It Does | Try Saying |
|---|---------|-------------|------------|
| 1 | **Intake** | Captures your space requirements through conversation | "I need industrial space for my robotics company in Texas" |
| 2 | **Search Filters** | Translates requirements into CoStar/LoopNet/Crexi search parameters | "Build me search filters based on my requirements" |
| 3 | **Property Survey** | Scores each building on Location, Pricing, and Functionality | "Here's a listing I found, can you evaluate it?" |
| 4 | **Comparison** | Side-by-side matrix with weighted scoring and 10-year cost analysis | "Compare Property A and Property B side by side" |
| 5 | **Tour Prep** | Pre-tour checklist customized to your operation | "I'm touring this warehouse tomorrow, what should I look for?" |
| 6 | **Landlord Questions** | 45+ targeted questions to surface problems and build leverage | "What should I ask the landlord at our meeting?" |
| 7 | **Due Diligence** | Phase I ESA, inspections, title search, zoning. Full checklist with timelines | "What inspections do I need before signing?" |
| 8 | **Deal Timeline** | Milestone schedule with deadline warnings | "What's next in my deal? When are the deadlines?" |
| 9 | **LOI Review** | Draft, review, or negotiate Letters of Intent | "I want to make an offer on this building" |
| 10 | **Contract Review** | Industrial-specific lease and purchase contract red flags | "Can you review this lease agreement?" |

## How It Works

1. **You talk, the agent listens.** Describe your company and what you need. The agent runs intake and captures everything.
2. **You search, the agent analyzes.** Run the filters on CoStar/LoopNet/Crexi yourself, then drop listings into your deal folder or paste them in the chat. The agent evaluates every property.
3. **You decide, the agent arms you.** Comparison matrices, negotiation strategies, LOI drafts, and contract reviews. Everything you need to make a confident decision.

All deal data stays local. `memory.md` and `working-deals/` are gitignored. Your company names, budgets, and negotiation strategies never leave your machine.

---

## Who It's For

Companies that build things. If you're evaluating industrial space for a manufacturing facility, warehouse, R&D lab, or production floor.

- Defense tech and aerospace
- Advanced manufacturing and robotics
- Energy and climate infrastructure
- Food production and cold storage
- Chemical processing and specialty materials

---

## Platform Support

| Platform | Experience | Notes |
|---|---|---|
| **Claude Code** (recommended) | Full workflow | File read/write, deal folders, automatic memory persistence |
| **Cursor** | Full workflow | Agent rules apply via CLAUDE.md |
| **Claude.ai / ChatGPT** | Single sessions | Paste CLAUDE.md + relevant SKILL.md. Use memory blocks for persistence between sessions |
| **Gemini** | Single sessions | Use GEMINI.md as system instructions |

---

## Need a Human?

This agent gives you knowledge parity with professionals. But at the LOI and lease negotiation stage, having an experienced industrial broker on your side is worth the commission, which the landlord typically pays anyway.

[Book a free call with an industrial broker](https://calendly.com/admin-promptedcre)

---

## License

MIT — see [LICENSE](LICENSE)
