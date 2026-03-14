import { ClipboardList, Search, BarChart3, UserCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Define your requirement",
    description: "Input your space needs, operational constraints, and location parameters.",
  },
  {
    number: "02",
    icon: Search,
    title: "Generate search instructions",
    description: "Get structured market filters ready for broker outreach or direct research.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Compare buildings and sites",
    description: "Evaluate properties systematically with clear comparison frameworks.",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Bring in a human when needed",
    description: "Connect with industrial real estate expertise for execution support.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured workflow for industrial real estate decisions.
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
