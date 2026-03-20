"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-7 rounded bg-foreground flex items-center justify-center">
              <span className="text-background font-semibold text-xs">P</span>
            </div>
            <span className="font-semibold tracking-tight">PromptedCRE</span>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => scrollToSection("human-support")}
            >
              Talk to a Human
            </Button>
            <Button size="sm" asChild>
              <a
                href="https://github.com/dueriii/PromptedCRE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Repo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
