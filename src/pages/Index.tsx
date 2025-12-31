import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { PerformanceSection } from '@/components/sections/PerformanceSection';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <UseCasesSection />
        <PerformanceSection />
        <IntegrationsSection />
        <SecuritySection />
        <SocialProofSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
