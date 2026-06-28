import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventTypes } from "@/components/EventTypes";
import { HowItWorks } from "@/components/HowItWorks";
import { Included } from "@/components/Included";
import { Flavors } from "@/components/Flavors";
import { Packages } from "@/components/Packages";
import { Differentials } from "@/components/Differentials";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { QuoteForm } from "@/components/QuoteForm";
import { UrgencySection } from "@/components/UrgencySection";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { NaiaraChat } from "@/components/NaiaraChat";
import { LeadPopup } from "@/components/LeadPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuoteForm />
        <Gallery />
        <EventTypes />
        <HowItWorks />
        <Included />
        <Flavors />
        <Packages />
        <UrgencySection />
        <Differentials />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <NaiaraChat />
      <LeadPopup />
    </>
  );
}
