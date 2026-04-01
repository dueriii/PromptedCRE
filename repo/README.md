# PromptedCRE — Industrial Real Estate Workflow Repo
> Version 2.1 | Updated: 2026-03-15 | Built by William Alcorn, Finial Group

> Legacy workflow pack. The actively maintained product now lives in `agent/`.
> Use this folder for historical reference only unless you intentionally want the older copy/paste workflow format.

**The most complete industrial real estate decision system available.**
Built by an active broker. Grounded in live market data.

---

## What This Is

A structured set of AI workflows for industrial companies making real estate decisions.
Copy these files into Claude, ChatGPT, Cursor, or any AI IDE. Run them in order.

If you're new to the repository, start in `agent/` instead. That is where current development and maintenance happen.

Built from real deal experience — not theory. Covers Houston, San Antonio, and the I-35 corridor. Applicable anywhere.

---

## Start Here

**First time?** → Read `00-quick-start.md`

**Don't know the terminology?** → Read `GLOSSARY.md`

**In Texas?** → Read `INCENTIVES.md` before committing to a location (potentially worth $500K+)

**Need a broker?** → Read `BROKER-GUIDE.md` (the honest version)

---

## The Workflows

Run in order for a complete decision. Jump in anywhere for specific needs.

| File | What It Does | When to Use |
|---|---|---|
| `00-quick-start.md` | Orient to the system | Always first |
| `01-intake.md` | Define your requirement | Start of search |
| `02-search-filters.md` | Build broker-ready search params + budget reality check | Before contacting brokers |
| `03-property-survey.md` | Evaluate properties against your criteria | For each building you consider |
| `04-comparison.md` | Lease vs. purchase + building vs. building | Shortlist analysis |
| `05-tour-prep.md` | What to actually look for on-site | Day before every tour |
| `06-landlord-questions.md` | 40+ questions that surface problems and leverage | Before your LOI |
| `07-deal-guidance.md` | Negotiation strategy, LOI structure, deal-killer clauses | Before you make any offer |
| `08-memo-output.md` | Executive decision memo + LOI cover email | Final approval stage |

---

## Supporting Files

| File | Purpose |
|---|---|
| `MARKET-CONTEXT.md` | Houston + SA industrial market data. Load with every workflow. |
| `GLOSSARY.md` | Every industrial RE term defined in plain English |
| `INCENTIVES.md` | Texas tax abatements, grants, exemptions worth pursuing |
| `BROKER-GUIDE.md` | How to work with (and without) an industrial broker |
| `CHANGELOG.md` | Every change logged with rationale |
| `feedback/KNOWN-ISSUES.md` | Where workflow failures get documented and fixed |

---

## How to Use

**The golden rule:** Always paste `MARKET-CONTEXT.md` into your AI context first. Current market data makes every answer 10x sharper.

**Example prompt to get started:**
```
[Paste MARKET-CONTEXT.md]
[Paste 01-intake.md]

I'm looking for industrial space. Please run the intake workflow with me.
```

---

## Keeping It Current

**Market context:** Update `MARKET-CONTEXT.md` manually when you have fresh market intel — cap rates, vacancy, absorption, notable deals. The workflows use whatever you give them.

**Feedback loop:**
- When a workflow fails → log it in `feedback/KNOWN-ISSUES.md`
- Every update tracked in `CHANGELOG.md` with version numbers

**Versioning:**
- Each file has a version number in the header
- Major updates increment the version and log in CHANGELOG

---

## Need Human Support?

These workflows give you knowledge parity with professionals. The last 20% — negotiation, relationships, deal execution — benefits from an experienced industrial broker.

The listing broker works for the landlord. Your broker costs you nothing (landlord pays the commission).

[Book a call →](https://promptedcre.com)

---

## Built By

William Alcorn | Senior Associate, Finial Group
Houston & San Antonio Industrial Real Estate
[FinialGroup.com](https://finialgroup.com)

---

## License

MIT. Use it, fork it, share it. Attribution appreciated.
