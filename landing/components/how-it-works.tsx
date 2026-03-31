import { ClipboardList, BarChart3, FileText } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Describe your needs",
    description: "Tell the agent about your company and space requirements. It captures everything: square footage, clear height, power, docks, zoning, timeline, budget.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Agent evaluates properties",
    description: "Drop listings in or paste them from CoStar and LoopNet. The agent scores each building, runs side-by-side comparisons, and shows you the total cost over your lease term.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Negotiate with confidence",
    description: "Draft LOIs with market-calibrated terms. Review lease contracts for industrial-specific red flags. Know what to ask the landlord before you walk in the room.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            From requirement to signed deal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three steps. No fluff. Real estate decisions at the speed your company moves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-border -translate-x-4" />
              )}
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-accent">{step.number}</span>
                  <div className="size-12 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    <step.icon className="size-5 text-foreground" />
                  </div>
                </div>
                
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
