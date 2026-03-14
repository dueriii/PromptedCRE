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
    answer: "PromptedCRE is a structured industrial real estate workflow system designed for advanced industrial companies. It provides ready-to-use prompts and frameworks that you can copy directly into Claude Code, Cursor, or any IDE to systematically handle industrial real estate decisions.",
  },
  {
    question: "Who is this for?",
    answer: "PromptedCRE is built for advanced industrial companies, manufacturing startups, and reindustrialization-focused businesses in the United States. It's designed for operators who need to make serious industrial real estate decisions—warehouse leasing, site selection, or property purchases—without the overhead of a traditional brokerage relationship.",
  },
  {
    question: "Do I need Claude Code?",
    answer: "No, Claude Code is not required. The workflow repo works with any AI assistant or IDE that accepts text prompts. Claude Code, Cursor, VS Code with Copilot, or even direct use with ChatGPT or Claude.ai all work.",
  },
  {
    question: "Can I use another IDE?",
    answer: "Yes. The repo consists of markdown files and structured prompts that work with any text-based development environment or AI assistant. Copy and paste wherever you work.",
  },
  {
    question: "Is this only for leasing?",
    answer: "No. The workflows support both lease and purchase transactions. Whether you're evaluating a warehouse lease, considering buying a manufacturing facility, or comparing multiple site options, the workflows apply.",
  },
  {
    question: "What happens after I submit my email?",
    answer: "You'll immediately unlock the repo section on this page with copy-paste access to the industrial real estate workflows. You may also receive occasional updates about new workflow releases or features.",
  },
  {
    question: "Can I talk to a real person?",
    answer: "Yes. The Book a Call option connects you directly with industrial real estate expertise. This is for companies that want human support for execution—warehouse leasing, site search, purchase evaluation, or factory-oriented real estate decisions.",
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
