import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { ServicesSection } from "@/components/services-section"
import { HowItWorks } from "@/components/how-it-works"
import { ExclusiveSection } from "@/components/exclusive-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ContactForm />
        <SocialProof />
        <ServicesSection />
        <HowItWorks />
        <ExclusiveSection />
      </main>
      <Footer />
    </>
  )
}
