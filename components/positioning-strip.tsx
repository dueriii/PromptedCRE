import { Factory, Building2, FileStack, Users } from "lucide-react"

const positions = [
  {
    icon: Factory,
    text: "Built for advanced industrial companies",
  },
  {
    icon: Building2,
    text: "Industrial real estate only",
  },
  {
    icon: FileStack,
    text: "Lease and sale workflows",
  },
  {
    icon: Users,
    text: "Human + AI support when needed",
  },
]

export function PositioningStrip() {
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {positions.map((position, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-6 px-4 border-r border-border last:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(4)]:border-r-0 max-lg:[&:nth-child(2)]:border-r-0 max-lg:[&:nth-child(4)]:border-r-0"
            >
              <position.icon className="size-5 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground">{position.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
