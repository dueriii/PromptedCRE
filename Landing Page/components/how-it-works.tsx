import { ClipboardList, Search, BarChart3, UserCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Tell it what you need",
    description: "Square footage, clear height, power, docks, rail — the agent captures everything that matters for your operation.",
  },
  {
    number: "02",
    icon: Search,
    title: "Search the market",
    description: "Get precise filters you can drop straight into CoStar, LoopNet, or hand to a broker. No more guessing.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Compare and decide",
    description: "Side-by-side building analysis. Lease vs. buy. Building A vs. Building B. Clear signal, no noise.",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Bring in the humans",
    description: "When it's time to negotiate, tour, or close — connect with industrial brokers who actually know this world.",
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
            Four steps. No fluff. Real estate decisions at the speed your company moves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
