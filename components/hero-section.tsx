"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Building2, GitBranch, Layers } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                onClick={() => scrollToSection("unlock-repo")}
              >
                Get the Agent — It&apos;s Free
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base font-medium"
                onClick={() => scrollToSection("human-support")}
              >
                Talk to a Human
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Open source. No email. No strings. Just ship.
            </p>
          </div>
          
          {/* Right visual mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-transparent to-transparent rounded-3xl blur-3xl" />
            
            <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/60" />
                  <div className="size-3 rounded-full bg-yellow-500/60" />
                  <div className="size-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">prompted-cre/industrial-workflows</span>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Terminal className="size-4" />
                  <span className="text-accent">$</span>
                  <span>claude repo:add industrial-workflows</span>
                </div>
                
                <div className="space-y-2 pl-6 border-l border-border">
                  <div className="flex items-center gap-3">
                    <GitBranch className="size-4 text-accent" />
                    <span className="text-foreground">/requirements</span>
                    <span className="text-muted-foreground text-xs">define space needs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers className="size-4 text-accent" />
                    <span className="text-foreground">/search-filters</span>
                    <span className="text-muted-foreground text-xs">market parameters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="size-4 text-accent" />
                    <span className="text-foreground">/property-survey</span>
                    <span className="text-muted-foreground text-xs">evaluate options</span>
                  </div>
                </div>
                
                {/* Property comparison cards */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Building A</div>
                    <div className="text-sm font-medium">125,000 SF</div>
                    <div className="text-xs text-accent mt-1">Clear Height: 36&apos;</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Building B</div>
                    <div className="text-sm font-medium">148,000 SF</div>
                    <div className="text-xs text-accent mt-1">Clear Height: 40&apos;</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mt-4">
                  <span className="text-green-500">✓</span>
                  <span className="text-xs">Ready. Let&apos;s find your building.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
