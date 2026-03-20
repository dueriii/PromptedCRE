"use client"

import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-foreground flex items-center justify-center">
              <span className="text-background font-semibold text-sm">P</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">PromptedCRE</span>
          </div>

          <p className="text-muted-foreground max-w-md">
            Real estate intelligence for the companies building things that matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="h-11 px-6"
              onClick={() => scrollToSection("unlock-repo")}
            >
              Get the Repo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-6"
              asChild
            >
              <a
                href="https://calendly.com/admin-promptedcre"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border w-full">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PromptedCRE. Made in America, for the companies remaking it.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
