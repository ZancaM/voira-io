import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { PerformanceSection } from '@/components/sections/PerformanceSection';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Voira — The New Voice Era | AI Call Assistant for Fraud Detection & Scam Protection</title>
        <meta name="description" content="Voira is the new voice era in call protection. Real-time AI call assistant that answers missed calls, detects fraud and scam signals with 92% accuracy, and delivers instant summaries in under 2 seconds. Zero false positives." />
      </Helmet>
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
