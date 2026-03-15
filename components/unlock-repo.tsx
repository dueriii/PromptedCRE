"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Check, Lock, Terminal } from "lucide-react"

const repoSnippet = `# PromptedCRE CLI — Industrial Real Estate Workflow

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
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsUnlocked(true)
  }

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
            <Lock className="size-3.5" />
            Gated Access
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Unlock the CLI
          </h2>
          <p className="text-muted-foreground text-lg">
            Get instant access to the industrial real estate workflow system.
          </p>
        </div>

        {!isUnlocked ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 bg-card border-border"
            />
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-card border-border"
            />
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Unlocking..." : "Unlock the CLI"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              We respect your inbox. No spam, just useful updates.
            </p>
          </form>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-accent/30 rounded-xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex items-center gap-2">
                  <Terminal className="size-4 text-accent" />
                  <span className="text-sm font-mono text-muted-foreground">promptedcre-cli</span>
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
            
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-foreground font-medium">
                Run in your terminal. Works with any industrial or manufacturing site search.
              </p>
              <p className="text-sm text-muted-foreground">
                Start with <code className="font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">promptedcre intake</code> and work through to a broker-ready memo.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
