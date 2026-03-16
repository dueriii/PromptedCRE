# PromptedCRE

**A free AI agent that helps industrial companies navigate real estate.**

PromptedCRE gives warehouse, manufacturing, and factory companies a structured real estate workflow they can run inside Claude Code, Cursor, or any AI-enabled IDE. From defining your space requirements to comparing buildings to drafting negotiation memos — the agent handles the analysis so you can focus on your business.

**Free. Open source. No strings.**

🌐 [promptedcre.com](https://promptedcre.com)

---

## What it does

PromptedCRE is designed to feel like having an in-house real estate lead. It stays focused on real estate:

| Module | What it does |
|---|---|
| **Intake** | Captures your space needs, operational constraints, and location parameters |
| **Search Filters** | Translates requirements into market-ready search criteria for CoStar, LoopNet, or Crexi |
| **Property Survey** | Evaluates properties systematically against your defined criteria |
| **Property Comparison** | Side-by-side analysis — lease vs. purchase, building vs. building |
| **Tour Prep** | Pre-tour checklists and observation frameworks for site visits |
| **Landlord Questions** | Critical questions for landlords, developers, and seller reps |
| **Deal Guidance** | Framework for negotiation strategy and deal structure |
| **Memo Output** | Executive summaries and decision memos for your team |

## Quick start

```bash
git clone https://github.com/dueriii/promptedcre-cli.git
cd promptedcre-cli
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

Run the sample flow:

```bash
python main.py intake --input examples/sample_requirement.json
python main.py filters --input examples/sample_requirement.json
python main.py add-property --input examples/sample_property_1.json
python main.py survey --properties examples/
python main.py compare --properties examples/ --requirement examples/sample_requirement.json
python main.py memo --properties examples/ --requirement examples/sample_requirement.json
```

## Three ways to use it

1. **Manual mode** — The agent gives you exact search criteria and analysis. You search listing platforms yourself.
2. **Post-search mode** — Your broker finds properties. The agent scores, compares, and drafts memos.
3. **Browser-assisted mode** — Pair with Claude Code + Chrome to search live listings and refine in real time.

## How properties are evaluated

Every property is scored across three dimensions:

- **Location** — submarket fit, labor access, freeway access, customer/supplier proximity
- **Pricing** — asking rate, OPEX, all-in cost, TI needs, capex, relocation cost
- **Functionality** — clear height, power, loading, office %, yard, parking, HVAC, crane, floor load

## Want a human in the loop?

PromptedCRE handles the analysis. When you're ready to tour buildings, negotiate a lease, or structure an acquisition — connect with an experienced industrial real estate advisor.

**[Book a call](https://promptedcre.com)** — representation is free to you (landlord/seller pays broker fees).

## License

MIT
