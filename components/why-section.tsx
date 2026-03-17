import { Check } from "lucide-react"

const differentiators = [
  "Built for operators who build things — not paper-pushers who push listings",
  "Not a brokerage site. Not a portal. Not another SaaS dashboard.",
  "Auto-detects in Claude Code, Cursor, Codex CLI, and Gemini CLI — wherever you already work",
  "Purpose-built for warehouses, factories, and manufacturing facilities",
  "Human brokers on standby when you need boots on the ground",
]

export function WhySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            The old way is broken
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Industrial companies are building the future — advanced manufacturing, defense tech, robotics, energy infrastructure — and they&apos;re stuck navigating real estate with cold calls and PDF brochures. PromptedCRE gives you an internal real estate function on day one, plus human execution when it matters.
          </p>
          
          <div className="space-y-4">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="size-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3 text-accent" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
