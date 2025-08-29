import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ImpactSection from "@/components/Impact";
import WhyClariFiSection from "@/components/WhyClariFi";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ImpactSection />
        <FeaturesSection />
        <WhyClariFiSection />
        {/* <TestimonialsSection /> */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
