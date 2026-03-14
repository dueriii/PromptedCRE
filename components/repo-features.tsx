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
    description: "Structured requirement gathering for space, operations, and timeline.",
  },
  {
    icon: Filter,
    title: "Search Filters",
    description: "Market-ready parameters for submarket, size, and building specs.",
  },
  {
    icon: Map,
    title: "Property Survey",
    description: "Systematic property evaluation against your defined criteria.",
  },
  {
    icon: Scale,
    title: "Property Comparison",
    description: "Side-by-side analysis of lease vs. purchase, building vs. building.",
  },
  {
    icon: Calendar,
    title: "Tour Prep",
    description: "Pre-tour checklists and observation frameworks for site visits.",
  },
  {
    icon: HelpCircle,
    title: "Landlord Questions",
    description: "Critical questions for landlords, developers, and seller reps.",
  },
  {
    icon: Target,
    title: "Deal Guidance",
    description: "Framework for negotiation strategy and deal structure decisions.",
  },
  {
    icon: FileText,
    title: "Memo Output",
    description: "Executive summaries and decision memos for internal stakeholders.",
  },
]

export function RepoFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            What the repo does
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete industrial real estate workflow system.
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
