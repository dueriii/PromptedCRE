"use client"

import { useState } from "react"
import sampleData from "@/data/sample-outputs.json"

type Tab = "intake" | "comparison" | "loi"

const tabs: { key: Tab; label: string }[] = [
  { key: "intake", label: "Requirement Summary" },
  { key: "comparison", label: "Property Comparison" },
  { key: "loi", label: "LOI Review" },
]

function IntakeCard() {
  const data = sampleData.intake
  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {data.fields.map((field) => (
          <div key={field.label} className="flex flex-col sm:flex-row sm:gap-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground sm:w-28 shrink-0">{field.label}</span>
            <span className="text-sm font-mono text-foreground">{field.value}</span>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-border">
        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Dealbreakers</p>
        <ul className="space-y-1.5">
          {data.dealbreakers.map((item, i) => (
            <li key={i} className="text-sm text-red-400 font-mono flex items-start gap-2">
              <span className="text-red-500 mt-0.5 shrink-0">!</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ComparisonCard() {
  const data = sampleData.comparison
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 text-xs uppercase tracking-wide text-muted-foreground font-normal">Spec</th>
              <th className="text-left py-2 text-xs uppercase tracking-wide text-accent font-normal">{data.properties[0]}</th>
              <th className="text-left py-2 text-xs uppercase tracking-wide text-muted-foreground font-normal">{data.properties[1]}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.spec} className="border-b border-border/50">
                <td className="py-2 text-muted-foreground">{row.spec}</td>
                <td className="py-2 font-mono text-foreground">{row.a}</td>
                <td className="py-2 font-mono text-foreground">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {data.scores.headers.map((h) => (
                <th key={h} className="text-left py-2 text-xs uppercase tracking-wide text-muted-foreground font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.scores.rows.map((row) => (
              <tr key={row[0]} className="border-b border-border/50">
                {row.map((cell, i) => (
                  <td key={i} className={`py-2 ${i === 0 ? "text-muted-foreground" : "font-mono text-foreground"}`}>{cell}</td>
                ))}
              </tr>
            ))}
            <tr className="font-semibold">
              {data.scores.totals.map((cell, i) => (
                <td key={i} className={`py-2 ${i === 0 ? "text-foreground" : i === 2 ? "font-mono text-accent" : "font-mono text-foreground"}`}>{cell}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pt-3 border-t border-border">
        <p className="text-sm text-accent font-medium">{data.recommendation}</p>
      </div>
    </div>
  )
}

function LOICard() {
  const data = sampleData.loi
  return (
    <div className="space-y-3">
      {data.flags.map((flag, i) => (
        <div key={i} className={`p-3 rounded-lg border ${flag.severity === "red" ? "border-red-500/30 bg-red-500/5" : "border-yellow-500/30 bg-yellow-500/5"}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`text-xs font-semibold uppercase ${flag.severity === "red" ? "text-red-400" : "text-yellow-400"}`}>
              {flag.severity === "red" ? "Red Flag" : "Warning"}
            </span>
            <span className="text-xs text-muted-foreground">{flag.clause}</span>
          </div>
          <p className="text-sm text-foreground leading-relaxed">{flag.issue}</p>
        </div>
      ))}
    </div>
  )
}

export function SampleOutputShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>("intake")
  const activeData = sampleData[activeTab]

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            See what the agent produces
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real outputs from real workflows. This is what you get before you ever talk to a broker.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tab bar */}
          <div className="flex gap-1 p-1 bg-secondary/50 rounded-lg border border-border mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 px-4 py-2 rounded-md text-sm transition-colors ${
                  activeTab === tab.key
                    ? "bg-background text-foreground shadow-sm border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Card */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border bg-secondary/20">
              <h3 className="font-semibold text-foreground">{activeData.title}</h3>
              <p className="text-sm text-muted-foreground">{activeData.subtitle}</p>
            </div>
            <div className="px-5 py-5">
              {activeTab === "intake" && <IntakeCard />}
              {activeTab === "comparison" && <ComparisonCard />}
              {activeTab === "loi" && <LOICard />}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Sample data from a fictional company. Your outputs will reflect your actual requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
