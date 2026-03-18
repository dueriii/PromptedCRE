# PromptedCRE

**Industrial Real Estate Workflows for Advanced Companies**

PromptedCRE gives founders, operators, and real estate teams at industrial companies — defense tech, advanced manufacturing, robotics, energy — a structured AI workflow to find space, evaluate options, and move fast. No broker jargon. No wasted tours.

🌐 [promptedcre.com](https://promptedcre.com)

---

## What's in This Repo

```
PromptedCRE/
├── repo/       ← The workflow product (start here)
├── agent/      ← AI agent config (OpenClaw, Cursor, Claude, Gemini)
└── landing/    ← Marketing site (Next.js, deployed at promptedcre.com)
```

### `/repo` — The Workflow Repo
The core product. Eight structured prompt workflows that guide you through the entire real estate process — from defining requirements to signing a lease. Clone it into your AI tool and start talking.

→ [Get started](/repo/00-quick-start.md)

### `/agent` — The Agent
Pre-configured agent files for Claude, Gemini, Cursor, and OpenClaw. Drop these into your AI environment and the agent understands the full PromptedCRE context automatically.

→ [Agent setup](/agent/README.md)

### `/landing` — The Website
Next.js marketing site deployed at [promptedcre.com](https://promptedcre.com). Built with shadcn/ui, deployed via Vercel.

→ [Dev setup](/landing/README.md)

---

## Quick Start

```bash
git clone https://github.com/dueriii/PromptedCRE.git
cd PromptedCRE/repo
```

Open the folder in Claude, Cursor, or your AI tool of choice. Then start with:

> "I need 15,000–25,000 SF of industrial space in the Houston metro. Manufacturing use, 3-phase power required, 24-foot clear height minimum."

The agent walks you through the rest.

→ Full guide: [repo/00-quick-start.md](/repo/00-quick-start.md)

---

## Who It's For

Companies that build things. If you're evaluating industrial space for a manufacturing facility, warehouse, R&D lab, or production floor — this is for you.

- Defense tech and aerospace
- Advanced manufacturing and robotics
- Energy and climate infrastructure
- Food production and cold storage

---

## License

MIT — see [LICENSE](LICENSE)
