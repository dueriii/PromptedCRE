import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PositioningStrip } from "@/components/positioning-strip"
import { HowItWorks } from "@/components/how-it-works"
import { SampleOutputShowcase } from "@/components/sample-output"
import { WhySection } from "@/components/why-section"
import { HumanSupport } from "@/components/human-support"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <PositioningStrip />
      <HowItWorks />
      <SampleOutputShowcase />
      <WhySection />
      <HumanSupport />
      <FAQSection />
      <Footer />
    </main>
  )
}
