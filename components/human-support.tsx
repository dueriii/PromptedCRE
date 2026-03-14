"use client"

import { Button } from "@/components/ui/button"
import { Building2, MapPin, FileText, Factory, ArrowUpRight } from "lucide-react"

const supportAreas = [
  {
    icon: Building2,
    title: "Warehouse leasing",
    description: "Navigate lease negotiations and market positioning.",
  },
  {
    icon: MapPin,
    title: "Industrial site search",
    description: "Identify and evaluate locations for your operations.",
  },
  {
    icon: FileText,
    title: "Purchase opportunities",
    description: "Assess acquisition targets and deal structures.",
  },
  {
    icon: Factory,
    title: "Factory-oriented decisions",
    description: "Real estate support for manufacturing operations.",
  },
]

export function HumanSupport() {
  return (
    <section id="human-support" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Human in the loop
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              When you need real expertise for industrial real estate execution, connect directly with experienced support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {supportAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <div className="size-10 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                  <area.icon className="size-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="h-12 px-8 text-base font-medium"
              asChild
            >
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book a Call
                <ArrowUpRight className="ml-2 size-4" />
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Connect with industrial real estate expertise when execution matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
