"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, Terminal, Github } from "lucide-react"

const repoSnippet = `# PromptedCRE — Industrial Real Estate Agent

## Get Started
\`\`\`bash
git clone https://github.com/dueriii/PromptedCRE.git
cd PromptedCRE/agent
\`\`\`

Then open the folder in your AI tool of choice:
  Claude Code  →  claude        # auto-detects CLAUDE.md
  Cursor       →  cursor .      # auto-detects .cursor/rules/
  Codex CLI    →  codex         # auto-detects AGENTS.md
  Gemini CLI   →  gemini        # auto-detects GEMINI.md

## 12 Skills

  memory             # Persist deal context across sessions
  intake             # Define space & operational requirements
  search-filters     # Build CoStar / LoopNet / Crexi search params
  property-survey    # Evaluate properties against your criteria
  comparison         # Weighted scoring + deep cost analysis
  tour-prep          # Pre-visit checklist and walk agenda
  landlord-questions # 45+ questions that surface problems and leverage
  due-diligence      # Phase I ESA, title search, inspections
  deal-timeline      # Milestone schedule and deadlines
  loi-review         # Letter of Intent drafting and negotiation
  contract-review    # Industrial lease review — 8 clauses + 6 red flags
  using-promptedcre  # System orientation and guides

## Recommended flow

1. intake → define what you need
2. search-filters → build your search
3. property-survey → evaluate your shortlist
4. comparison → weighted side-by-side analysis
5. tour-prep → prep for site visits
6. landlord-questions + due-diligence → investigate thoroughly
7. deal-timeline → map your milestones
8. loi-review → negotiate with leverage
9. contract-review → finalize the deal

GitHub: https://github.com/dueriii/PromptedCRE`

export function UnlockRepo() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(repoSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="unlock-repo" className="py-24 lg:py-32 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-sm text-accent mb-6">
            <Github className="size-3.5" />
            Free. Open Source. No Catch.
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Stop searching. Start closing.
          </h2>
          <p className="text-muted-foreground text-lg">
            Clone the repo. Open it in your AI tool. Be evaluating buildings in five minutes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-accent/30 rounded-xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-2">
                <Terminal className="size-4 text-accent" />
                <span className="text-sm font-mono text-muted-foreground">promptedcre</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8 px-3 text-xs"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 mr-1.5 text-green-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 mr-1.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            
            {/* Code content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
                {repoSnippet}
              </pre>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base font-medium" asChild>
              <a href="https://github.com/dueriii/PromptedCRE" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-foreground font-medium">
              Works with any industrial site search. Warehouse, factory, or facility.
            </p>
            <p className="text-sm text-muted-foreground">
              Clone it, open your AI tool, and go from zero to broker-ready analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
