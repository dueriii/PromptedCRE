# Contributing to PromptedCRE

Thanks for your interest in improving PromptedCRE. This project helps industrial companies navigate real estate decisions with AI — contributions that sharpen the skills, fix workflow bugs, or expand market coverage are welcome.

## How to Contribute

### Reporting Bugs

If a skill gives bad advice, misses a trigger, or produces broken output:

1. Open an issue using the **Bug Report** template
2. Include which skill/workflow failed and what AI tool you were using
3. Paste the prompt that triggered the issue (redact any deal-sensitive data)

### Requesting Features

Have an idea for a new skill, workflow improvement, or market expansion?

1. Open an issue using the **Feature Request** template
2. Describe the problem it solves — industrial RE context helps

### Submitting Changes

1. Fork the repo
2. Create a branch from `main` (`git checkout -b your-feature`)
3. Make your changes
4. Test with at least one AI tool (Claude Code, Cursor, ChatGPT, etc.)
5. Open a PR using the pull request template

### What Makes a Good PR

- **Skill changes**: Update activation triggers in `agent/CLAUDE.md` if you add or rename skills
- **Template changes**: Keep the Location / Pricing / Functionality structure consistent
- **Cross-skill references**: If your skill references another skill's output, verify the reference is accurate
- **Examples**: Update `agent/examples/` if your change affects output format

## Project Structure

| Directory | Purpose |
|---|---|
| `agent/skills/` | Skill definitions (one `SKILL.md` per skill) |
| `agent/templates/` | Structured output templates |
| `agent/examples/` | Sample outputs for reference |
| `agent/CLAUDE.md` | Main agent instructions and skill routing |
| `repo/workflows/` | Standalone markdown workflows |
| `repo/` | Market context, glossary, guides |

## Style Guide

- Write at a professional level — these documents go to leadership, investors, and boards
- Be direct. Industrial operators don't want filler
- Use tables for comparisons, bullets for checklists
- Every property evaluation uses three dimensions: **Location**, **Pricing**, **Functionality**
- Keep skill `SKILL.md` files self-contained — each should work independently

## Questions?

Open an issue or [book a call](https://calendly.com/admin-promptedcre).
