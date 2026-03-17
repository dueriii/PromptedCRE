# PromptedCRE

**You make physical things. We handle the real estate.**

PromptedCRE is a free AI agent that gives manufacturers, operators, and industrial founders the real estate firepower they deserve — find space, compare buildings, and close deals without gatekeepers, fees, or nonsense.

**Free. Open source. No strings.**

[promptedcre.com](https://promptedcre.com)

---

## How it works

1. **Tell it what you need** — Capture your space, power, docks, clear height, timeline, and location requirements.
2. **Search the market** — Get drop-in search parameters for CoStar, LoopNet, and Crexi.
3. **Compare and decide** — Score every building against your real criteria. Lease vs. buy. Building A vs. Building B.
4. **Bring in the humans** — Industrial brokers on standby to tour buildings, negotiate leases, and close deals.

---

## 8 Workflows

| Workflow | What it does |
|---|---|
| **Intake** | Capture space, power, docks, clear height, timeline |
| **Search Filters** | Drop-in parameters for CoStar, LoopNet, and Crexi |
| **Property Survey** | Score every building against your real criteria |
| **Property Comparison** | Lease vs. buy. Building A vs. Building B |
| **Tour Prep** | Pre-tour checklist and walk agenda |
| **Landlord Questions** | 40+ questions that surface hidden problems |
| **Deal Guidance** | LOI structure and negotiation strategy |
| **Memo Output** | Executive decision memos |

---

## Quick start

```bash
git clone https://github.com/dueriii/promptedcre-cli.git
cd promptedcre-cli
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

## Commands

```bash
promptedcre intake --input examples/sample_requirement.json
promptedcre filters --input examples/sample_requirement.json
promptedcre add-property --input examples/sample_property_1.json
promptedcre survey --properties examples/
promptedcre compare --properties examples/ --requirement examples/sample_requirement.json
promptedcre tour --properties examples/ --requirement examples/sample_requirement.json
promptedcre questions --property examples/sample_property_1.json
promptedcre deal --property examples/sample_property_1.json --requirement examples/sample_requirement.json
promptedcre memo --properties examples/ --requirement examples/sample_requirement.json
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

The agent handles the analysis. When you're ready to tour buildings, negotiate a lease, or structure an acquisition — connect with an industrial real estate advisor who knows this market.

**[Book a call](https://calendly.com/admin-promptedcre)** — representation is free to you (landlord/seller pays broker fees).

## License

MIT
