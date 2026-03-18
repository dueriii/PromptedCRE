"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, Check, ClipboardCheck, Filter, Map, Scale, Calendar, HelpCircle, Target, FileText } from "lucide-react"

const gitCloneCommand = `git clone https://github.com/dueriii/PromptedCRE.git
cd PromptedCRE/repo`

const agents = [
  { name: "intake", description: "Define space & operational requirements", icon: ClipboardCheck },
  { name: "search-filters", description: "Build market search parameters", icon: Filter },
  { name: "property-survey", description: "Evaluate properties against criteria", icon: Map },
  { name: "comparison", description: "Side-by-side lease vs. purchase", icon: Scale },
  { name: "tour-prep", description: "Pre-visit checklist and walk agenda", icon: Calendar },
  { name: "landlord-questions", description: "45+ strategic questions", icon: HelpCircle },
  { name: "loi-review", description: "LOI drafting and negotiation", icon: Target },
  { name: "contract-review", description: "Lease and purchase analysis", icon: FileText },
]

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(gitCloneCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              For the companies rebuilding America
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.1]">
              Real Estate Intelligence for American Builders
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              PromptedCRE is a free AI agent that gives manufacturers, operators, and industrial founders the real estate firepower they deserve — find space, compare buildings, and close deals without gatekeepers, fees, or nonsense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base font-medium"
                onClick={() => scrollToSection("human-support")}
              >
                Talk to a Human
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Open source. No email. No strings. Just ship.
            </p>
          </div>
          
          {/* Right - Quick Start Terminal */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-transparent to-transparent rounded-3xl blur-3xl" />
            
            <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500/80" />
                    <div className="size-3 rounded-full bg-yellow-500/80" />
                    <div className="size-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm font-semibold text-foreground ml-3">Quick Start</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-green-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Git clone command */}
              <div className="px-4 py-4 border-b border-border bg-secondary/20">
                <pre className="font-mono text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                  <span className="text-muted-foreground">git clone </span>
                  <span className="text-accent">https://github.com/dueriii/PromptedCRE.git</span>
                  {"\n"}
                  <span className="text-muted-foreground">cd </span>
                  <span>PromptedCRE/repo</span>
                </pre>
              </div>

              {/* Instructions */}
              <div className="px-4 py-3 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  Open the folder in <span className="text-foreground font-medium">Claude</span>, <span className="text-foreground font-medium">Cursor</span>, or your AI tool of choice. Then start with:
                </p>
                <div className="mt-2 p-3 rounded-lg bg-secondary/30 border border-border">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;I need 15,000–25,000 SF of industrial space in the Houston metro. Manufacturing use, 3-phase power required, 24-foot clear height minimum.&rdquo;
                  </p>
                </div>
              </div>

              {/* Available agents */}
              <div className="px-4 py-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Available Agents</p>
                <div className="grid grid-cols-2 gap-2">
                  {agents.map((agent) => (
                    <div 
                      key={agent.name}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-secondary/30 border border-border hover:border-accent/30 transition-colors"
                    >
                      <agent.icon className="size-4 text-accent shrink-0" />
                      <span className="text-xs font-mono text-foreground truncate">{agent.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
