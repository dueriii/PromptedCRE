import { 
  ClipboardCheck, 
  Filter, 
  Map, 
  Scale, 
  Calendar, 
  HelpCircle, 
  Target, 
  FileText 
} from "lucide-react"

const features = [
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
    description: "Score every building against your real criteria. Kill the bad options fast.",
  },
  {
    icon: Scale,
    title: "Property Comparison",
    description: "Lease vs. buy. Building A vs. Building B. See the numbers, make the call.",
  },
  {
    icon: Calendar,
    title: "Tour Prep",
    description: "Walk into every site visit knowing exactly what to look for and what to ask.",
  },
  {
    icon: HelpCircle,
    title: "Landlord Questions",
    description: "40+ questions that surface hidden problems and create negotiation leverage.",
  },
  {
    icon: Target,
    title: "Deal Guidance",
    description: "LOI structure, negotiation strategy, and deal terms — built for operators, not lawyers.",
  },
  {
    icon: FileText,
    title: "Memo Output",
    description: "Executive decision memos your board and leadership team will actually read.",
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
            Eight workflows. One repo. The entire industrial real estate process from first search to signed deal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
