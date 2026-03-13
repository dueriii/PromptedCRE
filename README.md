# Deeptech Tenant Rep CLI

A CLI-based tenant-rep real estate system for deeptech and industrial companies.

It helps a company define its requirement, build search filters, organize properties, compare lease and sale options, prepare for tours, and draft broker-style client memos.

## What this repo is

This repo is designed to feel like **an in-house real estate lead plus a broker**.

It stays focused on real estate only:
- requirement capture
- search filter translation
- property survey and comparison
- tour prep
- landlord questions
- LOI / deal framing
- client-facing memo generation

## Commands

- `intake` — create a requirement summary
- `filters` — translate requirements into CoStar / LoopNet / Crexi search filters
- `add-property` — normalize a property file into a standard format
- `survey` — generate a property survey
- `compare` — compare properties by location, pricing, and functionality
- `tour` — build a tour agenda and walk checklist
- `questions` — draft landlord / broker follow-up questions
- `deal` — outline LOI and deal strategy points
- `memo` — create a polished client memo with internal notes

## Quick start

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
python -m pip install -U pip
python -m pip install -e .
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

## Recommended workflow

1. Run `intake`
2. Run `filters`
3. Search CoStar / LoopNet / Crexi manually or with a browser-assisted workflow
4. Save candidate listings as JSON files
5. Run `add-property` on each file if needed
6. Run `survey`
7. Run `compare`
8. Run `tour`
9. Run `questions`
10. Run `deal`
11. Run `memo`

## Browser-assisted search workflow

This repo is intentionally useful in three modes:

1. **Manual mode** — the CLI gives exact search criteria and analysis, while the user searches listing platforms manually.
2. **Post-search mode** — the CLI scores and compares properties after the broker finds them.
3. **Browser-assisted mode** — the repo can be paired with tools like Claude Code + Claude in Chrome so the model can see live listing pages and refine search instructions without requiring full end-to-end automation.

## Core evaluation framework

Every property is evaluated through three top-level buckets:

### 1. Location
Examples: submarket fit, labor access, freeway access, management proximity, customer/supplier access, municipality, image.

### 2. Pricing
Examples: asking rate, OPEX, all-in cost, TI needs, landlord work, sale price, capex, relocation cost.

### 3. Functionality
Examples: clear height, power, loading, office %, yard, parking, HVAC, crane, floor load, column spacing, layout, expansion land.

## Folder structure

```text
deeptech-tenant-rep-cli/
├── README.md
├── pyproject.toml
├── main.py
├── data/
├── examples/
├── src/tenant_rep/
└── tests/
```
