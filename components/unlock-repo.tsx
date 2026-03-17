"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, Terminal, Github } from "lucide-react"

const repoSnippet = `# PromptedCRE — Industrial Real Estate Agent

## Install
\`\`\`bash
git clone https://github.com/dueriii/promptedcre-cli.git
cd promptedcre-cli
python -m venv .venv && source .venv/bin/activate
pip install -e .
\`\`\`

## Commands

promptedcre intake       # Define space & operational requirements
promptedcre filters      # Build CoStar / LoopNet / Crexi search params
promptedcre add-property # Normalize a property listing
promptedcre survey       # Evaluate properties against your criteria
promptedcre compare      # Side-by-side lease vs. purchase analysis
promptedcre tour         # Pre-tour checklist and walk agenda
promptedcre questions    # 40+ questions that surface problems and leverage
promptedcre deal         # LOI structure and negotiation strategy
promptedcre memo         # Executive decision memo + LOI cover email

## Recommended flow

1. intake → define what you need
2. filters → build your search
3. add-property → log each building you find
4. survey + compare → evaluate your shortlist
5. tour → prep for site visits
6. questions + deal → negotiate with leverage
7. memo → get internal approval

GitHub: https://github.com/dueriii/promptedcre-cli`

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
            Clone the repo. Run it in your terminal. Be evaluating buildings in five minutes.
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
              <a href="https://github.com/dueriii/promptedcre-cli" target="_blank" rel="noopener noreferrer">
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
              Run <code className="font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">promptedcre intake</code> and go from zero to broker-ready memo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
