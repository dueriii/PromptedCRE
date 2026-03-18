"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is PromptedCRE?",
    answer: "A free, open-source AI agent configuration for industrial real estate. Clone the repo, open it in Claude Code, Cursor, Codex CLI, or Gemini CLI, and the agent auto-detects — walking you through the entire process from defining space needs to reviewing contracts. Think of it as an industrial real estate department you can spin up in five minutes.",
  },
  {
    question: "Who is this for?",
    answer: "Founders, operators, and teams at industrial and manufacturing companies in the United States. If you're building things — defense tech, advanced manufacturing, robotics, energy infrastructure, food production — and you need space, this is for you. No brokerage overhead. No gatekeepers.",
  },
  {
    question: "Which AI tools does it work with?",
    answer: "Claude Code, Cursor, Codex CLI, and Gemini CLI all auto-detect the agent configuration when you open the repo. You can also paste the prompts manually into Claude.ai, ChatGPT, or any tool that accepts text. Pick your weapon.",
  },
  {
    question: "Do I need to install anything?",
    answer: "No. Just git clone and open the folder in your AI tool. There's no package to install — it's markdown-based skills and templates that your AI tool reads automatically.",
  },
  {
    question: "Is this only for leasing?",
    answer: "No. Lease or buy — the skills cover both. Warehouse lease, manufacturing facility purchase, multi-site comparison, LOI review, contract analysis. Whatever the deal looks like.",
  },
  {
    question: "How much does it cost?",
    answer: "Zero. The agent is free and open source. If you want human support down the line — leasing, site search, acquisitions — book a call. That's free to you too. The landlord or seller pays broker fees. That's how commercial real estate works.",
  },
  {
    question: "Can I talk to a real person?",
    answer: "Yes. Book a call and you'll talk to someone who knows industrial real estate — not a sales rep reading a script. This is for companies that need boots on the ground for warehouse leasing, site selection, acquisitions, or factory-oriented decisions.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
            Frequently asked questions
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
