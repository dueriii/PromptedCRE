import {
  ClipboardCheck,
  Filter,
  Map,
  Scale,
  Calendar,
  HelpCircle,
  Target,
  FileText,
  BookOpen,
  Brain,
  Search,
  Clock
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Memory",
    description: "Persists deal context across sessions — requirements, preferences, and milestones. Works on any platform.",
  },
  {
    icon: BookOpen,
    title: "Using PromptedCRE",
    description: "Orientation on how the system works — skills, templates, and recommended workflows. Get productive in minutes.",
  },
  {
    icon: ClipboardCheck,
    title: "Intake",
    description: "Capture what actually matters — space, power, docks, clear height, timeline. No generic questionnaires.",
  },
  {
    icon: Filter,
    title: "Search Filters",
    description: "Drop-in parameters for CoStar, LoopNet, and Crexi. Search like you know the market — because now you do.",
  },
  {
    icon: Map,
    title: "Property Survey",
    description: "Score every building across location, pricing, and functionality. Kill the bad options fast.",
  },
  {
    icon: Scale,
    title: "Comparison",
    description: "Weighted scoring across Location, Pricing, and Functionality. Lease vs. buy. Deep cost analysis mode for single deals.",
  },
  {
    icon: Calendar,
    title: "Tour Prep",
    description: "Walk into every site visit knowing exactly what to look for and what to ask.",
  },
  {
    icon: HelpCircle,
    title: "Landlord Questions",
    description: "45+ strategic questions that surface hidden problems and create negotiation leverage.",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description: "Phase I ESA, title search, inspections, and DD planning — know what to check before you close.",
  },
  {
    icon: Clock,
    title: "Deal Timeline",
    description: "Milestone schedule for your deal — what's next, what's due, and what's at risk.",
  },
  {
    icon: Target,
    title: "LOI Review",
    description: "Letter of Intent drafting, negotiation strategy, and deal terms — built for operators, not lawyers.",
  },
  {
    icon: FileText,
    title: "Contract Review",
    description: "Industrial lease and purchase analysis — 8 key clauses and 6 red flags your attorney needs to see.",
  },
]

export function RepoFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Twelve skills. Five templates. The entire industrial real estate process from first search to signed deal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="size-10 rounded-lg bg-secondary border border-border flex items-center justify-center mb-4 group-hover:border-accent/50 transition-colors">
                <feature.icon className="size-5 text-foreground" />
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
