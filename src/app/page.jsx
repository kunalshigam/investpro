import { AwardsSection } from "./components/AwardSection";
import { BlogSection } from "./components/BlogSection";
import { CTASection } from "./components/CTASection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { NewsletterAndContact } from "./components/NewsletterAndContact";
import { ResearchReports } from "./components/ResearchReports";
import { TrustAndCredebility } from "./components/TrustAndCredibility";
import { ValueProposition } from "./components/ValueProposition";
import { WebinarsSection } from "./components/WebinarSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <main>
        <ValueProposition />
        <HowItWorks />
        <TrustAndCredebility />
        <ResearchReports />
        <BlogSection />
        <WebinarsSection />
        <FAQSection />
        <AwardsSection />
        <CTASection />
        <NewsletterAndContact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
