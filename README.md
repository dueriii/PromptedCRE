<p align="center">
  <strong>PromptedCRE</strong><br>
  Industrial Real Estate Intelligence for Companies That Build Things
</p>

<p align="center">
  <a href="https://promptedcre.com">Website</a> &middot;
  <a href="/repo/00-quick-start.md">Quick Start</a> &middot;
  <a href="/agent/README.md">Agent Setup</a> &middot;
  <a href="https://calendly.com/admin-promptedcre">Book a Call</a>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <img src="https://img.shields.io/badge/skills-12-green.svg" alt="12 Skills">
  <img src="https://img.shields.io/badge/focus-industrial_real_estate-orange.svg" alt="Industrial RE">
</p>

---

PromptedCRE is an AI-powered tenant rep agent for industrial real estate. Clone the repo, open it in your AI tool, and start talking — it walks you from space requirements to signed lease.

Built for founders, operators, and real estate teams at defense tech, advanced manufacturing, robotics, energy, and food production companies.

## How It Works

```
INTAKE → SEARCH FILTERS → PROPERTY SURVEY → COMPARISON
    → TOUR PREP → LANDLORD Qs → DUE DILIGENCE → DEAL TIMELINE
        → LOI REVIEW → CONTRACT REVIEW
```

You describe what you need. The agent activates the right skill for where you are in the process. No commands to memorize — just a conversation.

## 12 Skills

| # | Skill | What It Does |
|---|---|---|
| 1 | **Memory** | Persists deal context across sessions — requirements, preferences, milestones |
| 2 | **Using PromptedCRE** | Orients new users to the system and available workflows |
| 3 | **Intake** | Captures space needs, building specs, timeline, and budget |
| 4 | **Search Filters** | Translates requirements into CoStar / LoopNet / Crexi search parameters |
| 5 | **Property Survey** | Scores each building on Location, Pricing, and Functionality |
| 6 | **Comparison** | Side-by-side analysis with weighted scoring — lease vs. buy, Building A vs. B |
| 7 | **Tour Prep** | Pre-tour checklists, observation guides, and photos to take |
| 8 | **Landlord Questions** | 45+ strategic questions that surface hidden problems and build leverage |
| 9 | **Due Diligence** | Phase I ESA, title search, inspections, and DD planning |
| 10 | **Deal Timeline** | Milestone schedule — what's next, what's due, what's at risk |
| 11 | **LOI Review** | Draft, review, or negotiate Letters of Intent |
| 12 | **Contract Review** | Industrial lease/purchase review — 8 key clauses + 6 red flags |

## Key Features

- **Weighted comparison scoring** — configurable weights across Location, Pricing, and Functionality with worked examples
- **Industrial-depth contract review** — CAM reconciliation, roof/structure allocation, environmental liability, utility infrastructure, noise/vibration restrictions
- **Cross-skill context** — skills reference each other's outputs so nothing falls through the cracks
- **Memory system** — the agent remembers your deal across sessions; includes platform fallback for ChatGPT/Claude.ai
- **Three-dimension evaluation** — every property scored on Location, Pricing, Functionality

## Quick Start

```bash
git clone https://github.com/dueriii/PromptedCRE.git
cd PromptedCRE
```

Open the folder in your AI tool and say:

> "I need 15,000–25,000 SF of industrial space in the Houston metro. Manufacturing use, 3-phase power required, 24-foot clear height minimum."

The agent walks you through the rest.

## Works With

| Tool | How |
|---|---|
| **Claude Code** | Open the `agent/` folder — `CLAUDE.md` is auto-detected |
| **Cursor** | Open `agent/` — `.cursor/rules/` is auto-detected |
| **Codex CLI** | Open `agent/` — `AGENTS.md` is auto-detected |
| **Gemini CLI** | Open `agent/` — `GEMINI.md` is auto-detected |
| **Claude.ai Projects** | Upload `agent/CLAUDE.md` + skill files as project knowledge |
| **ChatGPT** | Paste `agent/CLAUDE.md` into custom instructions |

## Repo Structure

```
PromptedCRE/
├── agent/                 # AI agent configuration
│   ├── CLAUDE.md          # Claude Code instructions
│   ├── AGENTS.md          # Cursor / Codex instructions
│   ├── GEMINI.md          # Gemini CLI instructions
│   ├── skills/            # 12 skill definitions
│   ├── templates/         # Structured output templates
│   ├── examples/          # Sample outputs (intake, comparison, LOI, etc.)
│   └── memory.template.md # Memory template (copy to memory.md)
│
├── repo/                  # Standalone workflow product
│   ├── 00-quick-start.md  # Start here
│   ├── workflows/         # 8 structured workflows
│   ├── MARKET-CONTEXT.md  # Houston + SA market data
│   ├── GLOSSARY.md        # Industrial RE terminology
│   ├── BROKER-GUIDE.md    # How to work with brokers
│   └── INCENTIVES.md      # Texas tax abatements & grants
│
├── landing/               # Marketing site (promptedcre.com)
└── platform/              # Internal Next.js app
```

## Example Outputs

The `agent/examples/` directory includes sample outputs so you can see what the agent produces:

- **[Sample Intake](agent/examples/sample-intake.md)** — completed requirement capture
- **[Sample Property Card](agent/examples/sample-property-card.md)** — single building evaluation with Location/Pricing/Functionality scoring
- **[Sample Comparison](agent/examples/sample-comparison.md)** — multi-property weighted scoring with recommendation
- **[Sample LOI](agent/examples/sample-loi.md)** — annotated Letter of Intent with negotiation strategy
- **[Sample Memory](agent/examples/sample-memory.md)** — persistent deal context across sessions

## Who It's For

Companies that build things. If you're evaluating industrial space — warehouse, manufacturing facility, R&D lab, or production floor — this is for you.

- **Defense tech & aerospace** — SCIFs, cleared facilities, secure manufacturing
- **Advanced manufacturing & robotics** — heavy power, high clear height, crane-ready
- **Energy & climate infrastructure** — specialized utilities, hazmat considerations
- **Food production & cold storage** — USDA compliance, refrigeration, dock logistics

## Want a Human in the Loop?

The agent handles analysis. When you're ready to tour, negotiate, or close — talk to someone who's been in the room.

**[Book a free call](https://calendly.com/admin-promptedcre)** — representation costs you nothing. The landlord pays broker fees.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on reporting bugs, requesting features, and submitting pull requests.

## License

MIT — see [LICENSE](LICENSE)
