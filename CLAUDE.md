# PromptedCRE

Real Estate Intelligence for American Builders. Free AI agent for industrial companies navigating real estate.

## Structure
- `repo/` — The 8 workflow prompts (the product)
- `agent/` — AI agent configs (OpenClaw, Cursor, Claude, Gemini)
- `landing/` — Next.js marketing site (deployed at promptedcre.com via Vercel)
- `platform/` — Platform code

## gstack

Use the /browse skill from gstack for all web browsing. Never use mcp__claude-in-chrome__* tools.

Available skills: /office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review, /design-consultation, /design-shotgun, /review, /ship, /land-and-deploy, /canary, /benchmark, /browse, /connect-chrome, /qa, /qa-only, /design-review, /setup-browser-cookies, /setup-deploy, /retro, /investigate, /document-release, /codex, /cso, /autoplan, /careful, /freeze, /guard, /unfreeze, /gstack-upgrade

If gstack skills aren't working, run `cd .claude/skills/gstack && ./setup` to build the binary and register skills.
