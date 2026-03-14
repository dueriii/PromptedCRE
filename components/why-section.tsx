import { Check } from "lucide-react"

const differentiators = [
  "Structured workflows built for industrial occupiers",
  "Not a brokerage website or listing portal",
  "Works directly in your IDE and AI tools",
  "Built for warehouse, manufacturing, and factory decisions",
  "Integrates human expertise when execution matters",
]

export function WhySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Why PromptedCRE
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            This is different from generic software and different from a traditional brokerage website. PromptedCRE gives advanced industrial companies a structured industrial real estate workflow that feels like having an internal real estate function plus outside execution support.
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
