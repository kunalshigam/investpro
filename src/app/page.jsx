import CTASection from "./components/CTASection";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import { TrustSection } from "./components/TrustSection";
import { ValueProposition } from "./components/ValueProposition";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}